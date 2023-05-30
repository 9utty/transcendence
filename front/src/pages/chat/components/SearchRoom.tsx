import { mocUserData } from "@/moc/user";
import { Room } from "@/types/roomType";
import React, { useEffect, useState } from "react";
import { Button } from "react95";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import RootState from "@/redux/RootReducer";
import { chat } from "@/types/chat";

interface Room {
  room: chat;
}

const SearchRoom = ({ room }: Room) => {
  const router = useRouter();

  const openModal = () => {
    // 조인하기전 핸들함수
    if (room?.type === 2) {
      // 패스워드가 있는경우
      const password = prompt("비밀번호를 입력하세요:");
      if (password === room.password?.toString()) {
        // TODO: 나중에 APIServer에 암호화해서 보내고 True False를 받아야함
        router.push("/Page/Room", "/Page/Room", { shallow: true });
      } else {
        // 비밀번호를 틀렸을때
      }
    } else if (room?.type === 1 || room?.type === 0) {
      // 비밀번호가 없는경우
      router.push("/Page/Room", "/Page/Room", { shallow: true });
    }
  };

  return (
    <div
      style={{
        margin: "10px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {room.roomName.length > 0 ? (
        <div style={{ width: "70vw" }}>
          {/* Render your new component based on the filteredChat data */}
          <p>Matching chat room found:</p>
          <p>
            {"Connect User: "}
            {room.connectUser
              .map((index) => mocUserData[index].userNickName)
              .join(", ")}
          </p>
          <p>Type: {`${Room[room.type]?.type}`}</p>
        </div>
      ) : (
        <div style={{ fontSize: "30px", color: "red" }}>Not Found</div>
      )}
      <Button
        style={{
          width: "10vw",
          minWidth: "80px",
          fontFamily: "dunggeunmo-bold",
          fontSize: "22px",
        }}
        onClick={openModal}
      >
        참여
      </Button>
    </div>
  );
};

export default SearchRoom;
