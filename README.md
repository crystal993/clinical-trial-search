## [✨ 배포 링크](https://pre-onboarding-7th-3-1-9-neon.vercel.app/)

<br>

## 사용 Tools
- React
- TypeScript
- styled-components
- redux-toolkit

<br>

## ✏ 토의 내용 및 선정

[🖍 1차 토의결과](https://github.com/Wanted-07-team-9/pre-onboarding-7th-3-1-9/discussions/1)  
[🖍 2차 토의결과](https://github.com/Wanted-07-team-9/pre-onboarding-7th-3-1-9/discussions/1)

[🥇 선정 결과](https://github.com/Wanted-07-team-9/pre-onboarding-7th-3-1-9/discussions/1)

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

https://github.com/Wanted-07-team-9/pre-onboarding-7th-3-1-9/blob/83987b7f46ad37bdab8c2132f77740ab81e77456/src/components/main/ParseSearchWordBold.tsx#L1-L16

- searchWord(검색어), text(검색 결과)

- findIdx : text(검색 결과)에서 searchWord(검색어)의 시작인덱스를  찾아서 findIdx 변수에 저장한다. 
- preText :  searchWord(검색어)를 기준으로 앞 쪽의 문자열만 slice해서 변수에 저장한다.  
- afText : searchWord(검색어)를 기준으로 뒤 쪽의 문자열만 slice해서 변수에 저장한다. 

<br>

## [Assignment 2] 검색어가 없을 시 "검색어 없음" 표출 ✔️ 

![image](https://user-images.githubusercontent.com/72599761/201175536-2b43eb81-902d-44ae-aaf0-f76338f49d65.png)

https://github.com/Wanted-07-team-9/pre-onboarding-7th-3-1-9/blob/83987b7f46ad37bdab8c2132f77740ab81e77456/src/components/main/AutoCompleteItemList.tsx#L6-L23

- sickData와 isLoading을 리덕스에서 전역으로 관리 
- sickData의 길이가 0일 때 검색어가 없습니다 문구를 보여준다. 
- 로딩중일 때는 데이터를 불러오는 중입니다. 문구를 보여준다.

<br>

## [Assignment 3] API 호출 최적화 / 입력마다 API 호출하지 않도록 하기✔️

### [Assignment 3-1] cacheStorage로 api 로컬 캐싱 구현 

![image](https://user-images.githubusercontent.com/72599761/201178179-84b13abf-c5b1-4130-b822-702e24ec9051.png)

https://github.com/Wanted-07-team-9/pre-onboarding-7th-3-1-9/blob/83987b7f46ad37bdab8c2132f77740ab81e77456/src/apis/clinicalTrialService.ts#L11-L33

<br>

### [Assignment 3-2]입력마다 API 호출하지 않도록 API 호출 횟수를 줄이는 방법

https://github.com/Wanted-07-team-9/pre-onboarding-7th-3-1-9/blob/83987b7f46ad37bdab8c2132f77740ab81e77456/src/hooks/useDebounceSickData.tsx#L1-L28

- 이전에는 간염이라는 단어를 입력하면 ㄱ ㅏ ㄴ ㅇ ㅕ ㅁ 글자 하나마다 onChange 이벤트가 발생하므로 api call이 6번 일어났습니다.   

- useDebounceSickData 훅을 이용해서 setTimeout으로 0.3초의 시간을 딜레이해서 연속해서 발생하는 이벤트 중 마지막만 api call을 하여 총 2번의 api call이 되는 것을 확인할 수 있었습니다. 

- 불필요한 api call을 하지 않고, 총 api call이 1/3로 줄어드는 것을 확인할 수 있었습니다. 

<br>

##  [Assignment 4]  키보드로 추천 검색어로 이동하는 방법

구현 중입니다..! 

## [Assignment 5]  input 마우스로 클릭했을 때 추천 검색어 창 노출, 외부 클릭하면 추천 검색어 창 닫힘 

https://github.com/Wanted-07-team-9/pre-onboarding-7th-3-1-9/blob/83987b7f46ad37bdab8c2132f77740ab81e77456/src/hooks/useFocusAutocomplete.tsx#L5-L26

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
