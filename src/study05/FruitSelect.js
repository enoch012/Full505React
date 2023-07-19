import React, {useState} from "react";

function FruitSelect(props) {
  const [value, setValue] = useState('수박');
  // const [value, setValue] = useState(['수박', '사과']);

  const handleChange = e => setValue(e.target.value);

  const handleSubmit = e => {
    alert(`선택한 과일 : ${value}`);
    e.preventDefault();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="sel1" className={'form-label'}>
          과일을 선택하세요 :
        </label>
        {/* html의 select는 자식 태그인 option 에 selected 속성을 추가하여 기본 값을 설정함 */}
        {/* 리액트의 제어 컴포넌트 select는 option에 selected 속성을 사용하지 않고
        대신 select 태그에 value 속성을 추가하고 state로 설정된 변수로 제어 */}
        {/* multiple 을 사용하고 싶다면 select에 multiple 속성을 true로 설정,
        기본값을 여러개 설정 시 배열로 지정 */}
        <select id="sel1" value={value} className={'form-control'} onChange={handleChange}>
          <option value="사과">사과</option>
          <option value="복숭아">복숭아</option>
          <option value="수박">수박</option>
          <option value="오렌지">오렌지</option>
          <option value="포도">포도</option>
        </select>
        <button type={'submit'} className={'btn btn-dark'}>확인</button>
      </form>
    </div>
  )
}

export default FruitSelect;