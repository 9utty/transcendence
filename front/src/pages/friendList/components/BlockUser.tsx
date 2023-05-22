import React from "react";
import { Button } from "react95";

interface User {
  userNickName: string;
}

const BlockUser = ({ userNickName }: User) => {
  return (
    <div
      style={{
        padding: "15px",
        fontFamily: "dunggeunmo-bold",
        fontSize: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          {userNickName ? userNickName : "user1"}
        </div>
        <Button style={{ width: "10vw" }}>해제</Button>
      </div>
      <div
        style={{ width: "100", height: "2px", backgroundColor: "#999" }}
      ></div>
    </div>
  );
};

export default BlockUser;
