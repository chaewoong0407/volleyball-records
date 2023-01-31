import styled from '@emotion/styled';
import { TokenClient } from 'lib/Axios';
import React, { useEffect } from 'react';

interface PlayerDetailProps {
  team_id: string | string[] | undefined;
  player_id: string | string[] | undefined;
}

const Container = styled.div`
  width: 100%;
  max-width: 960px;
`;

const ProfileBox = styled.div`
  display: flex;
  width: 100%;
  height: 650px;
  border: 1px solid #e0e0e0;
  border-radius: 3px;
  margin-top: 30px;
`;

const ProfileImage = styled.div`
  width: 507px;
  height: 498px;
`;

const PlayerDetails = ({ team_id, player_id }: PlayerDetailProps) => {
  useEffect(() => {
    TokenClient.get(`/team/player/${player_id}`, {
      params: { team_id: team_id },
    })
      .then((response) => {
        console.log(response.data.data);
        console.log(response.status);
      })
      .catch((response) => {
        console.log(response.data);
        console.log(response.status);
      });
  }, [team_id, player_id]);
  return (
    <Container>
      <ProfileBox>
        <ProfileImage />
      </ProfileBox>
    </Container>
  );
};

export default PlayerDetails;
