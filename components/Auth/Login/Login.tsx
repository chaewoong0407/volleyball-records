import styled from '@emotion/styled';
import { client } from 'lib/Axios';
import { getToken, TestToken } from 'lib/Storage';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LoginBox = styled.div`
  width: 458px;
  border: 1px solid;
  border: 1px solid #c6c6c6;
  border-radius: 6px;
  background-color: #fff;
  box-shadow: 0 5px 8px 0 rgb(68 68 68 / 4%);
`;

const LoginPanel = styled.div`
  padding: 20px 28px;
`;

const IdBox = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  border: 1px solid #dadada;
  border-radius: 6px 6px 0 0;
  height: 48px;
`;
const PasswordBox = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  border: 1px solid #dadada;
  border-radius: 0 0 6px 6px;
  height: 48px;
`;

const Input = styled.input`
  margin-left: 10px;
  width: 100%;
  border: none;
`;

const SubmitButton = styled.button`
  display: block;
  margin-top: 20px;
  width: 100%;
  padding: 13px 0 13px;
  border-radius: 6px;
  border: solid 1px rgba(0, 0, 0, 0.15);
  background-color: skyblue;
  box-sizing: border-box;
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  color: #fff;
`;

export const SubmitForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const SignUpWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 200px;
`;

const SignUpButton = styled.button`
  font-size: 16px;
  margin-top: 20px;
  align-items: center;
  border: none;
  outline: none;
  background: none;
`;

type LoginSubmitFormProps = {
  onSubmit: (form: { id: string; password: string }) => void;
};

const Login = ({ onSubmit }: LoginSubmitFormProps) => {
  const router = useRouter();
  const [form, setForm] = useState({
    id: '',
    password: '',
  });

  const handleId = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setForm({
      ...form,
      id: value,
    });
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setForm({
      ...form,
      password: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log(form);
    e.preventDefault();
    onSubmit(form);
    client
      .post('/user/login', {
        user_id: id,
        password: password,
      })
      .then((response) => {
        console.log(response.data);
        console.log(response.status);
        console.log(response.data.token);
        console.log(getToken());

        if (response.status === 200) {
          sessionStorage.setItem('volleyball-token', TestToken);
          alert('로그인 성공!');
          router.push('/team/men');
        }
      })
      .catch((response) => {
        console.log(response.data);
        console.log(response.status);
      });
  };

  const { id, password } = form;
  return (
    <SubmitForm onSubmit={handleSubmit}>
      <Container>
        <div style={{ paddingBottom: '48px' }}>
          <img src='https://i.imgur.com/BAjHmEF.jpeg' width={240} />
        </div>
        <LoginBox>
          <LoginPanel>
            <IdBox>
              <Input
                placeholder='아이디를 입력하세요'
                value={id}
                onChange={handleId}
              />
            </IdBox>
            <PasswordBox>
              <Input
                placeholder='비밀번호를 입력하세요'
                type='password'
                value={password}
                onChange={handlePassword}
              />
            </PasswordBox>
            <SubmitButton>로그인</SubmitButton>
          </LoginPanel>
        </LoginBox>
        <SignUpWrapper>
          <SignUpButton>비밀번호 찾기</SignUpButton>
          <SignUpButton>회원가입</SignUpButton>
        </SignUpWrapper>
      </Container>
    </SubmitForm>
  );
};

export default Login;
