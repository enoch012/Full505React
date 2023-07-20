import React, {useState} from 'react';
import axios from "axios";

function AxiosDailyBoxOffice(props) {

  // useState 를 사용하여 화면에 출력할 데이터를 state로 등록
  const [boxOffice, setBoxOffice] = useState([]);

  // 클릭 이벤트 발생 시 동작할 함수
  const loadBoxOffice = () => {
    // axios 를 통해서 get 방식으로 비동기 통신
    axios.get('https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20230719')
      // 정상 통신 시
      .then(req => {
        // 통신 완료 후 전달받은 데이터 처리
        // 영화진흥원 open API 의 일일 박스 오피스 정보 중 영화 목록만 가져옴
        const dailyBoxOffice = req.data.boxOfficeResult.dailyBoxOfficeList;
        // setState 함수를 통해서 state 로 등록된 boxOffice 변수를 수정함
        setBoxOffice(dailyBoxOffice);
      })
      // 통신 오류 시
      .catch(err => {
        alert('통신 중 오류가 발생했습니다.');
        console.log(err);
      });
  }

  return (
    <div className={'container my-4'}>
      <div className={'row'}>
        <div className={'col-sm mx-auto'}>
          <table className={'table table-hover text-center'}>
            <thead className={'border-top border-2 border-dark'}>
              <tr>
                <th>순위</th>
                <th>제목</th>
                <th>개봉일</th>
                <th>당일 관람객</th>
                <th>누적 관람객</th>
              </tr>
            </thead>
            <tbody className={'border-bottom border-2 border-dark'}>
            {
              // ES6 의 자바스크립트 배열 관련 함수 중 map 을 사용하여 배열의 요소를 반복 출력
              boxOffice.map(item => {
                return(
                  // map 사용 시 컴포넌트에서 각각의 요소를 구분하기 위한 key 를 유일한 값으로 설정
                  // 나머지 화면 내용을 출력
                  <tr key={item.rnum}>
                    <td>{item.rank}</td>
                    <td className={'text-start'}>{item.movieNm}</td>
                    <td>{item.openDt}</td>
                    <td>{item.audiCnt}</td>
                    <td>{item.audiAcc}</td>
                  </tr>
                );
              })
            }
            </tbody>
          </table>
          <div className={'my-3 d-flex justify-content-end'}>
            <button type={'button'} className={'btn btn-dark'} onClick={loadBoxOffice}>영화 순위 조회</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AxiosDailyBoxOffice;