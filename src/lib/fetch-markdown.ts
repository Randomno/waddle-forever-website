import { error } from '@sveltejs/kit';

export async function fetchMarkdown(name: string) {
  const res = await fetch(`https://raw.githubusercontent.com/nhaar/Waddle-Forever/main/guide/${name}.md`);

  if (!res.ok) {
    throw error(502, 'Could not get the markdown file from GitHub');
  }

  return await res.text();
}