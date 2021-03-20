import Layout from '@components/Layout';
import { rootState } from '@store/reducer';
import { signup_request } from '@store/user';
import { Button, Checkbox, Form, Input } from 'antd';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';
import useForm from 'hooks/useForm';
import Head from 'next/head';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { useRouter } from 'next/router';

const SignUp = () => {
  const { state, handleOnChange } = useForm();
  const router = useRouter();
  const { email, nickname, password } = state;
  const dispatch = useDispatch();
  const signupError = useSelector((state: rootState) => state.user.signupError);
  const signupLoading = useSelector(
    (state: rootState) => state.user.signupLoading
  );
  const signupDone = useSelector((state: rootState) => state.user.signupDone);

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
    const emailRegex = /[0-9a-zA-Z-_.]+@[0-9a-zA-Z-_.]+\.[0-9a-zA-Z-_.]+/;
    if (!emailRegex.test(email)) {
      return alert('Email validation error');
    }

    if (password !== passwordCheck) {
      return setPasswordCheckError(true);
    }

    if (!term) {
      return setTermError(true);
    }

    dispatch({
      type: signup_request,
      payload: {
        email,
        nickname,
        password,
      },
    });
  }, [email, nickname, password, passwordCheck, term, dispatch]);

  useEffect(() => {
    if (signupError) {
      alert(signupError);
    }
  }, [signupError]);

  useEffect(() => {
    if (signupDone) {
      router.replace('/');
    }
  }, [signupDone]);

  return (
    <Layout>
      <Head>
        <title>회원가입 | NodeBird</title>
      </Head>
      <Form onFinish={onSubmit}>
        <div>
          <label htmlFor="email">아이디</label>
          <br />
          <Input
            name="email"
            value={email}
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
          <Input.Password
            name="password"
            value={password}
            onChange={handleOnChange}
            required
          />

          <label htmlFor="passwordCheck">비밀번호 확인</label>
          <br />
          <Input.Password
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
          <Button type="primary" htmlType="submit" loading={signupLoading}>
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
