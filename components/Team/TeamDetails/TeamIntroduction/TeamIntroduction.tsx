/* eslint-disable @next/next/no-img-element */
import styled from '@emotion/styled';
import React from 'react';
import { TeamIntroductionProps } from '../TeamDetails';

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const TeamWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  max-width: 960px;
  height: 246px;
  border-radius: 3px;
  border: 1px solid #e0e0e0;
  gap: 50px;

  @media (max-width: 768px) {
    height: 230px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }
`;

const TeamTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 0 50px;
  height: 100%;
  gap: 23px;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 0;
    gap: 16px;
    height: unset;
    align-items: center;
    justify-content: flex-start;
  }
`;
const TeamTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #253032;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;
const TeamCoach = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: #767676;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const TeamSubTitle = styled.div`
  margin-top: 20px;
  font-size: 16px;
  color: #0e76bc;
  font-weight: bold;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const PerformanceWrapper = styled.div`
  margin: 10px 0 100px 0;
  width: 100%;
  max-width: 960px;
  border-top: 2px solid #1a2b64;
  overflow-x: auto;

  table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    table-layout: fixed;
  }

  th {
    font-size: 14px;
    padding: 15px 0;
    color: #1a2b64;
    background: #f6f7f8;
    border-bottom: 1px solid #e0dfe1;

    @media (max-width: 768px) {
      font-size: 12px;
    }
  }
  td {
    font-size: 14px;
    padding: 15px 0;
    border-bottom: 1px solid #e0dfe1;
    text-align: center;
    color: #767676;
    font-weight: 700px;

    @media (max-width: 768px) {
      font-size: 12px;
    }
  }
`;

const Logo = styled.img`
  width: 180px;
  height: 135px;
  margin-left: 25px;

  @media (max-width: 768px) {
    width: 125px;
    height: 95px;
    margin-left: 0;
  }
`;
export const TeamIntroduction = ({ team }: TeamIntroductionProps) => {
  return (
    <Container>
      <TeamWrapper>
        <Logo src={team && team.team_logo} alt={'??????'} />
        <TeamTitleWrapper>
          <TeamTitle>{team && team.name}</TeamTitle>
          <TeamCoach>
            <span style={{ color: '#253032' }}>??????</span> :{team && team.coach}
          </TeamCoach>
        </TeamTitleWrapper>
      </TeamWrapper>
      <TeamSubTitle>?????? ??????</TeamSubTitle>
      <PerformanceWrapper>
        <table>
          <thead>
            <tr>
              <th style={{ width: '130px' }}>??????</th>
              <th style={{ width: '320px' }}>?????????</th>
              <th style={{ width: '130px' }}>??????</th>
              <th style={{ width: '130px' }}>??????</th>
              <th style={{ width: '250px' }}>?????? ??????</th>
            </tr>
          </thead>
          <tbody>
            {team &&
              team.performance.map((data, idx) => (
                <tr key={idx}>
                  <td>{data.id}</td>
                  <td>{data.competition_name}</td>
                  <td>{data.results}</td>
                  <td>
                    {data.win_counts}??? {data.lose_counts}???
                  </td>
                  <td>
                    {data.start_date === data.end_date
                      ? `${data.start_date}`
                      : `${data.start_date} ~ ${data.end_date}`}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </PerformanceWrapper>
    </Container>
  );
};

export default TeamIntroduction;
