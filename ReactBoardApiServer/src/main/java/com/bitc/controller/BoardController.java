package com.bitc.controller;

import com.bitc.dto.BoardDto;
import com.bitc.mapper.BoardService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RequiredArgsConstructor // Autowired 대신에 요즘 많이 쓴다구함
@CrossOrigin(origins = {"http://localhost:3000"})
@RestController
@RequestMapping("/board")
public class BoardController {

  private final BoardService boardService;

  // 게시글 출력 서버
  @RequestMapping(value = {"/list"}, method = RequestMethod.GET)
  public Object selectBoardList() throws Exception {
    List<BoardDto> boardList = boardService.selectBoardList();

    Map<String, Object> result = new HashMap<>();

    if (boardList.size() > 0){
      result.put("boardList", boardList);
      result.put("result", "success");
    } else {
      result.put("result", "fail");
    }

    return result;
  }

  // 게시글 상세 출력 서버
  @RequestMapping(value = {"/detail/{boardNum}"}, method = RequestMethod.GET)
  public Object selectBoardDetail(@PathVariable("boardNum") int boardNum) throws Exception {
    BoardDto boardDetail = boardService.selectBoardDetail(boardNum);

    Map<String, Object> result = new HashMap<>();

    if (boardDetail != null){
      result.put("result", "success");
      result.put("boardDetail", boardDetail);
    } else {
      result.put("result", "fail");
    }

    return result;
  }

  // 게시글 등록 서버
  /* @RequestBody 어노테이션을 입력하니 dto 로 데이터가 불러와진다 */
  @RequestMapping(value = "/write", method = RequestMethod.POST)
  public Object insertBoard(@RequestBody BoardDto board) throws Exception {

    Map<String , String > result = new HashMap<>();

    if (board != null){
      boardService.insertBoard(board);
      result.put("result", "success");
    } else {
      result.put("result", "fail");
    }

    return result;
  }

  // 게시글 수정 서버
  @RequestMapping(value = "/update", method = RequestMethod.PUT)
  public Object updateBoard(@RequestBody BoardDto updateBoard) throws Exception {

    Map<String , String > result = new HashMap<>();

    if (updateBoard != null){
      boardService.updateBoard(updateBoard);
      result.put("result", "success");
    } else {
      result.put("result", "fail");
    }

    return result;
  }


  // 게시글 삭제 서버
  @RequestMapping(value = {"/delete/{boardNum}"}, method = RequestMethod.DELETE)
  public void deleteBoard(@PathVariable("boardNum") int boardNum) throws Exception {
    boardService.deleteBoard(boardNum);
  }

}
