import adapter from '@sveltejs/adapter-node';
import fs from 'fs';

// security checks for the version backup file
const VERSION_FILE = 'version-cache';

if (!fs.existsSync(VERSION_FILE)) {
  console.error('✘ Version backup file needs to be created!');
  process.exit(1);
} else {
  const version = fs.readFileSync(VERSION_FILE, { encoding: 'utf-8' });
  if (version.trim().match(/^\d+\.\d+\.\d+$/) === null) {
    console.error('✘ Version backup file is invalid');
    process.exit(1);
  }
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    // adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
    // If your environment is not supported, or you settled on a specific environment, switch out the adapter.
    // See https://svelte.dev/docs/kit/adapters for more information about adapters.
    adapter: adapter()
  }
};

export default config;
