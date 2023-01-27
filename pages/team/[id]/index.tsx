import styled from '@emotion/styled';
import { Header, MenTeam, SubNavgation, WomenTeam } from 'components';
import { useRouter } from 'next/router';

const Container = styled.div`
  position: relative;
  width: 100%;
  height: calc(100% - 140px);
`;

const renderContentByQueryId = (id: string) =>
  ({
    men: <MenTeam />,
    women: <WomenTeam />,
  }[id] || <MenTeam />);

const Team = () => {
  const router = useRouter();
  const id = router.query.id as string;
  return (
    <Container>
      <Header />
      <SubNavgation />
      {renderContentByQueryId(id)}
    </Container>
  );
};

export default Team;
