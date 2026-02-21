import { getCurrentVersion } from '$lib/version';

export async function load() {
  return { version: (await getCurrentVersion()).version };
}