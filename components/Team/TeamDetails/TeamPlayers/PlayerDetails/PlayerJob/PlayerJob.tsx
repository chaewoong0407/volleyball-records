import styled from '@emotion/styled';
import React from 'react';
import { JobType } from '../PlayerDetails';

const Container = styled.div`
  width: 100%;
  display: flex;
  height: 160px;
  border: 1px solid #e0e0e0;
  margin-top: 15px;
  margin-bottom: 100px;
`;

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 18px 22px;

  &:first-child {
    border-right: 1px solid #e0e0e0;
  }
  &:last-child {
    border-left: 1px solid #e0e0e0;
  }
`;

const Title = styled.div`
  font-size: 14px;
  margin-bottom: 12px;
  font-weight: bold;
  color: #1a2b64;
`;

const Text = styled.div`
  font-size: 13px;
  color: rgb(118, 118, 118);
  font-weight: bold;
`;

interface PlayerJobProps {
  data: JobType | undefined;
}

export const PlayerJob = ({ data }: PlayerJobProps) => {
  return (
    <Container>
      <Wrapper>
        <Title>역대 시상내역</Title>
        {data &&
          data.prize.map((item) => (
            <>
              <Text>- {item.prize_name}</Text>
            </>
          ))}
      </Wrapper>
      <Wrapper>
        <Title>트리플 크라운</Title>
        {data &&
          data.triple_crown.map((item) => (
            <>
              <Text>
                - {item.created_at} 후위 {item.back_attack_count}개, 서브{' '}
                {item.serve_count}개, 블로킹 {item.block_count}개
              </Text>
            </>
          ))}
      </Wrapper>
      <Wrapper>
        <Title>기준기록</Title>
        {data &&
          data.reference_record.map((item) => (
            <>
              <Text>
                - {item.created_at} {item.record_name}{' '}
              </Text>
            </>
          ))}
      </Wrapper>
    </Container>
  );
};
