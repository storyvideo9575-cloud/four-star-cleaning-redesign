import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, Plugin} from 'vite';

function apiDevPlugin(): Plugin {
  return {
    name: 'api-quote-dev-server',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (req.url && req.url.split('?')[0] === '/api/quote') {
          try {
            // Dynamically import handler to support dev HMR
            const { default: handler } = await server.ssrLoadModule('./api/quote.ts');
            // Extend res with status and json helpers if needed by Express-like calls
            const vercelRes: any = res;
            if (!vercelRes.status) {
              vercelRes.status = function (code: number) {
                this.statusCode = code;
                return this;
              };
            }
            if (!vercelRes.json) {
              vercelRes.json = function (data: any) {
                this.setHeader('Content-Type', 'application/json');
                this.end(JSON.stringify(data));
                return this;
              };
            }
            await handler(req as any, vercelRes);
          } catch (err) {
            console.error('API Dev Server error:', err);
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ ok: false, error: 'Internal API Server Error' }));
          }
        } else {
          next();
        }
      });
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), apiDevPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
