package com.bitc.dto;

import lombok.Data;

@Data
public class BoardDto {
  String num;
  String title;
  String content;
  String id;
  String postdate;
  String visitcount;
}
