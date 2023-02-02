import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { CoachType } from 'pages/team/[id]/coach';
import { TeamIntroductionType } from 'pages/team/[id]/introduction';
import { PlayerType } from 'pages/team/[id]/players';
import React from 'react';
import TeamHeader from '../TeamHeader/TeamHeader';
import TeamCoach from './TeamCoach/TeamCoach';
import TeamIntroduction from './TeamIntroduction/TeamIntroduction';
import TeamPlayers from './TeamPlayers/TeamPlayers';
import { TeamRecords } from './TeamRecords/TeamRecords';
import { TeamReview } from './TeamReview/TeamReview';

export interface TeamIntroductionProps {
  team?: TeamIntroductionType;
  coach?: CoachType;
  player?: PlayerType[];
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

export const TeamComboBox = styled.select`
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

const TeamDetails = ({ team, coach, player }: TeamIntroductionProps) => {
  const router = useRouter();
  const page = router.pathname.split('/');

  const renderContentByPage = (page: string) =>
    ({
      introduction: <TeamIntroduction team={team} />,
      coach: <TeamCoach coach={coach} />,
      players: <TeamPlayers player={player} team={team} />,
      record: <TeamRecords team={team} />,
      review: <TeamReview />,
    }[page] || <></>);
  return (
    <Container>
      <TeamWrapper>
        <TeamComboBox>
          <option>{team && team.name}</option>
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
