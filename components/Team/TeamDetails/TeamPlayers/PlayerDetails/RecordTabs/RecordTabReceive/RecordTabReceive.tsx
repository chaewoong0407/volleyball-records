import { ReceiveType } from '../../PlayerDetails';
import { PlayerStat } from '../RecordTabAttack/RecordTabAttack';

interface RecordDataProps {
  data: ReceiveType | undefined;
}

export const RecordTabReceive = ({ data }: RecordDataProps) => {
  return (
    <PlayerStat>
      <dl>
        <dt>리시브 시도</dt>
        <dd>{data?.receive}</dd>
      </dl>
      <dl>
        <dt>리시브 정확</dt>
        <dd>{data?.receive_success}</dd>
      </dl>
      <dl>
        <dt>리시브 실패</dt>
        <dd>{data?.receive_miss}</dd>
      </dl>
      <dl>
        <dt>점유율</dt>
        <dd>{data?.possession}%</dd>
      </dl>
    </PlayerStat>
  );
};
