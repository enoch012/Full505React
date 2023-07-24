import React, {useState} from 'react';
import {Col, Row} from "react-bootstrap";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function Write(props) {

  const navi = useNavigate();
  const [board, setBoard] = useState({
    id : "",
    title : "",
    content : ""
  });



  /* 해당 input 태그 입력 변화에 따라 해당 board.변수 값 set */
  const changeBoardContent = (e) => {
    const {value, name} = e.target;
    setBoard({
      ...board,
      [name] : value,
    });
  }

  /* 게시글 등록하기 버튼 누르면 서버로 전송 */
  const submitBoard = () => {
    axios.post('http://localhost:8080/board/write', board)
      .then(res => {
        alert("게시글이 등록 되었습니다.");
        navi("/board/list"); // 성공시 리스트로 돌아가기
      })
      .catch(err => {
        console.log("게시글 등록 통신 실패" + err);
      })
  }

  return (
    <div className={'container my-4'}>
      <Row className={'d-flex justify-content-center'}>
        <Col sm={6}>
          <h1>글쓰기 페이지입니다</h1>
          <div>
            <form id={"boardInsert"}>
              {/* 제목 영역 */}
              <label htmlFor="title" className={'form-label mt-3'}>제목</label>
              <input type="text" id="title" name={"title"} value={board.title} className={"form-control"} placeholder={'제목을 입력해주세요'} onChange={changeBoardContent}/>

              {/* 작성자 영역 */}
              <label htmlFor="id" className={'form-label mt-3'}>작성자</label>
              <input type="text" id={"id"} name={"id"} value={board.id} className={"form-control"} placeholder={'작성자를 입력해주세요'} onChange={changeBoardContent}/>

              {/* 내용 영역 */}
              <label htmlFor="content" className={'form-label mt-3'}>내용</label>
              <textarea name="content" id="content" name={"content"} value={board.content} className={"form-control"} rows="10" placeholder={'내용을 입력해주세요'} onChange={changeBoardContent}></textarea>

              {/* 버튼 */}
              <div className={'text-end'}>
                <button type={"button"} className={'btn btn-dark px-3 my-3'} onClick={submitBoard}>제출하기</button>
              </div>
            </form>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Write;