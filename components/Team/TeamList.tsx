import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { TeamType } from 'pages/team/[id]';

export interface TeamProps {
  team: TeamType[];
}

const Container = styled.div`
  width: 100%;
  height: 100%;
`;
const TeamWrapper = styled.div`
  width: 1200px;
  margin: 50px auto 0;
  display: flex;
  gap: 20px;
`;
const TeamBox = styled.div`
  display: flex;
  align-items: center;
  width: 470px;
  height: 168px;
  border: 1px solid #e0e0e0;
  gap: 30px;
`;

const LogoImage = styled.img`
  margin-left: 15px;
  width: 195px;
  height: 146px;
`;

const TeamContentBox = styled.div`
  display: flex;
  width: 228px;
  height: 100%;
  flex-direction: column;
`;

const TeamTitle = styled.div`
  margin: 25px 0 11px 0;
  font-weight: bold;
  font-size: 16px;
  font-style: italic;
  color: #1a2b64;
`;

const TeamButtonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 170px;
  gap: 4px;
`;

const TeamButton = styled.button`
  color: #767676;
  background: #f9f9f9;
  border: 1px solid #e0e0e0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 24px;
  line-height: 24px;
  font-size: 12px;
  font-weight: bold;
`;
const Team = ({ team }: TeamProps) => {
  const router = useRouter();
  const queryId = router.query.id as string;
  const List = [
    {
      name: '구단소개',
      href: `/team/${queryId}/introduction`,
    },
    {
      name: '코칭스태프',
      href: `/team/${queryId}/coach`,
    },
    {
      name: '선수소개',
      href: `/team/${queryId}/players`,
    },
    {
      name: '팀기록',
      href: `/team/${queryId}/record`,
    },
    {
      name: '총평',
      href: `/team/${queryId}/review`,
    },
  ];
  return (
    <Container>
      <TeamWrapper>
        {team.map((team) => (
          <TeamBox key={team.id}>
            <LogoImage src={team.team_logo} />
            <TeamContentBox>
              <TeamTitle>{team.name}</TeamTitle>
              <TeamButtonWrapper>
                {List.map((data, idx) => (
                  <TeamButton
                    key={idx}
                    onClick={() =>
                      router.push({
                        pathname: data.href,
                        query: { team_id: team.id },
                      })
                    }
                  >
                    {data.name}
                  </TeamButton>
                ))}
              </TeamButtonWrapper>
            </TeamContentBox>
          </TeamBox>
        ))}
      </TeamWrapper>
    </Container>
  );
};

export default Team;
