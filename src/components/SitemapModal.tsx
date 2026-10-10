import React, { useState } from 'react';
import { PageRoute } from '../types';
import { SEO_PAGE_METADATA } from '../data/businessData';
import { X, Check, Copy, ExternalLink } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (path: PageRoute) => void;
}

export const SitemapModal: React.FC<Props> = ({ isOpen, onClose, onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'routes' | 'xml' | 'robots'>('routes');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const baseUrl = 'https://4starcleaning.com';
  const routes = Object.keys(SEO_PAGE_METADATA) as PageRoute[];

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (path) => `  <url>
    <loc>${baseUrl}${path === '/' ? '' : path}</loc>
    <lastmod>2026-10-10</lastmod>
    <changefreq>${path === '/' ? 'weekly' : 'monthly'}</changefreq>
    <priority>${path === '/' ? '1.0' : path.startsWith('/services') ? '0.8' : '0.6'}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  const robotsTxt = `# robots.txt for Four Star General Cleaning Concept
User-agent: *
Allow: /

# Sitemap Location
Sitemap: ${baseUrl}/sitemap.xml
`;

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="bg-white rounded-xl shadow-2xl border border-slate-200 w-full max-w-3xl max-h-[85vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div>
            <h2 className="text-base font-bold text-[#10243A]">SEO Architecture, Sitemap & robots.txt</h2>
            <p className="text-xs text-slate-500">Verified indexable routes and search crawler directives</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-slate-500 hover:text-slate-800 rounded-md hover:bg-slate-200/50"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Controls */}
        <div className="flex border-b border-slate-200 px-6 bg-white gap-4 text-xs font-semibold">
          <button
            type="button"
            onClick={() => setActiveTab('routes')}
            className={`py-3 border-b-2 transition-colors ${
              activeTab === 'routes' ? 'border-[#3D8B68] text-[#10243A]' : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            All 12 Verified Routes ({routes.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('xml')}
            className={`py-3 border-b-2 transition-colors ${
              activeTab === 'xml' ? 'border-[#3D8B68] text-[#10243A]' : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            sitemap.xml
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('robots')}
            className={`py-3 border-b-2 transition-colors ${
              activeTab === 'robots' ? 'border-[#3D8B68] text-[#10243A]' : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            robots.txt
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-6 overflow-y-auto flex-1 text-xs">
          {activeTab === 'routes' && (
            <div className="space-y-3">
              <p className="text-slate-600 mb-2">
                Every page features a distinct H1 headline, canonical meta tag, Open Graph card, and unique meta description:
              </p>
              <div className="divide-y divide-slate-100 border border-slate-200 rounded-lg overflow-hidden">
                {routes.map((path) => {
                  const meta = SEO_PAGE_METADATA[path];
                  return (
                    <div key={path} className="p-3 bg-white hover:bg-slate-50 transition-colors flex items-start justify-between gap-4">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="font-mono font-bold text-[#10243A] text-xs">{path}</span>
                          <span className="text-[11px] text-slate-400">· Canonical Target</span>
                        </div>
                        <p className="text-slate-800 font-semibold">{meta.title}</p>
                        <p className="text-slate-500 text-[11px]">{meta.desc}</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          onNavigate(path);
                          onClose();
                        }}
                        className="px-2.5 py-1 text-[11px] font-medium text-[#3D8B68] hover:text-[#2F6D52] bg-emerald-50 rounded shrink-0 flex items-center gap-1"
                      >
                        <span>Visit</span>
                        <ExternalLink className="w-3 h-3" />
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {activeTab === 'xml' && (
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-slate-600">Standard XML Sitemap containing only intended indexable pages:</span>
                <button
                  type="button"
                  onClick={() => copyToClipboard(sitemapXml)}
                  className="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded text-xs flex items-center gap-1.5 font-medium"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied XML' : 'Copy sitemap.xml'}</span>
                </button>
              </div>
              <pre className="p-4 bg-slate-900 text-slate-200 rounded-lg font-mono text-[11px] leading-relaxed overflow-x-auto">
                {sitemapXml}
              </pre>
            </div>
          )}

          {activeTab === 'robots' && (
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-slate-600">Robots.txt pointing directly to valid sitemap:</span>
                <button
                  type="button"
                  onClick={() => copyToClipboard(robotsTxt)}
                  className="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded text-xs flex items-center gap-1.5 font-medium"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy robots.txt'}</span>
                </button>
              </div>
              <pre className="p-4 bg-slate-900 text-slate-200 rounded-lg font-mono text-[11px] leading-relaxed overflow-x-auto">
                {robotsTxt}
              </pre>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-slate-200 bg-slate-50 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-semibold text-slate-700 bg-white border border-slate-300 rounded hover:bg-slate-100"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
