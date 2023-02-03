import styled from '@emotion/styled';
import { useState } from 'react';
import { DetailRecordType } from '../PlayerDetails';
import { RecordTabAttack } from './RecordTabAttack/RecordTabAttack';
import { RecordTabBlock } from './RecordTabBlock/RecordTabBlock';
import { RecordTabDig } from './RecordTabDig/RecordTabDig';
import { RecordTabReceive } from './RecordTabReceive/RecordTabReceive';
import { RecordTabServe } from './RecordTabServe/RecordTabServe';

const AttackTypeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 138px;
  height: 100%;
`;

interface AttackTypeBoxProps {
  isActive: boolean;
}

const AttackTypeBox = styled.div<AttackTypeBoxProps>`
  width: 138px;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ isActive }) => (isActive ? '#fff' : '#333')};
  font-weight: bold;
  font-size: 15px;
  background-color: ${({ isActive }) => (isActive ? '#0e76bc' : '#f6f7f8')};
  border-right: 1px solid #e0e0e0;
  border-top: 1px solid #e0e0e0;

  &:first-of-type {
    border-top: none;
  }
`;

interface RecordTabProps {
  data: DetailRecordType | undefined;
}

export const RecordTabs = ({ data }: RecordTabProps) => {
  const [currentTab, clickTab] = useState(0);

  const menuArr = [
    { name: '공격', content: <RecordTabAttack data={data?.attack} /> },
    { name: '블로킹', content: <RecordTabBlock data={data?.block} /> },
    { name: '서브', content: <RecordTabServe data={data?.serve} /> },
    {
      name: '서브 리시브',
      content: <RecordTabReceive data={data?.serve_receive} />,
    },
    { name: '디그', content: <RecordTabDig data={data?.dig} /> },
  ];

  const selectMenuHandler = (index: number) => {
    clickTab(index);
  };

  return (
    <>
      <AttackTypeWrapper>
        {menuArr.map((el, idx) => (
          <AttackTypeBox
            key={idx}
            isActive={idx === currentTab}
            onClick={() => selectMenuHandler(idx)}
          >
            {el.name}
          </AttackTypeBox>
        ))}
      </AttackTypeWrapper>
      <div style={{ width: '411px' }}></div>
      {menuArr[currentTab].content}
    </>
  );
};
