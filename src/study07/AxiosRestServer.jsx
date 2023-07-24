import React from 'react';
import axios from "axios";
import reservation from "../study05/Reservation";

function AxiosRestServer(props) {

  const sendDataGet = () => {
    axios.get('http://localhost:8080/async/sendDataGet')
      .then(res => {
        console.log('GET 방식 비동기 통신 성공');
        if(res.data.noah == "아기고영"){
          console.log(`수신된 데이터 : ${res.data.yudah}`);
        } else {
          console.log('오류가 발생했습니다.');
        }
      })
      .catch(err => {
        errorMessage('get', err);
      });
  }

  const sendDataGetParam = () => {
    axios.get('http://localhost:8080/async/sendDataGetParam', {params : {idx : 100}})
      .then(res => {
        console.log('GET Param 방식 비동기 통신 성공');
        console.log(res);
      })
      .catch(err => {
        errorMessage('getParam', err);
      });
  }

  const sendDataPost = () => {
    axios.post('http://localhost:8080/async/sendDataPost', null, {
      // 서버에서 RequestParam 으로 받을 데이터를 넣어둠
      params : {
        userId : 'testId',
        userPw : 'testPw'
      }
    })
      .then(res => {
        console.log('POST 방식 비동기 통신 성공');
        console.log(res);
      })
      .catch(err => {
        errorMessage('post', err);
      });
  }

  const sendDataPut = () => {
    axios.put('http://localhost:8080/async/sendDataPut', null, {
      params : {
        idx : 100
      }
    })
      .then(res => {
        console.log('PUT 방식으로 통신 성공');
        console.log(res);
      })
      .catch(err => {
        errorMessage('put', err);
      });
  }

  /* delete 는 중간에 data 받아주는 것이 없다 */
  const sendDataDelete = () => {
    axios.delete('http://localhost:8080/async/sendDataDelete', {params : {idx : 109}})
      .then(res => {
        console.log('DELETE 방식 통신 성공');
        console.log(res);
      })
      .catch(err => {
        errorMessage('delete', err);
      });
  }

  /* 에러 메세지용 */
  const errorMessage = (type, message) => {
    console.log(`${type} 방식 통신 중 오류가 발생했습니다.`);
    console.log(message);
  }

  return (
    <div className={'mt-5 p-5'}>
      <div className={'row'}>
        <div className={'col-sm-8 mx-auto'}>
          <h1 className={'text-center'}>Axios를 사용한 비동기 통신</h1>
          <div></div>
          <div className={'my-3 d-flex justify-content-center my-3'}>
            <button type={'button'} className={'btn btn-dark me-3'} onClick={sendDataGet}>
              GET 방식
            </button>
            <button type={'button'} className={'btn btn-dark me-3'} onClick={sendDataGetParam}>
              GET 방식(변수추가)
            </button>
            <button type={'button'} className={'btn btn-outline-dark me-3'} onClick={sendDataPost}>
              POST 방식
            </button>
            <button type={'button'} className={'btn btn-dark me-3'} onClick={sendDataPut}>
              PUT 방식
            </button>
            <button type={'button'} className={'btn btn-outline-dark me-3'} onClick={sendDataDelete}>
              DELETE 방식
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AxiosRestServer;