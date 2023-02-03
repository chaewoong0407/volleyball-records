import styled from '@emotion/styled';
import { Header, TeamList, SubNavgation } from 'components';
import { TokenClient } from 'lib/Axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

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

  const renderContentByQueryId = (id: string) =>
    ({
      men: <TeamList team={team} />,
      women: <TeamList team={team} />,
    }[id] || <></>);

  useEffect(() => {
    TokenClient.get('/team', {
      params: { gender: id === 'men' ? true : false },
    })
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
      {renderContentByQueryId(id)}
    </Container>
  );
};

export async function getServerSideProps() {
  return {
    props: {},
  };
}

export default Team;
