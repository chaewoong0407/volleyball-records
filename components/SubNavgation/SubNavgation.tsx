import styled from '@emotion/styled';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

interface TabLinkProps {
  path: boolean;
}

const Container = styled.div`
  width: 100%;
  height: 240px;
  display: flex;
  flex-direction: column;
  background-color: #78a34d;
  background-position: calc(50% + 205px) top;
  background-image: url('https://www.kovo.co.kr/images/common/bg_sub3.jpg');
  background-repeat: no-repeat;
`;

const SubTabBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const TabLink = styled(Link)<TabLinkProps>`
  color: ${({ path }) => (path ? `#fff` : `rgba(255, 255, 255, 0.5)`)};
  font-size: 14px;
  font-weight: bold;
  padding: 14px;
`;

const TeamBox = styled.div`
  display: flex;
  align-items: center;
  width: 1200px;
  margin: 0 auto;
  height: 180px;
  font-size: 40px;
  font-weight: bold;
  color: #fff;
`;

const SubNavgation = () => {
  const router = useRouter();

  const handleName = (router: string) => {
    switch (router) {
      case '/team/men':
        return '남자부';
      case '/team/women':
        return '여자부';
    }
  };
  return (
    <Container>
      <SubTabBox>
        <TabLink href={'/team/men'} path={router.asPath === '/team/men'}>
          남자부
        </TabLink>
        <TabLink href={'/team/women'} path={router.asPath === '/team/women'}>
          여자부
        </TabLink>
      </SubTabBox>
      <TeamBox>{handleName(router.asPath)}</TeamBox>
    </Container>
  );
};

export default SubNavgation;
