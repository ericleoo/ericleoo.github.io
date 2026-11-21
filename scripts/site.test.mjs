import { describe, expect, it } from 'vitest';
import { formatDate, loadPosts, renderRoute, slugify } from './site.mjs';

describe('static site', () => {
  it('loads published posts newest first', () => {
    const posts = loadPosts();

    expect(posts.length).toBeGreaterThan(0);
    expect(posts.every((post) => post.published)).toBe(true);

    for (let index = 1; index < posts.length; index += 1) {
      expect(posts[index - 1].date >= posts[index].date).toBe(true);
    }
  });

  it(
    'renders a post as complete HTML without client JavaScript',
    () => {
      const [post] = loadPosts();
      const response = renderRoute(post.url);

      expect(response.status).toBe(200);
      expect(response.type).toContain('text/html');
      expect(response.body).toContain(post.title);
      expect(response.body).toContain('class="post-body prose"');
      expect(response.body).toContain('<h1>');
      expect(response.body).toContain('application/ld+json');
    },
    30000
  );

  it('returns a real 404 page for unknown routes', () => {
    const response = renderRoute('/posts/does-not-exist');

    expect(response.status).toBe(404);
    expect(response.body).toContain("This page isn't here.");
  });

  it('builds stable heading ids', () => {
    expect(slugify('Part 1 --- Stormclouds Gather...')).toBe('part-1-stormclouds-gather');
  });

  it('formats dates in UTC', () => {
    expect(formatDate('2024-12-01')).toBe('December 1, 2024');
  });
});
