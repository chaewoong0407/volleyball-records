import styled from '@emotion/styled';
import { Header, SubNavgation, TeamDetails } from 'components';
import { TokenClient } from 'lib/Axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const Container = styled.div`
  position: relative;
  width: 100%;
  height: calc(100% - 140px);
`;

export type CoachType = {
  name: string;
  birth: string;
  role: string;
  position_name: string;
  position_code: string;
};
export type PerformanceType = {
  id: number;
  competition_name: string;
  results: string;
  win_counts: number;
  lose_counts: number;
  start_date: string;
  end_date: string;
  team_id: number;
};

export interface TeamIntroductionType {
  id: number;
  name: string;
  team_logo: string;
  gender: boolean;
  created_at: string;
  coach: string;
  performance: PerformanceType[];
}

const Introduction = () => {
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
  }, [id]);
  return (
    <Container>
      <Header />
      <SubNavgation />
      <TeamDetails team={team} />
    </Container>
  );
};

export default Introduction;
