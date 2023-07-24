package com.bitc.service;

import com.bitc.dto.UserDto;
import com.bitc.mapper.UserMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class UserServiceImpl implements UserService{

  private final UserMapper userMapper;

  @Override
  public List<UserDto> selectUserList() throws Exception {
    return userMapper.selectUserList();
  }


}
