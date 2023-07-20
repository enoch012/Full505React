import React from "react";

// 컨텍스트 사용을 위해서 React.createContext() 실행하고 변수에 저장
// 컨텍스트 2개 생성
const ThemeContext = React.createContext('light');
const UserContext = React.createContext('Guest');


function App9(props) {
  // 전개 연산법으로 object 타입인 props 의 key와 동일한 이름의 변수에 데이터 저장
  const { theme, signedInUser } = props // theme = props.theme

  return(
    // 컨텍스트 2개를 겹쳐서 사용 시 동시에 지정한 컴포넌트의 자손 컴포넌트에서 2개의 데이터를 모두 사용할 수 있음
    <div>
      <ThemeContext.Provider value={theme}>
        <UserContext.Provider value={signedInUser}>
          {/* 전달 된 데이터 없음 */}
          <Layout />
        </UserContext.Provider>
      </ThemeContext.Provider>
    </div>
  )
}



function Layout(props) {
  return (
    // 전달 받은 데이터 없음
    // 자식 컴포넌트 Content 호출
    <div>
      <Content />
    </div>
  );
}

function Content() {
  return (
    // Provider를 겹쳐서 사용했기 때문에 Consumer도 겹쳐서 사용함
    // 전달 받은 데이터가 없어서 props 가 비어있음
    <ThemeContext.Consumer>
      {/* 컨텍스트에 저장된 key(속성명)는 value 로 고정되어 있으르모 Consumer 에서 가져올 데이터의 이름을 설정할 수 있음 */}
      {theme => (
        <UserContext.Consumer>
          {user => (
            <ProfilePage user={user} theme={theme} />
          )}
        </UserContext.Consumer>
      )}
    </ThemeContext.Consumer>
  )
}

function ProfilePage(props) {
  return (
    <div className={'container my-4 p-3 bg-info rounded'}>
      <h2>{props.user}</h2>
      <h3>{props.theme}</h3>
    </div>
  );
}



export default App9;