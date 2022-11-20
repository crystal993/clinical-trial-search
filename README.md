## 👨‍👩‍👧‍👦 9팀

## **✨ 배포링크**

### [한국임상정보 검색](https://pre-onboarding-7th-3-1-9-neon.vercel.app/)

<br>

## 📝 Description 
원티드 프리온보딩에서 진행하는 기업과제입니다. 
한국임상정보 사이트의 검색 영역을 클론하는 과제입니다. 
검색창과 검색어 추천 기능을 구현하면 됩니다. 
언어는 타입스크립트, 전역 상태 관리는 Redux-toolkit을 사용했습니다.
스타일 라이브러리는 Styled-components를 사용했습니다.
json server를 vercel로 배포해서 사용했습니다.

<br>

## 🛠️ Dev Tools

<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> 
  <img src="https://img.shields.io/badge/redux_toolkit-764ABC?style=for-the-badge&logo=redux&logoColor=black"> 
  <img src="https://img.shields.io/badge/styled_components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white">
  <img src="https://img.shields.io/badge/typescript-61DAFB?style=for-the-badge&logo=typescript&logoColor=white"> 
  <br>

## **📝 디렉토리 구조**

```
   📂src
   ┗ 📂apis
   ┗ 📂assets
   ┗ 📂components
         ┗ 📂elements
         ┗ 📂main
   ┗ 📂hooks
   ┗ 📂pages
   ┗ 📂redux
         ┗ 📂reducer
   ┗ 📂router
   ┗ 📂style
   ┗ 📂util
   ┣📄App.tsx
   ┗📄index.tsx

```

<br>

## 질환명 검색시 API 호출 통해서 검색어 추천 기능 구현 ✔️ 

![검색어기능구현](https://user-images.githubusercontent.com/72599761/201173666-ed6ce9ac-5489-429a-943c-3cc0568f5c91.gif)

<br>

## [Assignment 1] 사용자가 입력한 텍스트와 일치하는 부분 볼드처리 ✔️ 

https://github.com/crystal993/clinical-trial-search/blob/67607e5cdf1784b8559e01bb566f35bf62731395/src/components/main/ParseSearchWordBold.tsx#L1-L16


- searchWord(검색어), text(검색 결과)

- findIdx : text(검색 결과)에서 searchWord(검색어)의 시작인덱스를  찾아서 findIdx 변수에 저장한다. 
- preText :  searchWord(검색어)를 기준으로 앞 쪽의 문자열만 slice해서 변수에 저장한다.  
- afText : searchWord(검색어)를 기준으로 뒤 쪽의 문자열만 slice해서 변수에 저장한다. 

<br>

## [Assignment 2] 검색어가 없을 시 "검색어 없음" 표출 ✔️ 

![image](https://user-images.githubusercontent.com/72599761/201175536-2b43eb81-902d-44ae-aaf0-f76338f49d65.png)

https://github.com/crystal993/clinical-trial-search/blob/67607e5cdf1784b8559e01bb566f35bf62731395/src/components/main/AutoCompleteItemList.tsx#L6-L23

- sickData와 isLoading을 리덕스에서 전역으로 관리 
- sickData의 길이가 0일 때 검색어가 없습니다 문구를 보여준다. 
- 로딩중일 때는 데이터를 불러오는 중입니다. 문구를 보여준다.

<br>

## [Assignment 3] API 호출 최적화 / 입력마다 API 호출하지 않도록 하기✔️

### [Assignment 3-1] cacheStorage로 api 로컬 캐싱 구현 

![image](https://user-images.githubusercontent.com/72599761/201178179-84b13abf-c5b1-4130-b822-702e24ec9051.png)

https://github.com/crystal993/clinical-trial-search/blob/67607e5cdf1784b8559e01bb566f35bf62731395/src/apis/clinicalTrialService.ts#L1-L34

<br>

### [Assignment 3-2]입력마다 API 호출하지 않도록 API 호출 횟수를 줄이는 방법

https://github.com/crystal993/clinical-trial-search/blob/67607e5cdf1784b8559e01bb566f35bf62731395/src/hooks/useDebounceSickData.tsx#L6-L26

- 이전에는 간염이라는 단어를 입력하면 ㄱ ㅏ ㄴ ㅇ ㅕ ㅁ 글자 하나마다 onChange 이벤트가 발생하므로 api call이 6번 일어났습니다.   

- useDebounceSickData 훅을 이용해서 setTimeout으로 0.3초의 시간을 딜레이해서 연속해서 발생하는 이벤트 중 마지막만 api call을 하여 총 2번의 api call이 되는 것을 확인할 수 있었습니다. 

- 불필요한 api call을 하지 않고, 총 api call이 1/3로 줄어드는 것을 확인할 수 있었습니다. 

<br>


## [Assignment 4]  input 마우스로 클릭했을 때 추천 검색어 창 노출, 외부 클릭하면 추천 검색어 창 닫힘 

https://github.com/crystal993/clinical-trial-search/blob/67607e5cdf1784b8559e01bb566f35bf62731395/src/hooks/useFocusAutocomplete.tsx#L5-L26

 input영역을 마우스로 누르면 검색어 추천 창이 나오고, input의 외부 영역을 누르면 검색어 추천 창이 안보이게 custom hook을 만들었습니다. searchInput 을 반환합니다. 
   

```javascript 
const searchInput = useFocusAutocomplete();
...

 return (
    <Wrapper>
      <StyledSearchIcon />
      <SearchInputField
        ref={searchInput}
        placeholder="질환명을 입력해주세요."
        onChange={onChangeHandler}
      />
```

searchInput으로 돔에 직접 접근하여 마우스로 input 영역을 누르면 검색어 추천 창이 나오고, input의 외부 영역을 누르면 검색어 추천 창이 안보이게 조작이 가능합니다. 
