import React from "react";

const students = [
  {
    id : 1,
    name : "노아"
  },
  {
    id : 2,
    name : "유다"
  },
  {
    id : 3,
    name : "노을"
  },
  {
    id : 4,
    name : "다정"
  },
];

function AttendanceBook(props) {
  return (
    // jsx에서는 일반 for문을 사용할 수 없음
    // javascript ES6 문법의 배열 함수 forEach, map()를 활용해야함
    // ul 태그의 자식 태그를 입력하는 부분에 map() 함수를 사용하여 배열 students가 가지고 있는 내용을 직접 출력
    <ul>
      {students.map((std) => {
        return <li key={std.id}>{std.name}</li>
      })}
    </ul>
  )
}

export default AttendanceBook;