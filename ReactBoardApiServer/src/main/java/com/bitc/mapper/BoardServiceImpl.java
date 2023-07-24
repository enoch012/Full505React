package com.bitc.mapper;

import com.bitc.dto.BoardDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class BoardServiceImpl implements BoardService{

  private final BoardMapper boardMapper;

  @Override
  public List<BoardDto> selectBoardList() throws Exception {
    return boardMapper.selectBoardList();
  }

  @Override
  public BoardDto selectBoardDetail(int boardNum) throws Exception{
    boardMapper.visitCountUpdate(boardNum); // 조회수 업데이트
    return boardMapper.selectBoardDetail(boardNum); // 게시글 정보 리턴

  }

  @Override
  public void insertBoard(BoardDto board) throws Exception {
    boardMapper.insertBoard(board);
  }

  @Override
  public void deleteBoard(int boardNum) throws Exception {
    boardMapper.deleteBoard(boardNum);
  }

  @Override
  public void updateBoard(BoardDto updateBoard) throws Exception {
    boardMapper.updateBoard(updateBoard);
  }
}
