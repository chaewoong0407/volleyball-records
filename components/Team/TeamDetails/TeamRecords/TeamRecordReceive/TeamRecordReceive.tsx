import styled from '@emotion/styled';
import { TokenClient } from 'lib/Axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { RecordTitle } from '../../TeamPlayers/PlayerDetails/PlayerDetails';
import { ReceiveType } from '../TeamRecords';

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

export const TeamRecordReceive = () => {
  const [receiveData, setReceiveData] = useState<ReceiveType>();
  const router = useRouter();
  const id = router.query.team_id;

  useEffect(() => {
    TokenClient.get('/team/record/serve_receive', { params: { team_id: id } })
      .then((response) => {
        console.log(response.data.data);
        console.log(response.status);

        if (response.status === 200) {
          setReceiveData(response.data.data);
        }
      })
      .catch((response) => {
        console.log(response.data);
        console.log(response.status);
      });
  }, [id]);
  return (
    <>
      <RecordTitle>리시브 기록</RecordTitle>
      <PerformanceWrapper>
        <table>
          <thead>
            <tr>
              <th>경기수</th>
              <th>세트수</th>
              <th>리시브 시도</th>
              <th>리시브 성공</th>
              <th>리시브 실패</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{receiveData?.match_count}</td>
              <td>{receiveData?.set_count}</td>
              <td>{receiveData?.receive}</td>
              <td>{receiveData?.receive_success}</td>
              <td>{receiveData?.receive_miss}</td>
            </tr>
          </tbody>
        </table>
      </PerformanceWrapper>
    </>
  );
};
