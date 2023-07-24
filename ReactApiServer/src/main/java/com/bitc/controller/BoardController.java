package com.bitc.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/* 일반 controller에 ResponseBody가 추가되어있는 것 */
@CrossOrigin(origins = {"http://localhost:3000"})
@RequiredArgsConstructor // Autowired 대신에 요즘 많이 쓴다구함
@RequestMapping("/board")
@RestController
public class BoardController {

  // 게시글 리스트 나오게 하기


}
