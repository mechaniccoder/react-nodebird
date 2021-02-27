import PostCard from '@components/Post/PostCard';
import PostForm from '@components/Post/PostForm';
import { useSelector } from 'react-redux';
import { rootState } from 'store/reducer';
import Layout from '../components/Layout';

export default function Home() {
  const { isLogIn } = useSelector((state: rootState) => state.user);
  const { mainPosts } = useSelector((state: rootState) => state.post);

  return (
    <Layout>
      {isLogIn && <PostForm />}
      {mainPosts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </Layout>
  );
}
