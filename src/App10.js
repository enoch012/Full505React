import React, {useContext} from "react";


// 컨텍스트 사용을 위해서 React.createContext() 실행하고 변수에 저장
// 컨텍스트 2개 생성
const ThemeContext = React.createContext('light');
const UserContext = React.createContext('Guest');
UserContext.displayName = '유저 컨텍스트'; // 컨텍스트 이름을 지정, 해두면 개발자 모드에서 디버깅 하기에 좋다


function App10(props) {

  const { theme, signedInUser } = props // theme = props.theme

  return(
    <div className={'container my-4'}>
      <ThemeContext.Provider value={theme}>
        <UserContext.Provider value={signedInUser}>
          {/* 컨텍스트를 사용할 자손 컴포넌트 지정 */}
          <Layout />
        </UserContext.Provider>
      </ThemeContext.Provider>
    </div>
  )
}

// 부모 컴포넌트가 전달한 데이터가 없으므로 props 가 비었음
function Layout(props) {
  return (
    // 자식 컴포넌트 호출, 전달할 데이터 없음
    <Contents />
  );
}

function Contents(props) {
  // 변수를 쓰면 데이터를 바로 입력 받을 수 있다.
  const theme = useContext(ThemeContext);
  const user = useContext(UserContext);

  return (
    <ProfilePage theme={theme} user={user} />
  )
}

function ProfilePage(props){
  return (
    <div>
      <p>{props.theme}</p>
      <p>{props.user}</p>
    </div>
  )
}




export default App10;