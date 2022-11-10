import React from 'react';
import styled from 'styled-components';

function Header() {
  return (
    <Wrapper>
      국내 모든 임상시험 검색하고<br></br>온라인으로 참여하기
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.backgroundColor};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.8rem;
  font-weight: 700;
  letter-spacing: -0.018em;
  line-height: 1.6;
  margin-top: -220px;
  margin-bottom: 40px;
  font-family: inherit;
  text-align: center;
`;
export default Header;
