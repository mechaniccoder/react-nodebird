import React, { ReactNode } from 'react';
import Link from 'next/link';
import { Menu } from 'antd';

interface Props {
  children: ReactNode | string;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item>
          <Link href="/">
            <a>노드버드</a>
          </Link>
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
      <main>{children}</main>
    </div>
  );
};

export default Layout;