import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';
import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      bundler: 'vite',
      webServerCommands: {
        default: 'pnpm exec nx run @de/frontend:dev',
        production: 'pnpm exec nx run @de/frontend:dev',
      },
      ciWebServerCommand: 'pnpm exec nx run @de/frontend:dev',
      ciBaseUrl: 'http://localhost:4200',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
