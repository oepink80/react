import React, { useState, useEffect } from 'react';

import PostItem from '@/components/PostItem/PostItem';

// Компонент PostList
const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error('Ошибка:', error));
  }, []);

  // Рендеринг списка постов
  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <PostItem post={post}></PostItem>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
