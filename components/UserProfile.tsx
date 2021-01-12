import { FC, useCallback } from 'react';
import { Card, Avatar, Button } from 'antd';

interface Props {
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const UserProfile: FC<Props> = ({ setIsLoggedIn }) => {
  const onLogout = useCallback(() => {
    setIsLoggedIn(false);
  }, [setIsLoggedIn]);

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
      <Card.Meta avatar={<Avatar>MC</Avatar>} title="Mechaniccoder" />
      <Button onClick={onLogout}>로그아웃</Button>
    </Card>
  );
};

export default UserProfile;
