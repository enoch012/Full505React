package com.bitc.mapper;

import com.bitc.dto.UserDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface UserMapper {
  List<UserDto> selectUserList() throws Exception;
}
