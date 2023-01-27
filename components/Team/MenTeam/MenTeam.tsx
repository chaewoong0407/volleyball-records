import styled from '@emotion/styled';
import { TokenClient } from 'lib/Axios';
import React, { useEffect, useState } from 'react';

type TeamType = {
  id: number;
  name: string;
  team_logo: string;
  gender: boolean;
  created_at: string;
};

const Container = styled.div`
  width: 100%;
  height: 100%;
`;
const TeamWrapper = styled.div`
  width: 1200px;
  margin: 50px auto 0;
  display: flex;
  gap: 20px;
`;
const TeamBox = styled.div`
  display: flex;
  align-items: center;
  width: 470px;
  height: 168px;
  border: 1px solid #e0e0e0;
`;

const LogoImage = styled.img`
  margin-left: 15px;
  width: 195px;
  height: 146px;
`;

const TeamContentBox = styled.div`
  display: flex;
  width: 228px;
  height: 100%;
  flex-direction: column;
  align-items: center;
`;

const TeamTitle = styled.div`
  margin: 25px 0 11px 0;
  font-weight: bold;
  font-size: 16px;
  font-style: italic;
  color: #1a2b64;
`;

const MenTeam = () => {
  const [team, setTeam] = useState<TeamType[]>([]);
  useEffect(() => {
    TokenClient.get('/team', { params: { gender: true } })
      .then((response) => {
        console.log(response.data);
        console.log(response.status);

        if (response.status === 200) {
          setTeam(response.data.data);
        }
      })
      .catch((response) => {
        console.log(response.data);
        console.log(response.status);
      });
  }, []);
  return (
    <Container>
      <TeamWrapper>
        {team.map((team) => (
          <TeamBox key={team.id}>
            <LogoImage src={team.team_logo} />
            <TeamContentBox>
              <TeamTitle>{team.name}</TeamTitle>
            </TeamContentBox>
          </TeamBox>
        ))}
      </TeamWrapper>
    </Container>
  );
};

export default MenTeam;
