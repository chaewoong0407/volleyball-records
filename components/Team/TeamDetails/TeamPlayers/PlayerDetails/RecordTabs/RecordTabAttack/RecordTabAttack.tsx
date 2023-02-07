import styled from '@emotion/styled';
import { AttackType } from '../../PlayerDetails';

export const PlayerStat = styled.div`
  width: 411px;
  border-left: 1px solid #e0e0e0;
  margin: 0;
  text-align: center;

  dl {
    width: 33.33%;
    float: left;
    border-right: 1px solid #e0e0e0;
    border-bottom: 1px solid #e0e0e0;
    box-sizing: border-box;
    margin: 0;

    &:nth-of-type(3) {
      border-right: none;
    }
    &:nth-of-type(6) {
      border-right: none;
    }

    dt {
      line-height: 61px;
      font-weight: 700;
      height: 62px;
      font-size: 14px;
      color: #1a2b64;
      background-color: #f6f7f8;
      border-bottom: 1px solid #e0e0e0;
      margin: 0;

      @media (max-width: 768px) {
        font-size: 10px;
      }
    }

    dd {
      height: 60px;
      line-height: 61px;
      font-size: 14px;
      margin: 0;
      font-weight: 500;

      @media (max-width: 768px) {
        font-size: 10px;
      }
    }
  }
`;
interface RecordDataProps {
  data: AttackType | undefined;
}
export const RecordTabAttack = ({ data }: RecordDataProps) => {
  return (
    <PlayerStat>
      <dl>
        <dt>공격 시도</dt>
        <dd>{data?.attack}</dd>
      </dl>
      <dl>
        <dt>공격 성공</dt>
        <dd>{data?.attack_success}</dd>
      </dl>
      <dl>
        <dt>범실</dt>
        <dd>{data?.attack_miss}</dd>
      </dl>
      <dl>
        <dt>상대 블록</dt>
        <dd>{data?.blocking_shut_out}</dd>
      </dl>
      <dl>
        <dt>성공율</dt>
        <dd>{data?.accuracy}%</dd>
      </dl>
      <dl>
        <dt>점유율</dt>
        <dd>{data?.possession}%</dd>
      </dl>
    </PlayerStat>
  );
};
