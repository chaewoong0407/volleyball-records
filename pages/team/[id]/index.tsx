import styled from '@emotion/styled';
import { Header } from 'components';
import { useRouter } from 'next/router';

const Container = styled.div`
  width: 100%;
  height: calc(100% - 140px);
`;

const renderContentByQueryId = (id: string) =>
  ({
    men: <></>,
    women: <></>,
  }[id] || <></>);

const Team = () => {
  const router = useRouter();
  const id = router.query.id as string;
  return (
    <Container>
      <Header />
      {renderContentByQueryId(id)}
    </Container>
  );
};

export default Team;
