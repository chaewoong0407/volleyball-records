import { DigType } from '../../PlayerDetails';
import { PlayerStat } from '../RecordTabAttack/RecordTabAttack';

interface RecordDataProps {
  data: DigType | undefined;
}

export const RecordTabDig = ({ data }: RecordDataProps) => {
  return (
    <PlayerStat>
      <dl>
        <dt>디그 시도</dt>
        <dd>{data?.dig}</dd>
      </dl>
      <dl>
        <dt>디그 정확</dt>
        <dd>{data?.dig_success}</dd>
      </dl>
      <dl>
        <dt>디그 실패</dt>
        <dd>{data?.dig_fail}</dd>
      </dl>
      <dl>
        <dt>점유율</dt>
        <dd>{data?.possession}%</dd>
      </dl>
    </PlayerStat>
  );
};
