import React from "react";

/*
React CSS 사용하는 방법
리액트 파일이 자바스크립트이므로 기존 CSS 문법을 그대로 사용할 수 없음
자바스크립트 변수를 선언하고 object 타입으로 css 속성을 입력하여 사용함
CSS 속성명을 Camel 명명법으로 수정하여 입력하면 됨

기존 CSS 문법을 그대로 사용하고자 할 경우 CSS 파일을 import 해야 함
*/
const styles = {
  wrapper : {
    margin : 8,
    padding : 10,
    display : 'flex',
    flexDirection : 'row',
    border : '1px solid #ddd',
    borderRadius : 16,
  },
  imageContainer : {},
  image : {
    width : 50,
    height : 50,
    borderRadius : 25,
    marginRight : 5
  },
  contentContainer : {
    marginLeft : 8,
    display : 'flex',
    flexDirection: 'column',
    justifyContent : 'center'
  },
  nameText : {
    color : 'black',
    fontSize : 16,
    fontWeight : 'bold',
  },
  replyText : {
    color : 'black',
    fontSize : 16
  }
};

function Reply(props) {
  return (
    <div style={styles.wrapper}>
      <div style={styles.imageContainer}>
        {/* 고양이 아이콘 */}
        <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAIaro9NdPhttKXZ12oRy7smHDKl_bULANjA&usqp=CAU"} alt="" style={styles.image}/>
      </div>
      <div style={styles.contentContainer}>
        <span style={styles.nameText}>{props.name}</span>
        <span style={styles.replyText}>{props.contents}</span>
      </div>
    </div>
  )
}

export default Reply;