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
`;

const TeamTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 0 50px;
  height: 100%;
  gap: 23px;
  justify-content: center;
`;
const TeamTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #253032;
`;
const TeamCoach = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: #767676;
`;

const TeamSubTitle = styled.div`
  margin-top: 20px;
  font-size: 16px;
  color: #0e76bc;
  font-weight: bold;
`;

const PerformanceWrapper = styled.div`
  margin: 10px 0 100px 0;
  width: 100%;
  max-width: 960px;
  border-top: 2px solid #1a2b64;

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
  }
  td {
    font-size: 14px;
    padding: 15px 0;
    border-bottom: 1px solid #e0dfe1;
    text-align: center;
    color: #767676;
    font-weight: 700px;
  }
`;
export const TeamIntroduction = ({ team }: TeamIntroductionProps) => {
  return (
    <Container>
      <TeamWrapper>
        <img
          src={team.team_logo}
          alt={'로고'}
          width={180}
          height={135}
          style={{ marginLeft: '25px' }}
        />
        <TeamTitleWrapper>
          <TeamTitle>{team.name}</TeamTitle>
          <TeamCoach>
            <span style={{ color: '#253032' }}>코치</span> : {team.coach}
          </TeamCoach>
        </TeamTitleWrapper>
      </TeamWrapper>
      <TeamSubTitle>역대 성적</TeamSubTitle>
      <PerformanceWrapper>
        <table>
          <thead>
            <tr>
              <th>번호</th>
              <th style={{ width: '320px' }}>대회명</th>
              <th>성적</th>
              <th>전적</th>
              <th style={{ width: '250px' }}>대회 기간</th>
            </tr>
          </thead>
          <tbody>
            {team.performance.map((data, idx) => (
              <tr key={idx}>
                <td>{data.id}</td>
                <td>{data.competition_name}</td>
                <td>{data.results}</td>
                <td>
                  {data.win_counts}승 {data.lose_counts}패
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
