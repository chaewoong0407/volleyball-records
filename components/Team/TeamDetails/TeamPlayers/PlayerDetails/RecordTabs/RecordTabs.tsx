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
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ isActive }) => (isActive ? '#fff' : '#333')};
  font-weight: bold;
  font-size: 15px;
  background-color: ${({ isActive }) => (isActive ? '#0e76bc' : '#f6f7f8')};
  border-right: 1px solid #e0e0e0;
  border-top: 1px solid #e0e0e0;

  @media (max-width: 768px) {
    font-size: 13px;
  }
  &:first-of-type {
    border-top: none;
  }
`;

export const Box = styled.div`
  width: 411px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;

  .Progress {
    width: 150px;
    height: 150px;
  }

  @media (max-width: 768px) {
    width: 200px;
  }
  @media (max-width: 550px) {
    width: 50px;
  }
  @media (max-width: 470px) {
    width: 0px;
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
      {menuArr[currentTab].content}
    </>
  );
};
