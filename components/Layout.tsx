import React, { ReactNode } from 'react';
import Link from 'next/link';
import { Input, Menu, Row, Col } from 'antd';
import UserProfile from './UserProfile';
import LoginForm from './LoginForm';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { rootState } from 'store/reducer';

interface Props {
  children: ReactNode | string;
}

const Layout: React.FC<Props> = ({ children }) => {
  const { isLogIn } = useSelector(({ user }: rootState) => user);

  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item>
          <Link href="/">
            <a>노드버드</a>
          </Link>
        </Menu.Item>

        <Menu.Item>
          <SearchInput.Search enterButton />
        </Menu.Item>

        <Menu.Item>
          <Link href="/profile">
            <a>프로필</a>
          </Link>
        </Menu.Item>

        <Menu.Item>
          <Link href="/signup">
            <a>회원가입</a>
          </Link>
        </Menu.Item>
      </Menu>

      <RowWrapper gutter={8}>
        <Col xs={24} md={6}>
          {isLogIn ? <UserProfile /> : <LoginForm />}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <a
            href="https://mechaniccoder-27705.web.app/"
            target="_blank"
            rel="norefferer noopener"
          >
            Made by Mechaniccoder
          </a>
        </Col>
      </RowWrapper>
    </div>
  );
};

export default Layout;

const SearchInput = styled(Input)`
  vertical-align: middle;
`;

const RowWrapper = styled(Row)`
  padding: 10px;
`;
