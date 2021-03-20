import Layout from '../components/Layout';

import Head from 'next/head';
import NicknameEditForm from '@components/Profile/NicknameEditForm';
import FollowList from '@components/Profile/FollowList';
import { useSelector } from 'react-redux';
import { rootState } from '@store/reducer';

const Profile = () => {
  const me = useSelector((state: rootState) => state.user.me);

  if (!me) {
    return <Layout>로그인하세요.</Layout>;
  }

  return (
    <Layout>
      <Head>
        <title>프로필 | NodeBird</title>
      </Head>
      <NicknameEditForm />
      <FollowList title="Followings" data={me.Followings} />
      <FollowList title="Follwers" data={me.Followers} />
    </Layout>
  );
};

export default Profile;
