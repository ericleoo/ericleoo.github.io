import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';

const Post = () => {
  const [post, setPost] = useState('');
  const { slug } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch(`/posts/${slug}/index.md`);
      const text = await response.text();
      setPost(text);
    };

    fetchPost();
  }, [slug]);

  return (
    <div className="post">
      <ReactMarkdown>{post}</ReactMarkdown>
    </div>
  );
};

export default Post;
