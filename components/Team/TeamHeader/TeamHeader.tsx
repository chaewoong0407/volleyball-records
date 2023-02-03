import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import React from 'react';
import { TeamIntroductionProps } from '../TeamDetails/TeamDetails';

const TeamInfoButton = styled.button`
  width: 192px;
  height: 50px;
  text-align: center;
  font-size: 15px;
  outline: none;
  border: none;
  border-right: 1px solid #c4c6c8;

  &:last-child {
    border: none;
  }
`;

const TeamHeader = ({ team, isBlue }: TeamIntroductionProps) => {
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
          style={{
            backgroundColor:
              idx === 2
                ? isBlue
                  ? '#0e76bc'
                  : '#e5e6e7'
                : data.href === currentPage[0]
                ? '#0e76bc'
                : '#e5e6e7',
            color:
              idx === 2
                ? isBlue
                  ? '#fff'
                  : '#333'
                : data.href === currentPage[0]
                ? '#fff'
                : '#333',
          }}
          onClick={() =>
            router.replace({
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
