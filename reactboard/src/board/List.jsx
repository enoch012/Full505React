import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import {Col, Row} from "react-bootstrap";

function List(props) {

  const [boardList, setBoardList] = useState([]);

  const boardListGet = () => {
    axios.get('http://localhost:8080/board/list')
      .then(res => {
        console.log('비동기 통신에 성공했습니다.');
        console.log(res.data.result);

        if(res.data.result == "success"){
          const getBoardList = res.data.boardList;
          setBoardList(getBoardList);
        }
      })
      .catch(err => {
        console.log('리스트 통신 오류 발생 : ' + err);
      });
  }

  /* 페이지 로드시 리스트 한번 불러오기 */
  useEffect(() => {
    boardListGet();
  }, []);

  let listPrint = "";

  /* 게시글 유무에 따라 listPrint 값을 다르게 함 */

  if(boardList.length > 0){
    listPrint = boardList.map( board => {
      return (

        <tr key={board.num}>
          <td>{board.num}</td>
          <td className={'text-start'}>
            <Link to={'/board/' + board.num}>
              {board.title}
            </Link>
          </td>
          <td>{board.postdate}</td>
          <td>{board.id}</td>
          <td>{board.visitcount}</td>
        </tr>
      );
    })
  } else {
    listPrint = <tr key={"noList"}>
      <td colSpan={5}> 게시글이 없습니다. </td>
    </tr>
  }

  /* 출력 영역 */
  return (
    <div className={'container my-4'}>
      <Row className={'justify-content-center d-flex mt-3'}>
        <Col sm={9} className={'text-center'}>
      <h1 className={'my-4'}> 게시글 목록</h1>
      {/*<button className={'btn btn-dark p-2'} onClick={boardListGet}>통신 테스트</button>*/}
      <table className={'table table-hover text-center'}>
        <thead>
          <tr>
            <td>글번호</td>
            <td>제목</td>
            <td>작성일</td>
            <td>작성자</td>
            <td>조회수</td>
          </tr>
        </thead>
        <tbody>
        { listPrint }
        </tbody>
      </table>
      <div className={'text-end'}>
        <Link to={'/board/write'} className={'btn btn-dark px-3'}>글쓰기</Link>
      </div>
        </Col>
      </Row>
    </div>
  )
}

export default List;