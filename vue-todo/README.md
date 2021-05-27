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

##### create()
- 인스턴스가 생성되자마자 호출되는 라이프사이클 훅(hook)


### Modal
- [모달 컴포넌트 Example](https://kr.vuejs.org/v2/examples/modal.html)

#### slot
- `slot`이 포함된 컴포넌트를 등록한 컴포넌트에서 재정의 할 수 있다.

Modal.vue
```html
<slot name="header">default header</slot>
```

TodoInput.vue 에서 header 내용 재정의
```html
<slot name="header">경고!!</slot>
```

### Transitions & Animation
- [가이드](https://kr.vuejs.org/v2/guide/transitions.html)


### Module
```javascript
// libs/math.js
export function sum(x, y) {
    return x + y;
}

// main.js
import {sum} from 'libs/math.js';

// import된 함수 사용
sum(1, 2);
```

#### default
- 한 개의 파일에서 하나밖에 export 되지 않는다.
- 다른 함수가 export 되지 않도록 모듈화를 한다.
```javascript
// util.js
export default function (x) {
    return console.log(x);
}

// main.js
// 익명함수 호출
// function (x) { return console.log(x); }
import util from 'util.js'; // 익명 함수를 다른 이름으로 사용할 수 있다.
console.log(util);
util('hi');

// app.js
import log from 'util.js' // 익명 함수를 다른 이름으로 사용할 수 있다.
log('hi');
```


## Vuex
- 상태 관리 패턴
- 복잡한 애플리케이션의 컴포넌트들을 효율적으로 관리하는 라이브러리
- React의 Flux 패턴에 기인함
- 단방향 데이터 흐름
- 주요 속성
    - `state`, `getters`, `mutations`, `actions`
    - (`data`, `computed`, `methods`, `async methods` 와 대응된다.)

### Flux 패턴
- MVC 패턴의 복잡한 데이터 흐름 문제를 해결하기 위한 개발 패턴
- 단방향 데이터 흐름
```text
    Action --> Dispatcher --> Model --> View
```
1. `action` : 화면에서 발생하는 이벤트 또는 사용자 입력
2. `dispatcher` : 데이터를 변경하는 방법, 메서드
3. `model` : 화면에 표시할 데이터
4. `view` : 사용자 화면


### MVC 패턴
```text
Controller -> Model <--> View
```
- `Model`과 `View` 간에 양방향 데이터 통시능ㄹ 한다.
- 기능 추가 및 변경에 따라 생기는 문제점을 예측하기 어렵다.

### Vuex로 해결할 수 있는 문제
1. MVC 패턴에서 발생하는 구조적 오류
2. 컴포넌트 간 데이터 전달 명시
3. 여러 개의 컴포넌트에서 같은 데이터를 업데이트 할 때 동기화 문제

### Vuex 컨셉
- `state`
    - 컴포넌트 간에 공유하는 데이터
    - `data()`
- `view`
    - 데이터를 표시하는 화면
    - `template`
- `action`
    - 사용자의 입력에 따라 데이터를 변경
    - 특정 데이터를 변경, 이벤트를 발생
    - `methods`

### Vuex 설치하기
- 프로젝트 내에서 실행
```shell
$ npm install vuex --save
```

### 적용??
```javascript
// src/store/store.js
import Vue from 'vue'
import Vuex from 'vuex'

// vue 플러그인을사용한다.
// 전역으로 사용하는 특정 기능을 추가하고 싶을때 사용한다.
Vue.use(Vuex);

export const store = new Vuex.Store({
    // ...
});

// [Vuex store 등록]
// main.js
import { store} from './store/store'

new Vue({
    el: '#app',
    store,  // 추가한다.
    render: h => h(App)
})
```

### Vuex 기술요소
- `state`: 여러 컴포넌트에 공유되는 데이터 (`data`)
- `getters`: 연산된 state 값을 접근하는 속성 (`computed`)
- `mutations`: state 값을 변경하는 이벤트 로직, 메소드 (`methods`)
- `actions`: 비동기 처리 로직을 선언하는 메소드 (`async methods`)

#### state
```javascript
// Vue
data: {
    message: 'hello'
}

// vuex
state: {
    message: 'hello'
}
```

```html
<!-- Vue -->
<p>{{ message }}</p>

<!-- Vuex -->
<p>{{ this.$store.state.message }}</p>
```

#### getters
- state 값을 접근하는 속성이자 `computed()`처럼 미리 연산된 값을 접근하는 속성
- helper 함수를 통해서 축약이 가능하다.
```javascript
// store.js
state: {
    num: 10
},
getters: {
    getNumber(state) {
        return state.num;
    }
}
```

```html
<p>{{ this.$store.getter.getNumber }}</p>
```

#### mutations
- state의 값을 변경할 수 있는 유일한 방법이자 메서드
- `commit()`으로 동작시킨다.
```javascript
// store.js
state: { num: 10},
mutations: {
    sumNumbers(state, n) {
        return state.num + n;
    }
}

// App.vue
this.$store.commit('sumNumbers', 5);
```

##### 인자로 객체 전달
```javascript
state: { num: 10},
mutations: {
    sum(state, payload) {
        console.log(payload.message)
        return state.num += n;
    }
}

this.$store.commit('sum', {
    n: 5,
    message: 'hi'
})
```

#### actions
- 비동기 처리 로직을 선언하는 메서드, 비동기 로직을 담당하는 mutations
- 모든 비동기 처리는 `actions`에 선언한다.
- `dispatch("action 명")`

##### 예제1
- 2초 후에 카운트를 증가시킨다.
```javascript
// store.js
state: {counter: 0},
mutations: {
    addCounter(state) {
        state.counter++;
    }
},
actions: {
    delayAddCounter(context) {
        setTimeout(() => context.commit('addCounter'), 2000);
    }
}

// App.vue
methods: {
    incrementCount() {
        this.$store.dispatch('delayAddCounter');
    }
}
```

##### 예제2
- 비동기로 api를 호출하여 상품정보를 가져온 후, `mutations`를 호출하여 데이터를 `set` 한다.
```javascript
// store.js
mutations: {
    setData(state, fetchData) {
        state.product = fetchedData;
    }
},
actions: {
    fetchProductData(context) {
        return axios.get('https://api.domain.com/products/1')
                    .then(response => context.commit('setData', response));
    }
}

// App.vue
methods: {
    getProduct() {
        this.$store.dispatch(fetchProductData);
    }
}
```

##### 왜 비동기 처리 로직은 actions에 선언해야 할까?
- 언제 어느 컴포넌트에서 해당 state를 호출하고, 변경했는지 확인하기가 어렵다.
- state 값의 변화를 추적하기 어렵기 때문에 **mutations 속성에는 동기 처리 로직만 넣어야 한다.**
