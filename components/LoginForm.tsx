import { Button, Form, Input } from 'antd';
import Link from 'next/link';
import styled from 'styled-components';
import useForm from '../hooks/useForm';

const LoginForm = () => {
  const { state, handleOnChange, handleOnSubmit } = useForm();
  const { userId, password } = state;

  return (
    <Form>
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
    </Form>
  );
};

export default LoginForm;

const ButtonContainer = styled.div`
  margin-top: 10px;
`;
