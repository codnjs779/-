# Title

✍<strong>Write</strong>
<br/>
하루 한줄 일기장 웹앱
<br/>
<br/>

> > 오늘 하루 있었던 일들을 짧은 글로 정리하고, 그 날을 대표할 수 있는 감정 이모티콘을 사용해서 일기를 쓰는
> > 웹페이지 입니다.

# install

```
npx create-react-app
npm install -g yarn
yarn add react-router-dom
yarn add firebase
yarn add @fortawesome/fontawesome-free
```

# 화면 구성(반응형)

📑Login <br/>
📑WriteList - 글목록 <br/>
📑Today - 새 글 쓰기<br/>
📑Edit - 글 수정 & 삭제 <br/>

# AWS amplify 배포

🔽
https://master.dxcsmbvlvhjzc.amplifyapp.com/

# error

💥 새로고침 후 무한로딩 및 기존 목록들 증발 [02.12] -> [02.16]: 원인]page가 바뀌면 기존 로그인 정보를 현재위치에 불러오지 못함 => 해결] App.jsx에 user 값이 있다면 setUserId함수에 user정보를 넣어주는 코드 작성

💥 모든 페이지에서 새로고침 하면 개발자 콘솔에 정체를 알 수 없는 ws ? 가 무한 호출됨 [02.12] -> [02.13] 파이어베이스 자체적으로 사용하는 웹소켓(코드와 무관)
