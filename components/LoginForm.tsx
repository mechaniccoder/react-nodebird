import { Button, Form, Input } from 'antd';
import Link from 'next/link';
import { FC, useCallback } from 'react';
import styled from 'styled-components';
import useForm from '../hooks/useForm';

interface Props {
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoginForm: FC<Props> = ({ setIsLoggedIn }) => {
  const { state, handleOnChange, handleOnSubmit } = useForm();
  const { userId, password } = state;

  const onSubmit = useCallback(() => {
    setIsLoggedIn(true);
  }, [setIsLoggedIn]);

  return (
    <FormWrapper onFinish={handleOnSubmit(onSubmit)}>
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
        <Button type="primary" htmlType="submit" onClick={handleOnSubmit}>
          로그인
        </Button>
        <Link href="/signup" data-test-id="link">
          <a>회원가입</a>
        </Link>
      </ButtonContainer>
    </FormWrapper>
  );
};

export default LoginForm;

const ButtonContainer = styled.div`
  margin-top: 10px;
`;

const FormWrapper = styled(Form)`
  padding: 10px;
`;
