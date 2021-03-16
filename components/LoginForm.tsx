import { rootState } from '@store/reducer';
import { Button, Form, Input } from 'antd';
import Link from 'next/link';
import { FC, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginInRequest } from 'store/user';
import styled from 'styled-components';
import useForm from '../hooks/useForm';

const LoginForm: FC = () => {
  const { state, handleOnChange } = useForm();
  const { email, password } = state;
  const dispatch = useDispatch();
  const loginLoading = useSelector(
    (state: rootState) => state.user.loginLoading
  );

  const onSubmit = useCallback(() => {
    dispatch(loginInRequest(email, password));
  }, [dispatch, email, password]);

  return (
    <Form onFinish={onSubmit}>
      <div>
        <label htmlFor="email">아이디</label>
        <Input
          id="email"
          type="text"
          name="email"
          value={email}
          onChange={handleOnChange}
          required
        />
      </div>

      <div>
        <label htmlFor="password">비밀번호</label>
        <Input
          id="password"
          type="password"
          name="password"
          value={password}
          onChange={handleOnChange}
          required
        />
      </div>

      <ButtonContainer>
        <LoginBtn type="primary" htmlType="submit" loading={loginLoading}>
          로그인
        </LoginBtn>
        <Link href="/signup" data-test-id="link">
          <a>회원가입</a>
        </Link>
      </ButtonContainer>
    </Form>
  );
};

export default LoginForm;

const LoginBtn = styled(Button)`
  margin-right: 20px;
`;

const ButtonContainer = styled.div`
  margin-top: 10px;
`;
