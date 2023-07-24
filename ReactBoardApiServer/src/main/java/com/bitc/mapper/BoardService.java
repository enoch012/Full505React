package com.bitc.mapper;

import com.bitc.dto.BoardDto;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface BoardService {
  // 게시글 리스트 불러오기
  List<BoardDto> selectBoardList() throws Exception;

  BoardDto selectBoardDetail(int boardNum) throws Exception;

  void insertBoard(BoardDto board) throws Exception;

  void deleteBoard(int boardNum) throws Exception;

  void updateBoard(BoardDto updateBoard) throws Exception;

}
