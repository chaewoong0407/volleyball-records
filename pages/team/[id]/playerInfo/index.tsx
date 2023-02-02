import styled from '@emotion/styled';
import { Header, PlayerDetails, SubNavgation, TeamDetails } from 'components';
import { TokenClient } from 'lib/Axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { TeamIntroductionType } from '../introduction';
import { PlayerType } from '../players';

const Container = styled.div`
  position: relative;
  width: 100%;
  height: calc(100% - 140px);
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const PlayerInfo = () => {
  const router = useRouter();
  const id = router.query.team_id;
  const playerId = router.query.player;
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
      <Wrapper>
        <PlayerDetails player_id={playerId} team_id={id} />
      </Wrapper>
    </Container>
  );
};

export default PlayerInfo;