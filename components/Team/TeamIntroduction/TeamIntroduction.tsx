import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { TeamIntroductionType } from 'pages/team/[id]/introduction';
import React from 'react';

export interface TeamIntroductionProps {
  team: TeamIntroductionType;
}

export interface ButtonProps {
  path: boolean;
}

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const TeamWrapper = styled.div`
  width: 1200px;
  margin: 50px auto 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const TeamComboBox = styled.select`
  width: 210px;
  height: 32px;
  padding-left: 10px;
  text-align: left;
  font-size: 14px;
  color: #999;
  cursor: pointer;
  border: 1px solid #e0e0e0;
  background: #f8f8f8
    url('https://www.kovo.co.kr/images/bg/bg_select_table.png') right center
    no-repeat;
`;

const TeamInfoBox = styled.div`
  display: flex;
`;

const TeamInfoButton = styled.button<ButtonProps>`
  width: 192px;
  height: 50px;
  text-align: center;
  font-size: 15px;
  background: ${({ path }) => (path ? '#0e76bc' : '#e5e6e7')};
  color: ${({ path }) => (path ? '#fff' : '#333')};
  outline: none;
  border: none;
  border-right: 1px solid #c4c6c8;

  &:last-child {
    border: none;
  }
`;
const TeamIntroduction = ({ team }: TeamIntroductionProps) => {
  const router = useRouter();
  const queryId = router.query.id as string;
  console.log(router.pathname);
  const List = [
    {
      name: '구단소개',
      href: `/team/${queryId}/introduction`,
    },
    {
      name: '코칭스태프',
      href: `/team/${queryId}/coach`,
    },
    {
      name: '선수소개',
      href: `/team/${queryId}/players`,
    },
    {
      name: '팀기록',
      href: `/team/${queryId}/record`,
    },
    {
      name: '총평',
      href: `/team/${queryId}/review`,
    },
  ];
  return (
    <Container>
      <TeamWrapper>
        <TeamComboBox>
          <option>{team.name}</option>
        </TeamComboBox>
        <TeamInfoBox>
          {List.map((data, idx) => (
            <TeamInfoButton
              key={idx}
              path={
                data.href ===
                (typeof window !== 'undefined'
                  ? window.location.pathname
                  : undefined)
              }
              onClick={() =>
                router.push({
                  pathname: data.href,
                  query: { team_id: team.id },
                })
              }
            >
              {data.name}
            </TeamInfoButton>
          ))}
        </TeamInfoBox>
      </TeamWrapper>
    </Container>
  );
};

export default TeamIntroduction;
