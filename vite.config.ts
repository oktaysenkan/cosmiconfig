import { defineConfig } from 'vitest/config';

const vitestConfig = defineConfig({
  test: {
    threads: false,
    environment: 'node',
    restoreMocks: true,
    mockReset: true,
    includeSource: ['src/**/*.{js,ts}'],
    coverage: {
      provider: 'istanbul',
      reporter: ['text', 'html', 'lcov'],
      include: ['src/**/*.{js,ts}'],
      branches: 95,
      functions: 95,
      lines: 95,
      statements: 95,
    },
  },
});

// eslint-disable-next-line import/no-default-export
export default vitestConfig;
