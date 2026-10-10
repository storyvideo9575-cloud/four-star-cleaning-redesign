import crypto from 'crypto';

interface RateLimitRecord {
  count: number;
  resetAt: number;
}

interface IdempotencyRecord {
  reference: string;
  timestamp: number;
}

// In-memory buckets for serverless execution lifecycle
const ipBuckets = new Map<string, RateLimitRecord>();
const idempotencyStore = new Map<string, IdempotencyRecord>();

const MAX_REQUESTS_PER_WINDOW = 5;
const WINDOW_DURATION_MS = 10 * 60 * 1000; // 10 minutes
const IDEMPOTENCY_WINDOW_MS = 60 * 1000; // 60 seconds

export function checkRateLimit(ip: string): { allowed: boolean; remaining: number } {
  const now = Date.now();
  const record = ipBuckets.get(ip);

  // Clean old entries periodically
  if (ipBuckets.size > 1000) {
    for (const [key, val] of ipBuckets.entries()) {
      if (val.resetAt < now) ipBuckets.delete(key);
    }
  }

  if (!record || record.resetAt < now) {
    ipBuckets.set(ip, {
      count: 1,
      resetAt: now + WINDOW_DURATION_MS,
    });
    return { allowed: true, remaining: MAX_REQUESTS_PER_WINDOW - 1 };
  }

  if (record.count >= MAX_REQUESTS_PER_WINDOW) {
    return { allowed: false, remaining: 0 };
  }

  record.count += 1;
  return { allowed: true, remaining: MAX_REQUESTS_PER_WINDOW - record.count };
}

export function checkDuplicateSubmission(
  idempotencyKey?: string,
  emailHashKey?: string
): { isDuplicate: boolean; existingReference?: string } {
  const now = Date.now();
  const key = idempotencyKey || emailHashKey;

  if (!key) return { isDuplicate: false };

  // Clean old idempotency entries
  if (idempotencyStore.size > 1000) {
    for (const [k, val] of idempotencyStore.entries()) {
      if (now - val.timestamp > IDEMPOTENCY_WINDOW_MS) idempotencyStore.delete(k);
    }
  }

  const existing = idempotencyStore.get(key);
  if (existing && now - existing.timestamp < IDEMPOTENCY_WINDOW_MS) {
    return { isDuplicate: true, existingReference: existing.reference };
  }

  return { isDuplicate: false };
}

export function recordIdempotency(key: string, reference: string): void {
  idempotencyStore.set(key, {
    reference,
    timestamp: Date.now(),
  });
}
