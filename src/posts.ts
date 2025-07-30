import fm from 'front-matter';

const postModules = import.meta.glob('/posts/*/index.md', { query: '?raw', import: 'default' });

export const postSlugs = Object.keys(postModules).map(path => {
  const match = path.match(/\/posts\/(.*?)\/index\.md/);
  return match ? match[1] : '';
}).filter(Boolean);

export async function getPost(slug: string) {
  const path = `/posts/${slug}/index.md`;
  const rawContent = await postModules[path]();
  const { attributes, body } = fm(rawContent);
  return { attributes, body };
}
