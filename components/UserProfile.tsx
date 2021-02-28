import { FC, useCallback } from 'react';
import { Card, Avatar, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'store/user';
import { rootState } from '@store/reducer';

const UserProfile: FC = () => {
  const dispatch = useDispatch();
  const { me } = useSelector((state: rootState) => state.user);

  const onLogout = useCallback(() => {
    dispatch(logOut());
  }, []);

  return (
    <Card
      actions={[
        <div key="twit">
          짹짹
          <br />0
        </div>,
        <div key="followings">
          Following
          <br />0
        </div>,
        <div key="followers">
          Follower
          <br />0
        </div>,
      ]}
    >
      <Card.Meta
        avatar={<Avatar>{me?.nickname}</Avatar>}
        title={me?.nickname}
      />
      <Button onClick={onLogout}>로그아웃</Button>
    </Card>
  );
};

export default UserProfile;
