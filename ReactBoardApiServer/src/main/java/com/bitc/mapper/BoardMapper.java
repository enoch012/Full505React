package com.bitc.mapper;

import com.bitc.dto.BoardDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface BoardMapper {
  List<BoardDto> selectBoardList() throws Exception;

  BoardDto selectBoardDetail(int boardNum) throws Exception;

  void insertBoard(BoardDto board) throws Exception;

  void deleteBoard(int boardNum) throws Exception;

  void visitCountUpdate(int boardNum) throws Exception;

  void updateBoard(BoardDto updateBoard) throws Exception;
}
