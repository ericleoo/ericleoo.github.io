import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Badge } from 'react-bootstrap';
import removeMarkdown from 'remove-markdown';
import { postSlugs, getPost } from './posts';

interface PostMetadata {
  slug: string;
  title: string;
  date: string;
  published: boolean;
  excerpt?: string;
}

const Home = () => {
  const [posts, setPosts] = useState<PostMetadata[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPostsMetadata = async () => {
      try {
        const postsData = await Promise.all(
          postSlugs.map(async (slug) => {
            const { attributes, body } = await getPost(slug);
            const plainTextBody = removeMarkdown(body);
            const paragraphs = plainTextBody.trim().split('\n\n');
            const contentParagraphs = paragraphs.filter(p => p.trim() && !p.startsWith('#'));
            const excerptContent = contentParagraphs.join('\n\n');
            const excerpt = excerptContent ? excerptContent.substring(0, 400) + '...' : '';
            return { ...attributes, slug, excerpt } as PostMetadata;
          })
        );
        
        const sortedPosts = postsData
          .filter(post => post.published !== false)
          .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        
        setPosts(sortedPosts);
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPostsMetadata();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long', 
      day: 'numeric'
    });
  };

  if (loading) {
    return <div className="text-center mt-5">Loading posts...</div>;
  }

  return (
    <div>
      <div className="mb-5 text-center">
        <h1 className="display-3 fw-bold mb-3">Eric's Blog</h1>
        <p className="lead text-muted">Thoughts on economics, markets, and investments</p>
      </div>
      
      <div className="post-list">
        {posts.map((post) => (
          <article key={post.slug} className="post-item mb-4 pb-4 border-bottom">
            <div className="mb-2">
              <Badge bg="primary" className="px-2 py-1">
                {formatDate(post.date)}
              </Badge>
            </div>
            <h2 className="h4 mb-3">
              <Link 
                to={`/posts/${post.slug}`} 
                className="text-decoration-none"
              >
                {post.title}
              </Link>
            </h2>
            {post.excerpt && (
              <p className="text-muted mb-3">
                {post.excerpt}
              </p>
            )}
            <Link 
              to={`/posts/${post.slug}`}
              className="text-primary text-decoration-none fw-bold"
            >
              Read more →
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Home;