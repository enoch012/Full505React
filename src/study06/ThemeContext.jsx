import React from 'react';

/*
* Context 파일을 따로 만들어 빼준다
* 기본값 설정 및 컨텍스트 생성
* 하나의 Context는 하나의 데이터만 전달이 가능하다.
* 여러개의 데이터를 전달할 경우 object 타입이나 배열에 데이터를 넣어서 전달 해주어야 한다.
* 컨텍스트만 사용하여 여러개의 데이터를 전달할 경우에는 컨텍스트를 중복해서 사용하면 된다.
* 즉 Provider및 Consumer 를 중첩하면 된다는 것이다. 이게 무슨 소리냐 예시를 보자.(App9 파일 참고) */

const ThemeContext = React.createContext('dark');
ThemeContext.displayName = 'ThemeContext';

export default ThemeContext;