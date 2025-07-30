import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';

import { getPost } from './posts';

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
        if (!slug) return;
        const postData = await getPost(slug);
        const { attributes, body } = postData;
        setPost({ content: body, title: attributes.title, date: attributes.date });
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
    <div className="post-content bg-white p-3 p-md-4 rounded-lg shadow-sm">
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