import styled from '@emotion/styled';
import { TokenClient } from 'lib/Axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { RecordTitle } from '../../TeamPlayers/PlayerDetails/PlayerDetails';
import { BlockType } from '../TeamRecords';

const PerformanceWrapper = styled.div`
  margin: 10px 0 100px 0;
  width: 100%;
  max-width: 960px;
  border-top: 2px solid #1a2b64;

  table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    table-layout: fixed;
  }

  th {
    font-size: 14px;
    padding: 15px 0;
    color: #1a2b64;
    background: #f6f7f8;
    border-bottom: 1px solid #e0dfe1;
  }
  td {
    font-size: 14px;
    padding: 15px 0;
    border-bottom: 1px solid #e0dfe1;
    text-align: center;
    color: #767676;
    font-weight: 700px;
  }
`;

export const TeamRecordBlock = () => {
  const [blockData, setBlockData] = useState<BlockType>();
  const router = useRouter();
  const id = router.query.team_id;

  useEffect(() => {
    TokenClient.get('/team/record/block', { params: { team_id: id } })
      .then((response) => {
        console.log(response.data.data);
        console.log(response.status);

        if (response.status === 200) {
          setBlockData(response.data.data);
        }
      })
      .catch((response) => {
        console.log(response.data);
        console.log(response.status);
      });
  }, [id]);
  return (
    <>
      <RecordTitle>블로킹 기록</RecordTitle>
      <PerformanceWrapper>
        <table>
          <thead>
            <tr>
              <th>경기수</th>
              <th>세트수</th>
              <th>블로킹 성공</th>
              <th>유효 블로킹</th>
              <th>범실</th>
              <th>실패</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{blockData?.match_count}</td>
              <td>{blockData?.set_count}</td>
              <td>{blockData?.block_success}</td>
              <td>{blockData?.block}</td>
              <td>{blockData?.block_miss}</td>
              <td>{blockData?.block_fail}</td>
            </tr>
          </tbody>
        </table>
      </PerformanceWrapper>
    </>
  );
};
