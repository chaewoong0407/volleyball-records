import styled from '@emotion/styled';
import { TeamIntroductionType } from 'pages/team/[id]/introduction';
import { useState } from 'react';
import { RecordTitle } from '../TeamPlayers/PlayerDetails/PlayerDetails';

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

export const TeamRecords = ({ team }: TeamRecordsProps) => {
  const [currentTab, clickTab] = useState(0);

  const menuArr = [
    { name: '공격', content: '공격' },
    { name: '블로킹', content: '블로킹' },
    { name: '서브', content: '서브' },
    { name: '리시브', content: '리시브' },
    { name: '디그', content: '디그' },
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
          <Text>19</Text>
        </ScoreBox>
        <ScoreBox>
          <LoseCircle>패</LoseCircle>
          <Text>16</Text>
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
