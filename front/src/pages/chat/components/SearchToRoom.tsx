import { mocUserData } from "@/moc/user";
import { chat } from "@/types/chat";
import { Room } from "@/types/roomType";
import React, { useState } from "react";
import { Button } from "react95";
import ChatRoom from "./ChatRoom";

interface Props {
  room: chat | undefined;
}

const SearchToRoom = ({ room }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    // 조인하기전 핸들함수
    if (room?.type === 2) {
      // 패스워드가 있는경우
      const password = prompt("비밀번호를 입력하세요:");
      if (password === room.password?.toString()) {
        // TODO: 나중에 APIServer에 암호화해서 보내고 True False를 받아야함
        setIsOpen(true);
      } else {
        // 비밀번호를 틀렸을때
        setIsOpen(false);
      }
    } else if (room?.type === 1 || room?.type === 0) {
      // 비밀번호가 없는경우
      setIsOpen(true);
    } else {
      setIsOpen(false);
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
      {room ? (
        <div style={{ width: "70vw" }}>
          {/* Render your new component based on the filteredChat data */}
          <p>Matching chat room found:</p>
          <p>
            {"Connect User: "}
            {room.connectUser
              .map((index) => mocUserData[index].userNickName)
              .join(", ")}
          </p>
          <p>Type: {`${Room[room.type].type}`}</p>
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
      {isOpen && <ChatRoom room={room} close={closeModal} />}
    </div>
  );
};

export default SearchToRoom;
