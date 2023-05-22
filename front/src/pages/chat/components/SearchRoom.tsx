import React, { useState } from "react";
import { Button, TextInput } from "react95";
import { chatMocData } from "@/moc/chat";
import { chat } from "@/types/chat";
import { mocUserData } from "@/moc/user";
import { Room } from "@/types/roomType";
import Chatting from "./Chatting";

const SearchRoom = () => {
  const [input, setInput] = useState("");
  const [notFound, setNotFound] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [filteredChat, setFilteredChat] = useState<chat | null>(null);
  const [userIndex, setUserIndex] = useState<number[] | undefined>([]);
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInput(value);
    if (timer) clearTimeout(timer);

    if (value !== "") {
      const newTimer = setTimeout(() => {
        const result = chatMocData.find((chat) => chat.roomName === value);
        if (!result) {
          setNotFound(true);
        } else {
          setNotFound(false);
        }
        setUserIndex(result?.connectUser);
        setFilteredChat(result || null);
      }, 500);
      setTimer(newTimer);
    }
  };

  // const handleJoin = () => {
  //   // 조인하기전 핸들함수
  //   if (filteredChat?.type === 2) {
  //     // 패스워드가 있는경우
  //     const password = prompt("Enter the password:");
  //     if (password === filteredChat.password?.toString()) {
  //       // TODO: 나중에 APIServer에 암호화해서 보내고 True False를 받아야함
  //       setIsOpen(true);
  //     } else {
  //       // 비밀번호를 틀렸을때
  //       setIsOpen(false);
  //       console.log("Incorrect password. Cannot join the chat room.");
  //     }
  //   } else if (filteredChat?.type === 1 || filteredChat?.type === 0) {
  //     // 비밀번호가 없는경우
  //     setIsOpen(true);
  //     console.log("Successfully joined the chat room.");
  //   }
  // };

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
          <TextInput
            value={input}
            onChange={handleSearch}
            placeholder="Search..."
            style={{ fontFamily: "dunggeunmo" }}
          />
        </div>
      </div>
      {notFound ? (
        <div style={{ fontSize: "30px", color: "red" }}>Not Found</div>
      ) : (
        filteredChat && (
          <div>
            {/* Render your new component based on the filteredChat data */}
            <p>Matching chat room found:</p>
            <p>Room ID: {filteredChat.roomId}</p>
            <p>
              {"Connect User: "}
              {userIndex &&
                userIndex
                  .map((index) => mocUserData[index].userNickName)
                  .join(", ")}
            </p>
            <p>Type: {`${Room[filteredChat.type].type}`}</p>
          </div>
        )
      )}
      <Chatting room={filteredChat} />
    </div>
  );
};

export default SearchRoom;
