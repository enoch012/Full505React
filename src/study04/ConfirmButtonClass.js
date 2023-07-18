import React from "react";

class ConfirmButtonClass extends React.Component {

  constructor(props) {
    super(props);

    this.state = { isConfirmed : false };

    this.handleConfirm = this.handleConfirm.bind(this);
  }

  // 화살표 함수 쓰면 자동으로 생성자에 bind가 된다. 
  handleConfirm = () => {
    this.setState((prevState) => ({
      isConfirmed : !prevState.isConfirmed
    }))
  }

  render() {
    return(
      <div>
        <h3>이벤트 클래스 예제 2</h3>
        <button type={'button'} className={'btn btn-dark'} onClick={this.handleConfirm} disabled={this.state.isConfirmed}>
          {this.state.isConfirmed ? '확인됨' : '확인하기'}
        </button>
      </div>
    )
  }
}

export default ConfirmButtonClass;