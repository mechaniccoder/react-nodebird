import Layout from '@components/Layout';
import { Button, Checkbox, Form, Input } from 'antd';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';
import useForm from 'hooks/useForm';
import Head from 'next/head';
import { useCallback, useState } from 'react';
import styled from 'styled-components';

const SignUp = () => {
  const { state, handleOnChange } = useForm();
  const { userId, nickname, password } = state;

  const [passwordCheck, setPasswordCheck] = useState('');
  const [passwordCheckError, setPasswordCheckError] = useState(false);
  const handleOnChangePasswordCheck = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setPasswordCheck(event.currentTarget.value);
      setPasswordCheckError(password !== event.currentTarget.value);
    },
    [password]
  );

  const [term, setTerm] = useState(false);
  const [termError, setTermError] = useState(false);
  const handleOnChangeTerm = useCallback((event: CheckboxChangeEvent) => {
    setTerm(event.target.checked);
    setTermError(false);
  }, []);

  const onSubmit = useCallback(() => {
    if (password !== passwordCheck) {
      setPasswordCheckError(true);
    }

    if (!term) {
      setTermError(true);
    }
  }, [password, passwordCheck, term]);

  return (
    <Layout>
      <Head>
        <title>회원가입 | NodeBird</title>
      </Head>
      <Form onFinish={onSubmit}>
        <div>
          <label htmlFor="userId">아이디</label>
          <br />
          <Input
            name="userId"
            value={userId}
            onChange={handleOnChange}
            required
          />

          <label htmlFor="nickname">닉네임</label>
          <br />
          <Input
            name="nickname"
            value={nickname}
            onChange={handleOnChange}
            required
          />

          <label htmlFor="password">비밀번호</label>
          <br />
          <Input
            name="password"
            value={password}
            onChange={handleOnChange}
            required
          />

          <label htmlFor="passwordCheck">비밀번호 확인</label>
          <br />
          <Input
            name="passwordCheck"
            value={passwordCheck}
            onChange={handleOnChangePasswordCheck}
            required
          />
          {passwordCheckError && (
            <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>
          )}
        </div>

        <CheckboxWrapper>
          <Checkbox name="term" checked={term} onChange={handleOnChangeTerm}>
            약관동의
          </Checkbox>
          {termError && <ErrorMessage>약관 동의하셔야 합니다.</ErrorMessage>}
        </CheckboxWrapper>

        <div>
          <Button type="primary" htmlType="submit">
            가입하기
          </Button>
        </div>
      </Form>
    </Layout>
  );
};

export default SignUp;

const CheckboxWrapper = styled.div`
  margin-top: 10px;
`;

const ErrorMessage = styled.div`
  font-size: 14px;
  color: red;
`;
