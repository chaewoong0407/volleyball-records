/* eslint-disable @next/next/no-img-element */
import styled from '@emotion/styled';
import React, { useState } from 'react';
import { TeamIntroductionProps } from '../TeamDetails';

const Container = styled.div`
  width: 100%;
  max-width: 960px;
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
  margin-top: 50px;
  font-size: 16px;
  color: #0e76bc;
  padding-bottom: 10px;
  border-bottom: 2px solid #1a2b64;

  &:first-child {
    margin-top: 0px;
  }
`;

const PlayerNameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  justify-content: center;

  p {
    font-size: 14px;
    margin: 0;
    font-weight: 700;
    color: #767676;
    margin-top: 10px;
    text-align: center;
  }
`;

const PlayerPosTab = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 35px;
`;

interface PositionProps {
  isPosition: boolean;
}

const PlayerPosition = styled.div<PositionProps>`
  font-size: 15px;
  font-weight: ${({ isPosition }) => (isPosition ? 'bold' : 'medium')};
  color: ${({ isPosition }) => (isPosition ? '#0e76bc' : '#767676')};
`;
const TeamPlayers = ({ player }: TeamIntroductionProps) => {
  const [position, setPosition] = useState<string>('전체');
  const PosHeaderList = [
    '전체',
    '아웃사이드 히터',
    '아포짓 스파이커',
    '미들 블로커',
    '세터',
    '리베로',
  ];
  const PosList = [
    '아웃사이드 히터',
    '아포짓 스파이커',
    '미들 블로커',
    '세터',
    '리베로',
  ];

  return (
    <Container>
      <PlayerPosTab>
        {PosHeaderList.map((pos, idx) => (
          <PlayerPosition
            key={idx}
            onClick={() => setPosition(pos)}
            isPosition={pos === position}
          >
            {pos}
          </PlayerPosition>
        ))}
      </PlayerPosTab>
      {position !== '전체'
        ? PosList.filter((data) => data === position).map((pos, idx) => (
            <>
              <Title key={idx}>{pos}</Title>
              <CoachWrapper>
                {player
                  ?.filter((player) => player.position_name === pos)
                  .map((player) => (
                    <PlayerNameWrapper key={player.id}>
                      <img
                        width={180}
                        height={200}
                        src={player.profile_image}
                        alt={'프로필사진'}
                        style={{ border: '1px solid #e0e0e0' }}
                      />
                      <p>
                        NO.{player.number} {player.name}({player.position_code})
                      </p>
                    </PlayerNameWrapper>
                  ))}
              </CoachWrapper>
            </>
          ))
        : PosList.map((pos, idx) => (
            <>
              <Title key={idx}>{pos}</Title>
              <CoachWrapper>
                {player
                  ?.filter((player) => player.position_name === pos)
                  .map((player) => (
                    <PlayerNameWrapper key={player.id}>
                      <img
                        width={180}
                        height={200}
                        src={player.profile_image}
                        alt={'프로필사진'}
                        style={{ border: '1px solid #e0e0e0' }}
                      />
                      <p>
                        NO.{player.number} {player.name}({player.position_code})
                      </p>
                    </PlayerNameWrapper>
                  ))}
              </CoachWrapper>
            </>
          ))}
    </Container>
  );
};

export default TeamPlayers;
