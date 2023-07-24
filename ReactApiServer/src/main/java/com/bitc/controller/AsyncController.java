package com.bitc.controller;

import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

/* 일반 controller에 ResponseBody가 추가되어있는 것 */
@CrossOrigin(origins = {"http://localhost:3000"})
@RequestMapping("/async")
@RestController
public class AsyncController {

  @RequestMapping(value = "/", method = RequestMethod.GET)
  public String index() throws Exception {
    return "index 페이지";
  }

  @RequestMapping(value = "/sendDataGet", method = RequestMethod.GET)
  public Object sendDataGet() throws Exception {

    Map<String, String> result = new HashMap<>();

    result.put("noah", "아기고영");
    result.put("yudah", "yudah");

    return result;
  }

  /* GET 방식 매개변수 받기 */
  @RequestMapping(value = "/sendDataGetParam", method = RequestMethod.GET)
  public Object sendDataGetParam(@RequestParam("idx") int idx) {
    Map<String, String > result = new HashMap<>();

    result.put("result", "success");
    result.put("data", "1");

    return result;
  }



  @RequestMapping(value = "/sendDataPost", method = RequestMethod.POST)
  public Object sendDataPost(@RequestParam("userId") String userId, @RequestParam("userPw") String userPw) throws Exception {
    Map<String , String> user = new HashMap<>();
    user.put("userId", userId);
    user.put("userPw", userPw);

    Map<String, Object> result = new HashMap<>();
    result.put("result", "success");
    result.put("data", user);

    return result;
  }

  @RequestMapping(value = "/sendDataPut", method = RequestMethod.PUT)
  public Object sendDataPut(@RequestParam("idx") int idx) throws Exception {
    Map<String, Object> result = new HashMap<>();
    result.put("result", "success");
    result.put("idx", idx);

    return result;
  }

  @RequestMapping(value = "/sendDataDelete", method = RequestMethod.DELETE)
  public Object sendDataDelete(@RequestParam("idx") int idx) throws Exception {
    Map<String, Object> result = new HashMap<>();
    result.put("result", "success");
    result.put("idx", idx);

    return result;
  }

}
