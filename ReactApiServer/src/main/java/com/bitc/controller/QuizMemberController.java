package com.bitc.controller;

import com.bitc.dto.UserDto;
import com.bitc.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/* 일반 controller 에 ResponseBody 가 추가되어있는 것 */
@RequiredArgsConstructor // Autowired 대신에 요즘 많이 쓴다구함
@CrossOrigin(origins = {"http://localhost:3000"})
@RequestMapping("/user")
@RestController
public class QuizMemberController {

  private final UserService userService;

  /* 유저 리스트 비동기 출력 */
  @RequestMapping(value = {"/list"}, method = RequestMethod.GET)
  public Object userList() throws Exception {
    List<UserDto> userList = userService.selectUserList();
    // userId, userPw, userName, userEmail

    Map<String, Object> result = new HashMap<>();

    if(userList.size() >0){
      result.put("userList", userList);
    }

    return result;
  }

  @RequestMapping(value = "/add", method = RequestMethod.POST)
  public Object userAdd() throws Exception {
    Map<String , Object> result = new HashMap<>();

    return result;
  }

}
