import Layout from '../components/Layout';

import Head from 'next/head';
import NicknameEditForm from '@components/Profile/NicknameEditForm';
import FollowList from '@components/Profile/FollowList';

const Profile = () => {
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

  return (
    <Layout>
      <Head>
        <title>프로필 | NodeBird</title>
      </Head>
      <NicknameEditForm />
      <FollowList title="Followings" data={follwings} />
      <FollowList title="Follwers" data={follwers} />
    </Layout>
  );
};

export default Profile;
