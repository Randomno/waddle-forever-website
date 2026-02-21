import { fetchMarkdown } from '$lib/fetch-markdown';

export async function load() {
  return { markdown: await fetchMarkdown('MODS') }
}