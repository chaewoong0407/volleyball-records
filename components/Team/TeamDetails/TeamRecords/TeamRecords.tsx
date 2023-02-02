import styled from '@emotion/styled';
import { TeamIntroductionType } from 'pages/team/[id]/introduction';
import { useState } from 'react';
import { RecordTitle } from '../TeamPlayers/PlayerDetails/PlayerDetails';
import { TeamRecordItem } from './TeamRecordAttack/TeamRecordAttack';
import { TeamRecordBlock } from './TeamRecordBlock/TeamRecordBlock';
import { TeamRecordReceive } from './TeamRecordReceive/TeamRecordReceive';
import { TeamRecordServe } from './TeamRecordServe/TeamRecordServe';

interface TeamRecordsProps {
  team?: TeamIntroductionType;
}
const Container = styled.div`
  width: 100%;
  max-width: 960px;
  display: flex;
  flex-direction: column;
`;

const TeamBox = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  height: 140px;
  border: 1px solid #e0e0e0;
  border-radius: 3px;
  padding-left: 30px;
`;

const TeamLogo = styled.img`
  width: 150px;
  height: 112px;
`;

const TeamNameBox = styled.div`
  width: 300px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #253032;
  font-weight: bold;
  font-size: 18px;
`;

const ScoreBox = styled.div`
  margin-left: 100px;
  align-items: center;
  height: 100%;
  display: flex;
  gap: 10px;
`;

const WinCircle = styled.div`
  background-color: #0e76bc;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  border-radius: 100%;
`;
const LoseCircle = styled.div`
  background-color: #767676;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  border-radius: 100%;
`;

const Text = styled.div`
  color: #1a2b64;
  font-size: 14px;
  font-weight: bold;
`;

const MenuBox = styled.div`
  display: flex;
  height: 50px;
  margin-top: 15px;
`;

const MenuBlock = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: #e5e6e7;
  height: 50px;
  font-size: 15px;
  color: #333;
`;

export type AttackType = {
  attack: number;
  attack_miss: number;
  attack_success: number;
  blocking_shut_out: number;
  match_count: number;
  set_count: number;
};

export type BlockType = {
  block: number;
  block_fail: number;
  block_miss: number;
  block_success: number;
  match_count: number;
  set_count: number;
};

export type ServeType = {
  serve_count: number;
  serve_miss: number;
  serve_success: number;
  match_count: number;
  set_count: number;
};

export type ReceiveType = {
  receive: number;
  receive_miss: number;
  receive_success: number;
  match_count: number;
  set_count: number;
};

export type DigType = {
  dig: number;
  dig_fail: number;
  dig_success: number;
  match_count: number;
  set_count: number;
};

export const TeamRecords = ({ team }: TeamRecordsProps) => {
  const [currentTab, clickTab] = useState(0);
  const menuArr = [
    { name: '공격', content: <TeamRecordItem /> },
    { name: '블로킹', content: <TeamRecordBlock /> },
    { name: '서브', content: <TeamRecordServe /> },
    { name: '리시브', content: <TeamRecordReceive /> },
    { name: '디그', content: <TeamRecordItem type='dig' /> },
  ];

  const selectMenuHandler = (index: number) => {
    clickTab(index);
  };

  return (
    <Container>
      <TeamBox>
        <TeamLogo src={team?.team_logo} alt={'팀 로고'} />
        <TeamNameBox>{team?.name}</TeamNameBox>
        <ScoreBox>
          <WinCircle>승</WinCircle>
          <Text>{team?.team_total_record?.total_win_count}</Text>
        </ScoreBox>
        <ScoreBox>
          <LoseCircle>패</LoseCircle>
          <Text>{team?.team_total_record?.total_lose_count}</Text>
        </ScoreBox>
      </TeamBox>
      <RecordTitle>팀 기록</RecordTitle>
      <MenuBox>
        {menuArr.map((el, idx) => (
          <MenuBlock key={idx} onClick={() => selectMenuHandler(idx)}>
            {el.name}
          </MenuBlock>
        ))}
      </MenuBox>
      {menuArr[currentTab].content}
    </Container>
  );
};
