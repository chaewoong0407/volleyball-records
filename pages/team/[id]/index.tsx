import styled from '@emotion/styled';
import { Header, TeamList, SubNavgation } from 'components';
import { TokenClient } from 'lib/Axios';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';

const Container = styled.div`
  position: relative;
  width: 100%;
  height: calc(100% - 140px);
`;

export interface TeamType {
  id: number;
  name: string;
  team_logo: string;
  gender: boolean;
  created_at: string;
}

const Team = () => {
  const router = useRouter();
  const id = router.query.id as string;
  const [team, setTeam] = useState<TeamType[]>([]);
  const gender = id === 'men' ? true : false;

  const getTeam = useCallback(() => {
    TokenClient.get('/team', {
      params: { gender: gender },
    })
      .then((response) => {
        console.log(response.data);
        console.log(response.status);

        if (response.status === 200) {
          setTeam(response.data.data);
        }
      })
      .catch((err) => {
        console.log(err);
        if (err.response.data.status_code === 401) {
          console.log(err.response.data.message);
        }
      });
  }, [gender]);
  useEffect(() => {
    getTeam();
  }, [getTeam]);

  const renderContentByQueryId = (id: string) =>
    ({
      men: <TeamList team={team} />,
      women: <TeamList team={team} />,
    }[id] || <></>);

  return (
    <Container>
      <Header />
      <SubNavgation />
      {renderContentByQueryId(id)}
    </Container>
  );
};

export default Team;
