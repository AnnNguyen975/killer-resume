import { defineConfig } from 'vitest/config';

import { UserConfig } from 'vitest/config'; // Import Vitest types

// https://vitejs.dev/config/
export default defineConfig({
 
  test: {
    // Exclude the e2e tests
    exclude: ['**/e2e/**'], // Adjust the pattern to fit your directory structure
  } as UserConfig['test'], // Type assertion to avoid TypeScript error
});
