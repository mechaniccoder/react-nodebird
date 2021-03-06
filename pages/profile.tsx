import Layout from '../components/Layout';

import Head from 'next/head';
import NicknameEditForm from '@components/Profile/NicknameEditForm';
import FollowList from '@components/Profile/FollowList';
import { useSelector } from 'react-redux';
import { rootState } from '@store/reducer';

const Profile = () => {
  const me = useSelector((state: rootState) => state.user.me);

  const follwings = [
    { nickname: '여명' },
    { nickname: '승환' },
    { nickname: '성하' },
  ];
  const follwers = [
    { nickname: '준영' },
    { nickname: '상규' },
    { nickname: '헬로' },
  ];

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
