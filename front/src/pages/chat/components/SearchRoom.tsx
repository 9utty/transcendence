import React, { useState } from "react";
import { Button, TextInput } from "react95";
import { chatMocData } from "@/moc/chat";
import { chat } from "@/types/chat";
import { mocUserData } from "@/moc/user";
import { Room } from "@/types/roomType";
import Chatting from "./Chatting";

const SearchRoom = () => {
  const [input, setInput] = useState("");
  const [filteredChat, setFilteredChat] = useState<chat>();
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInput(value);
    if (timer) clearTimeout(timer);

    if (value !== "") {
      const newTimer = setTimeout(() => {
        const result = chatMocData.find((chat) => chat.roomName === value);
        setFilteredChat(result);
      }, 500);
      setTimer(newTimer);
    }
  };

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
      <Chatting room={filteredChat} />
    </div>
  );
};

export default SearchRoom;
