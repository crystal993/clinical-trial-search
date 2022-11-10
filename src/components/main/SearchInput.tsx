import React from 'react';
import { ReactComponent as SearchIcon } from '../../assets/searchIcon.svg';
import styled from 'styled-components';
import { Button } from '../elements/Button';
import AutoCompleteBox from './AutoCompleteBox';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import useFocusAutocomplete from '../../hooks/useFocusAutocomplete';
import { setSearchWord } from '../../redux/reducer/searchSlice';

function SearchInput() {
  const dispatch = useAppDispatch();
  const { isAutocomplete } = useAppSelector(state => state.search);
  const searchInput = useFocusAutocomplete();

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchWord(e.target.value));
  };
  return (
    <Wrapper>
      <StyledSearchIcon />
      <SearchInputField
        ref={searchInput}
        placeholder="질환명을 입력해주세요."
        onChange={onChangeHandler}
      />
      <StyledButton text={'검색'} />
      {isAutocomplete && <AutoCompleteBox />}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.backgroundColor};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: inherit;
  text-align: center;
  position: relative;
  width: 478px;
`;

const SearchInputField = styled.input`
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  font-size: 1.125rem;
  font-weight: 700;
  letter-spacing: -0.018em;
  line-height: 1.6;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding: 20px 10px 20px 48px;
  font-weight: 400;
  outline: none;
  border: none;
  border-radius: 42px;
  width: 478px;
`;

const StyledSearchIcon = styled(SearchIcon)`
  width: 20px;
  position: absolute;
  top: 25px;
  left: 20px;
`;

const StyledButton = styled(Button)`
  position: absolute;
  bottom: 0;
  right: 0;
  border-radius: 0px 40px 40px 0px;
  height: 68.8px;
`;

export default SearchInput;
