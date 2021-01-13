import { Button, Form, Input } from 'antd';
import Link from 'next/link';
import { FC, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { toggleLogInState } from 'store/user';
import styled from 'styled-components';
import useForm from '../hooks/useForm';

const LoginForm: FC = () => {
  const { state, handleOnChange } = useForm();
  const { userId, password } = state;
  const dispatch = useDispatch();

  const onSubmit = useCallback(() => {
    dispatch(toggleLogInState());
  }, []);

  return (
    <Form onFinish={onSubmit}>
      <div>
        <label htmlFor="userId">아이디</label>
        <Input
          id="userId"
          type="text"
          name="userId"
          value={userId}
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
        <LoginBtn type="primary" htmlType="submit">
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
  margin-right: 10px;
`;

const ButtonContainer = styled.div`
  margin-top: 10px;
`;
