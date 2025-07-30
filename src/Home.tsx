import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Badge } from 'react-bootstrap';
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
            const paragraphs = body.trim().split('\n\n');
            const firstParagraph = paragraphs.find(p => p.trim() && !p.startsWith('#'));
            const excerpt = firstParagraph ? firstParagraph.substring(0, 200) + '...' : '';
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
      
      <Row xs={1} md={2} lg={3} className="g-4">
        {posts.map((post) => (
          <Col key={post.slug}>
            <Card className="h-100 border-0 shadow-sm post-card-hover">
              <Card.Body className="d-flex flex-column p-4">
                <div className="mb-3">
                  <Badge pill bg="primary" className="px-3 py-2">
                    {formatDate(post.date)}
                  </Badge>
                </div>
                <Card.Title className="h5 mb-3">
                  <Link 
                    to={`/posts/${post.slug}`} 
                    className="text-decoration-none text-dark stretched-link"
                  >
                    {post.title}
                  </Link>
                </Card.Title>
                {post.excerpt && (
                  <Card.Text className="text-muted flex-grow-1 mb-4">
                    {post.excerpt}
                  </Card.Text>
                )}
                <div className="mt-auto">
                  <small className="text-primary fw-bold">
                    Read more →
                  </small>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Home;