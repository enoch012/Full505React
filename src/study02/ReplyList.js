import Reply from "./Reply";
import React from "react";
import reply from "./Reply";

const replys = [ // 배열 형태의 컨텐츠 모음
  {name : '메인쿤', contents : '고양이 발바닥 젤리 귀엽다'},
  {name : '노아', contents : '메인쿤 고양이는 귀여워'},
  {name : '유다', contents : '반려 고양이는 메인쿤이 제일'}
]

function ReplyList(props) {
  return (
    <div>

      {
        /* react 방식 foreach 문 하지만 foreach와 다르게 출력까지 해준다. */
        replys.map((reply) => { // 배열 출력까지 도와줌
          return (
            <Reply name={reply.name} contents={reply.contents} />
          )
        })
      }

      {/*<Reply name={replys[0].name} contents={replys[0].contents}/>
      <Reply name={"노아"} contents={"메인쿤 고양이는 귀여워"}/>
      <Reply name={"유다"} contents={"반려 고양이는 메인쿤이 제일 귀여워"}/>*/}
    </div>
  )
}

export default ReplyList;