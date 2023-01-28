/* eslint-disable @next/next/no-img-element */
import styled from '@emotion/styled';
import React from 'react';
import { TeamIntroductionProps } from '../TeamDetails';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const CoachWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 20px 0 30px 10px;
  border-bottom: 1px solid #d1d5e0;
  gap: 35px;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 16px;
  color: #0e76bc;
  padding-bottom: 10px;
  border-bottom: 2px solid #1a2b64;
`;

const CoachNameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  justify-content: center;

  span {
    font-size: 14px;
    font-weight: 700;
    color: #1a2b64;
  }
  p {
    font-size: 14px;
    margin: 0;
    font-weight: 700;
    color: #767676;
    line-height: 20px;
  }
`;

const TeamCoach = ({ coach }: TeamIntroductionProps) => {
  return (
    <Container>
      <Title>감독</Title>
      <CoachWrapper>
        <img
          width={180}
          height={200}
          src={coach && coach.profile_image}
          alt={'프로필사진'}
          style={{ border: '1px solid #e0e0e0' }}
        />
        <CoachNameWrapper>
          <span>{coach?.name}</span>
          <p>
            생년월일 : {coach?.birth} <br /> 포지션 : {coach?.position_name}
          </p>
        </CoachNameWrapper>
      </CoachWrapper>
    </Container>
  );
};

export default TeamCoach;
