import React from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../redux/hooks';
import AutoCompleteItem from './AutoCompleteItem';

function AutoCompleteItemList() {
  const { isLoading, sickData } = useAppSelector(state => state.search);

  if (sickData.length === 0) return <Msg>검색어가 없습니다.</Msg>;
  else if (isLoading) return <Msg>데이터를 불러오는 중입니다...</Msg>;
  else
    return (
      <SearchWordsWrapper>
        {sickData.map(({ sickNm }, idx) => {
          return (
            <>
              <AutoCompleteItem key={idx} text={sickNm} />
            </>
          );
        })}
      </SearchWordsWrapper>
    );
}

const SearchWordsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 25px 0px;
  row-gap: 20px;
  height: 100%;
  min-height: 50px;
`;

const Msg = styled.h4`
  margin: 20px 0px;
`;

export default AutoCompleteItemList;
