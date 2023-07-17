import React from "react";

const styles = {
  wrapper : {
    margin : 8,
    padding : 15,
    display : 'flex',
    flexDirection : 'row',
    border : '1px solid #ddd',
    borderRadius : 8
  },
  messageText : {
    color : 'black',
    fontSize : 16,
  }

}

class Notification extends React.Component{
  constructor(props) {
    super(props);
    this.state = {}
  }

  /* 컴포넌트 생명주기 연습 */
  componentDidMount() {
    console.log('componentDidMount() called');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate() called');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount() called');
  }


  render() {
    return(
      <div style={styles.wrapper}>
        <span style={styles.messageText}>
          {/* 부모 컴포넌트에서 전달된 데이터인 message를 출력 */}
          {this.props.message}
        </span>
      </div>
    )
  }

}

export default Notification;

