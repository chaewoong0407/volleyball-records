import styled from '@emotion/styled';
import { Header, SubNavgation, TeamDetails } from 'components';
import { TokenClient } from 'lib/Axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { TeamIntroductionType } from '../introduction';

const Container = styled.div`
  position: relative;
  width: 100%;
  height: calc(100% - 140px);
`;

export type PlayerType = {
  id: number;
  name: string;
  number: number;
  position_name: string;
  position_code: string;
  profile_image: string;
};

const Players = () => {
  const router = useRouter();
  const id = router.query.team_id;
  const [team, setTeam] = useState<TeamIntroductionType>({
    id: 0,
    name: '',
    team_logo: '',
    gender: true,
    created_at: '',
    coach: '',
    performance: [],
  });
  const [player, setPlayer] = useState<PlayerType[]>([]);

  useEffect(() => {
    TokenClient.get('/team/introduction', { params: { team_id: id } })
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

    TokenClient.get('/team/players', { params: { team_id: id } })
      .then((response) => {
        console.log(response.data.data);
        console.log(response.status);

        if (response.status === 200) {
          setPlayer(response.data.data);
        }
      })
      .catch((response) => {
        console.log(response.data);
        console.log(response.status);
      });
  }, [id]);
  return (
    <Container>
      <Header />
      <SubNavgation />
      <TeamDetails team={team} player={player} />
    </Container>
  );
};

export default Players;
