import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';

interface PostData {
  content: string;
  title?: string;
  date?: string;
}

const Post = () => {
  const [post, setPost] = useState<PostData | null>(null);
  const { slug } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`/posts/${slug}/index.md`);
        const text = await response.text();
        
        const frontmatterMatch = text.match(/^---\n([\s\S]*?)\n---/);
        const content = text.replace(/^---\n[\s\S]*?\n---\n/, '');
        
        let title, date;
        if (frontmatterMatch) {
          const frontmatter = frontmatterMatch[1];
          const titleMatch = frontmatter.match(/title:\s*([^\n]*)/);
          if (titleMatch) {
            title = titleMatch[1];
          }
          const dateMatch = frontmatter.match(/date:\s*(.*)/);
          if (dateMatch) {
            date = dateMatch[1];
          }
        }
        
        setPost({ content, title, date });
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };

    fetchPost();
  }, [slug]);

  useEffect(() => {
    if (post?.title) {
      document.title = post.title;
    }
  }, [post]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="post">
      {post.title && <h1 className="display-4 mb-3">{post.title}</h1>}
      {post.date && (
        <p className="text-muted mb-4">
          {new Date(post.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </p>
      )}
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </div>
  );
};

export default Post;