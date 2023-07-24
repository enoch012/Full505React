import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {Col, Row} from "react-bootstrap";
import axios from "axios";

function Update(props) {
  const {num} = useParams();
  const boardNum = parseInt(num);
  const navi = useNavigate();

  const [updateBoard, setUpdateBoard] = useState({
    title : "",
    content : "",
    num : boardNum
  });

  /* 수정할 게시글 내용 불러오기 */
  const getBoardDetail = (boardNum) => {
    axios.get('http://localhost:8080/board/detail/'+ num)
      .then(res => {
        console.log("게시글 상세 비동기 통신 성공");
        console.log(res.data.result);

        setUpdateBoard({
          ...updateBoard,
          title : res.data.boardDetail.title,
          content : res.data.boardDetail.content,
        })
      })
      .catch(err => {
        console.log("detail 통신 오류 : " + err);
      });
  };

  /* 페이지 로드시 해당 게시글 정보 한번 불러오기 */
  useEffect(() => {
    getBoardDetail();
  }, []);

  /* 해당 input 태그 입력 변화에 따라 해당 board.변수 값 새로 입력하기*/
  const changeBoardContent = (e) => {
    const {value, name} = e.target;
    setUpdateBoard({
      ...updateBoard,
      [name] : value,
    });
  }

  /* 게시글 등록하기 버튼 누르면 서버로 전송 */
  const submitBoard = () => {
    console.log(updateBoard);
    axios.put('http://localhost:8080/board/update', updateBoard)
      .then(res => {
        alert("게시글이 수정 되었습니다.");
        navi(`/board/${num}`); // 성공시 리스트로 돌아가기
      })
      .catch(err => {
        console.log("게시글 수정 통신 실패" + err);
      })
  }

  return (
    <div className={'container my-4'}>
      <Row className={'d-flex justify-content-center'}>
        <Col sm={6}>
          <h1>글 수정 페이지입니다</h1>
          <div>
            <form id={"boardInsert"}>
              {/* 제목 영역 */}
              <label htmlFor="title" className={'form-label mt-3'}>제목</label>
              <input type="text" id="title" name={"title"} value={updateBoard.title} className={"form-control"} placeholder={'제목을 입력해주세요'} onChange={changeBoardContent}/>

              {/* 내용 영역 */}
              <label htmlFor="content" className={'form-label mt-3'}>내용</label>
              <textarea name="content" id="content" name={"content"} value={updateBoard.content} className={"form-control"} rows="10" placeholder={'내용을 입력해주세요'} onChange={changeBoardContent}></textarea>

              {/* 버튼 */}
              <div className={'text-end'}>
                <button type={"button"} className={'btn btn-dark px-3 my-3'} onClick={submitBoard}>수정하기</button>
              </div>
            </form>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Update;