import React, { ReactNode, useEffect } from 'react';
import Link from 'next/link';
import { Input, Menu, Row, Col, Spin } from 'antd';
import UserProfile from './UserProfile';
import LoginForm from './LoginForm';
import styled, { createGlobalStyle } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { rootState } from 'store/reducer';
import { loadUserRequest } from '@store/user';
import { LoadingOutlined } from '@ant-design/icons';

interface Props {
  children: ReactNode | string;
}

const Layout: React.FC<Props> = ({ children }) => {
  const { me, loadUserLoading } = useSelector(({ user }: rootState) => user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUserRequest());
  }, [dispatch, loadUserRequest]);

  return (
    <div>
      <Global />
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
          {me ? (
            <UserProfile />
          ) : loadUserLoading ? (
            <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
          ) : (
            <LoginForm />
          )}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <a href="https://mechaniccoder-27705.web.app/" target="_blank" rel="norefferer noopener">
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

const Global = createGlobalStyle`
  .ant-row {
    margin-left: 0 !important;
    margin-right: 0 !important;
  }
`;
