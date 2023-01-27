import styled from '@emotion/styled';
import Link from 'next/link';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 140px;
  background-color: #fff;
  gap: 100px;
`;

const NavContent = styled(Link)`
  color: #000000;
  font-size: 18px;
  font-weight: 600;
`;

const Header = () => {
  return (
    <Container>
      <NavContent href={'/team'}>TEAM</NavContent>
      <div>로고 들어갈 곳</div>
      <NavContent href={'/stat'}>STATS</NavContent>
    </Container>
  );
};

export default Header;
