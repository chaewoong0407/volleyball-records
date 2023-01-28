import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { TeamIntroductionType } from 'pages/team/[id]/introduction';
import React from 'react';
import TeamHeader from '../TeamHeader/TeamHeader';
import TeamIntroduction from './TeamIntroduction/TeamIntroduction';

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

const TeamDetails = ({ team }: TeamIntroductionProps) => {
  const router = useRouter();
  const page = router.pathname.split('/');

  console.log(router);
  console.log(page);

  const renderContentByPage = (page: string) =>
    ({
      introduction: <TeamIntroduction />,
      coach: <div>코칭스태프</div>,
      players: <div>선수소개</div>,
      record: <div>팀기록</div>,
      review: <div>총평</div>,
    }[page] || <></>);
  return (
    <Container>
      <TeamWrapper>
        <TeamComboBox>
          <option>{team.name}</option>
        </TeamComboBox>
        <TeamInfoBox>
          <TeamHeader team={team} />
        </TeamInfoBox>
        {renderContentByPage(page[3])}
      </TeamWrapper>
    </Container>
  );
};

export default TeamDetails;
