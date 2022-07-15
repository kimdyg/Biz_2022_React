# 다이어트 프로젝트

- 오늘 하루 섭취한 식품의 칼로리가 얼마인지 기록하여 다이어트를 하는데 도와주는 App
- NodeJS + Express + MongoDB + React 연동 프로젝트

## NodeJS backend Project 를 생성하기 위하여

- 프로젝트 생성 :express-21c node-310-Food
- 프로젝트 폴더에서 : npm install

## React Frontend Project 를 생성하기 위하여

- node-310 Food 폴더에서 React client 생성
- client 폴더에서 터미널 열기
- yarn 실행하여 update
- yarn build 실행하여 build 생성하기
- node-310-Food/client/build 폴더 생성된 것 확인

## nodeJS 에서 client 인식시키기

- nodeJS-310-Food/app.js 파일 열기
- `app.use(express.static(path.join("./client/build")));` 변경하기
- `app.use("/", indexRouter);` 삭제 혹은 주석
- nodeJS-310-Food 폴더에서 서버 Start : nodemon 실행하기
- Web Browser 에서 localhost:3000 주소 입력하여 React 화면 출력 확인

## React 프로젝트 파일 이름 변경

- App.* 으로 시작되는 파일을 모두 ReactJS.*로 변경(./client/src 안의)
- (./client/src 안의) index.js 파일안에 임포트 부분 app~ 본문의 `<app />`도
- (./client/src 안의) index.html 내용 수정
- (./client/src 안의) ReactJS.js 내용 수정

## MongoDB 연동하기

- mongoose dependency 설치 : npm install mongoose(node-310-Food/client 우클릭 cmd 창에서 )
- 날짜와 시간 도구 설치 : yanr add moment(node-310-Food/client 우클릭 cmd 창에서 )
- UUID Key 생성 도구 설치 : yarn add react-uuid(node-310-Food/client 우클릭 cmd 창에서 )
- 도구 설치시 package.json에 보여짐

- comps 폴더 생성하여 \*.jsx 파일들 생성
