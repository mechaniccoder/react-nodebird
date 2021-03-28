import PostCard from '@components/Post/PostCard';
import PostForm from '@components/Post/PostForm';
import { loadPost } from '@store/post';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { rootState } from 'store/reducer';
import Layout from '../components/Layout';

export default function Home() {
  const { me } = useSelector((state: rootState) => state.user);
  const { mainPosts } = useSelector((state: rootState) => state.post);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPost());
  }, [dispatch, loadPost]);

  return (
    <Layout>
      {me && <PostForm />}
      {mainPosts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </Layout>
  );
}
