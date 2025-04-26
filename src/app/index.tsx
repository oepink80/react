import Old from '@/components/Old/Old';
import PostList from '@/components/PostList/PostList';

export const App = () => {
  return (
    <>
      <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
        Список постов
      </h2>
      <PostList />

      <hr className="my-12 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
      <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
        Предыдущие уроки
      </h2>
      <Old />
    </>
  );
};
