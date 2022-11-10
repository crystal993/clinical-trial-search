import styled from 'styled-components';
import Header from '../components/elements/Header';
import SearchInput from '../components/main/SearchInput';
import useDebounceSickData from '../hooks/useDebounceSickData';

const Main = () => {
  useDebounceSickData();
  return (
    <Wrapper>
      <Header />
      <MainSection>
        <SearchInput />
      </MainSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background-color: ${({ theme }) => theme.backgroundColor};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MainSection = styled.div`
  width: 100%;
`;

export default Main;
