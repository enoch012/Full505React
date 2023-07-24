import React, {useEffect, useState} from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {Col, Row} from "react-bootstrap";

function Detail(props) {

  const {num} = useParams();
  /*const boardNum = parseInt(num);*/

  const [boardDetail, setBoardDetail] = useState({});
  const navi = useNavigate();

  const getBoardDetail = (boardNum) => {
    axios.get('http://localhost:8080/board/detail/'+ num)
      .then(res => {
        console.log("게시글 상세 비동기 통신 성공");
        console.log(res.data.result);

        setBoardDetail(res.data.boardDetail);
      })
      .catch(err => {
        console.log("detail 통신 오류 : " + err);
      });
  };
  
  /* 게시글 삭제*/
  const deleteBoard = (boardNum) => {
    axios.delete('http://localhost:8080/board/delete/' + num)
      .then(res => {
        console.log("게시글 삭제 비동기 통신 성공");
        alert("게시글이 삭제 되엇습니다.");
        navi("/board/list");
      })
      .catch(err => {
        console.log("delete 통신 오류 : " + err);
      });
  };

  /* 페이지 로드시 자동으로 해당 게시글 정보 불러오기 */
  useEffect(() => {
    getBoardDetail();
  }, []);


  return (
    <div className={'container my-4'}>
      {/*<button className={'btn btn-dark p-2'} onClick={getBoardDetail}>통신 테스트</button>*/}
      <Row className={'justify-content-center d-flex'}>
        <Col sm={9} className={'text-center'}>
          <h1>{boardDetail.title}</h1>
          <div>
            <span>게시글 번호 : {boardDetail.num}</span>
            <span className={'mx-3'}>/</span>
            <span>작성자 : {boardDetail.id}</span>
            <span className={'mx-3'}>/</span>
            <span>작성일 : {boardDetail.postdate}</span>
            <span className={'mx-3'}>/</span>
            <span>조회수 : {boardDetail.visitcount}</span>
          </div>
          <div className={'content-area'}>
            {boardDetail.content}
          </div>
        </Col>
      </Row>
      
      {/* 버튼 모음 나중에 따로 분리하면 좋을듯 */}
      <Row className={'justify-content-center d-flex'}>
        <Col sm={9} className={'my-3 justify-content-between d-flex'}>
          <div>
            <Link to={'/board/list'} className={'btn btn-dark px-3'}>목록</Link>
          </div>
          <div>
            <Link to={`/board/update/${boardDetail.num}`} className={'btn btn-dark px-3 me-2'}>수정</Link>
            <button className={'btn btn-dark px-3'} onClick={deleteBoard}>삭제</button>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Detail;