import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import React from 'react';
import { ButtonProps, TeamIntroductionProps } from '../TeamDetails/TeamDetails';

const TeamInfoButton = styled.button<ButtonProps>`
  width: 192px;
  height: 50px;
  text-align: center;
  font-size: 15px;
  background: ${({ path }) => (path === true ? '#0e76bc' : '#e5e6e7')};
  color: ${({ path }) => (path === true ? '#fff' : '#333')};
  outline: none;
  border: none;
  border-right: 1px solid #c4c6c8;

  &:last-child {
    border: none;
  }
`;

const TeamHeader = ({ team }: TeamIntroductionProps) => {
  const router = useRouter();
  const currentPage = router.asPath.split('?');
  const queryId = router.query.id as string;
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
    <div>
      {List.map((data, idx) => (
        <TeamInfoButton
          key={idx}
          path={data.href === currentPage[0]}
          onClick={() =>
            router.push({
              pathname: data.href,
              query: { team_id: team && team.id },
            })
          }
        >
          {data.name}
        </TeamInfoButton>
      ))}
    </div>
  );
};

export async function getServerSideProps() {
  return {
    props: {},
  };
}

export default TeamHeader;
