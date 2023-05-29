import React from "react";
import H1 from "../PostComponents/H1";
import H3 from "../PostComponents/H3";
import { Row, Col } from "antd";
import Div from "../PostComponents/Div";

interface User {
  nickName: string;
  profileIndex: number;
}

const UserInfo = ({ nickName, profileIndex }: User) => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <H1>{`${nickName}`}</H1>
        <H3>프로필 아바타위치</H3>
      </div>
      <Div />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <H1>레벨</H1>
        <H3>0lv.</H3>
      </div>
      <Div />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <H1>게임전적</H1>
        <H3>0승 0패</H3>
      </div>
    </div>
  );
};

export default UserInfo;
