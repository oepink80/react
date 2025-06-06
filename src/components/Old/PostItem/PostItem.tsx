import { useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import React, { useState } from 'react';
import { z } from 'zod';

interface Post {
  id: number;
  title: string;
  body: string;
}

type PostItemProps = {
  post: Post;
};

export const postSchema = z.object({
  userId: z.number().positive(), // Положительное целое число
  id: z.number().positive(), // Положительное целое число
  title: z.string(), // Обычная строка
  body: z.string(),
});

const PostItem = ({ post }: PostItemProps) => {
  const [showModal, setShowModal] = useState(false); // Показывать модалку или нет
  const [currentPost, setCurrentPost] = useState<any>(null); // Хранит текущий пост
  const [errorMessage, setErrorMessage] = useState<string | null>(null); // Ошибка
  const [comments, setComments] = useState<any>(null); // Комментарии
  const queryClient = useQueryClient();

  // Запрос полного поста
  const fetchFullPost = async () => {
    console.log(post);
    try {
      const result = await queryClient.fetchQuery({
        queryKey: ['single-post', post.id], // Уникальный ключ для кеширования
        queryFn: async () => {
          const response = await axios.get(
            `https://jsonplaceholder.typicode.com/posts/${post.id}`,
          );
          return postSchema.parse(response.data); // Применяем валидацию
        },
      });

      const comments = await fetchcomments(); // Загрузка комментариев для текущего поста

      setCurrentPost(result);
      setComments(comments);
      setShowModal(true);
    } catch (err) {
      setErrorMessage('Ошибка при получении поста');
    }
  };

  const fetchcomments = async () => {
    console.log('fetching comments for post', post.id);
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${post.id}/comments`,
    );
    return response.data;
  };

  return (
    <>
      {!showModal && (
        <div
          className="bg-white shadow-md rounded-lg p-4 mb-4 cursor-pointer hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
          onClick={() => fetchFullPost()}
        >
          g
          <strong className="block text-gray-800 font-semibold">
            {post.title}
          </strong>
          <p className="mt-2 text-gray-600 leading-relaxed">{post.body}</p>
        </div>
      )}
      {showModal && currentPost && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white w-1/2 p-4 rounded-lg shadow-lg">
            <button
              className="absolute top-2 right-2 text-red-500 focus:outline-none"
              onClick={() => setShowModal(false)}
            >
              X
            </button>
            <h2 className="text-2xl font-bold mb-4">{currentPost.title}</h2>
            <p className="text-gray-700">{currentPost.body}</p>

            <div>
              <h2 className="text-2xl font-bold mb-4">Комментарии:</h2>
              {comments.map((comment: any) => (
                <div key={comment.id} className="mb-4">
                  <strong className="block text-gray-800 font-semibold">
                    {comment.name}
                  </strong>
                  <p className="mt-2 text-gray-600 leading-relaxed">
                    {comment.body}
                  </p>
                  <p className="text-gray-500">{comment.email}</p>
                </div>
              ))}
              <button
                onClick={async () => {
                  setComments(await fetchcomments());
                }}
              >
                Обновить комментарии
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="error-message" style={{ color: 'red' }}>
        {errorMessage}
      </div>
    </>
  );
};

export default PostItem;
