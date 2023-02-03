import { ServeType } from '../../PlayerDetails';
import { PlayerStat } from '../RecordTabAttack/RecordTabAttack';

interface RecordDataProps {
  data: ServeType | undefined;
}

export const RecordTabServe = ({ data }: RecordDataProps) => {
  return (
    <PlayerStat>
      <dl>
        <dt>서브 시도</dt>
        <dd>{data?.serve_count}</dd>
      </dl>
      <dl>
        <dt>서브 성공</dt>
        <dd>{data?.serve_success}</dd>
      </dl>
      <dl>
        <dt>범실</dt>
        <dd>{data?.serve_miss}</dd>
      </dl>
      <dl>
        <dt>점유율</dt>
        <dd>{data?.possession}%</dd>
      </dl>
    </PlayerStat>
  );
};
