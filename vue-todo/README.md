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