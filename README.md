# React Study
#### 리액트를 공부하며 쓰는 필기 입니다.

#### 리액트의 동작 원리
React 로 만들어진 페이지의 Element(소스코드)를 보면, 수많은 HTML 코드나 CSS 코드가 아예 보이지 않는다.
Virtual DOM(Virtual Document Object Model) 이라는 것이 있다.
React는 실제로 DOM 을 제어하는 방식이 아니라, 중간에 가상의 Virtual DOM 을 두어서, 개발의 편의성과 성능을 대폭 개선했다.

#### State
State 는 동적으로 변할 수 있는 데이터를 담는다.
이 때, 
```javascript
this.state.count += 1;
```

이런 식으로, 직접 변동해서는 안 됨. 작동하지 않고 콘솔에 에러가 뜬다.

```javascript
this.setState({count : this.state.count + 1});
```

setState 를 사용해야 한다.

**이는 state 의 count 라는 key 의 value 만 0에서 1로 변화시키는 것이 아니라,**

**count : 1 인 완벽히 새로운 state 로 바꾸는 것이다.**

**그리고 react 는 바뀐 state 를 기반으로 다시 렌더링을 한다.**

하지만, 앞서 말한 Virtual DOM 덕분에 깜빡임도 없이 빠르게 렌더링한다.

```javascript
this.setState(current => ({count : current.count +1}))
```

이런 식으로 current 를 사용하면, 외부의 state 에 의존하지 않을 수 있다.

#### func 와 func() 의 차이

func 는 어떤 event 가 발생했을 때 작동한다.
func() 는 event 에 상관없이 바로 작동한다.

#### Mount, Update, Unmount

```javascript
componentDidMount() {
    // It works when render finished
}
componentDidUpdate() {
    // It works when render new component
}
componentWillUnmount() {
    // It works when present component died
}
```




