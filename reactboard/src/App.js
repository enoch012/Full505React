import './App.css';
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './style.css';

import List from "./board/List";
import Detail from "./board/Detail";
import Write from "./board/Write";
import Update from "./board/Update"; // 부트스트랩이랑 추가 css 파일

function App(props) {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<List />} />
          <Route path={'/board'}>
            <Route index element={<List />}></Route>
            <Route path={"list"} element={<List />} />
            {/* 리스트 클릭시 해당 게시글 페이지로 넘어가게 */}
            <Route path={":num"} element={<Detail />} />
            <Route path={"write"} element={<Write />} />
            <Route path={"update/:num"} element={<Update />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
