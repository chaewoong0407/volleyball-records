import { BlockType } from '../../PlayerDetails';
import { PlayerStat } from '../RecordTabAttack/RecordTabAttack';

interface RecordDataProps {
  data: BlockType | undefined;
}

export const RecordTabBlock = ({ data }: RecordDataProps) => {
  return (
    <PlayerStat>
      <dl>
        <dt>블로킹 성공</dt>
        <dd>{data?.block_success}</dd>
      </dl>
      <dl>
        <dt>유효 블로킹</dt>
        <dd>{data?.block}</dd>
      </dl>
      <dl>
        <dt>실패</dt>
        <dd>{data?.block_fail}</dd>
      </dl>
      <dl>
        <dt>범실</dt>
        <dd>{data?.block_miss}</dd>
      </dl>
      <dl>
        <dt>점유율</dt>
        <dd>{data?.possession}%</dd>
      </dl>
    </PlayerStat>
  );
};
