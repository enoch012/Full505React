package com.bitc.service;

import com.bitc.dto.UserDto;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface UserService {
  // UserList 출력
  List<UserDto> selectUserList() throws Exception;
}
