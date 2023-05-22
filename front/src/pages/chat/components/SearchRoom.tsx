import React, { useState } from "react";
import { Button, TextInput } from "react95";
import { chatMocData } from "@/moc/chat";
import { chat } from "@/types/chat";

const SearchRoom = () => {
  const [input, setInput] = useState("");
  const [filteredChat, setFilteredChat] = useState<chat | null>(null);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInput(value);

    const result = chatMocData.find((chat) => chat.roomId === value);
    setFilteredChat(result || null);
  };

  const handleJoin = () => {
    // Handle the join functionality based on the filteredChat data
    if (filteredChat?.type === 2) {
      // Password validation for protected chat room
      const password = prompt("Enter the password:");
      if (password === filteredChat.password?.toString()) {
        // Proceed with joining the chat room
        console.log("Successfully joined the chat room.");
      } else {
        // Password incorrect
        console.log("Incorrect password. Cannot join the chat room.");
      }
    } else {
      // Proceed with joining the chat room
      console.log("Successfully joined the chat room.");
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
        <Button style={{ width: "10vw" }} onClick={handleJoin}>
          참여
        </Button>
      </div>
      {filteredChat && (
        <div>
          {/* Render your new component based on the filteredChat data */}
          <p>Matching chat room found:</p>
          <p>Room ID: {filteredChat.roomId}</p>
          <p>Connect User: {filteredChat.connectUser.join(", ")}</p>
          <p>Type: {filteredChat.type}</p>
        </div>
      )}
    </div>
  );
};

export default SearchRoom;
