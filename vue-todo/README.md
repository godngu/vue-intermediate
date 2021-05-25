# 인프런 Vue.js 강좌 연습
## [Vue.js 중급 강좌 - 웹앱 제작으로 배워보는 Vue.js, ES6, Vuex](https://inf.run/PvK9)

### 프로젝트 설정
##### vue CLI로 프로젝트 생성
```bash
$ vue init webpack-simple vue-todo

? Project name vue-todo
? Project description A Vue.js project
? Author kil <godngu@gmail.com>
? License MIT
? Use sass? (y/N) N
```

##### 프로젝트 실행
```bash
$ cd vue-todo
$ npm install
$ npm run dev
```

##### 반응형 웹을 위한 메타태그 삽입
- [Viewport](https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag)
```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

##### fontawesome
```html
<link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
          integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
```

##### google font ubuntu
```html
<link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Ubuntu"/>
```

##### `scoped`: 컴포넌트 안에서만 유효한 style 속성이 적용된다.
```html
<style scoped></style>
```
