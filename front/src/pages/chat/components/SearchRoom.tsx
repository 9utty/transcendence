import React, { useState } from "react";
import { Button, TextInput } from "react95";
import { chatMocData } from "@/moc/chat";
import { chat } from "@/types/chat";
import { mocUserData } from "@/moc/user";
import { Room } from "@/types/roomType";

const SearchRoom = () => {
  const [input, setInput] = useState("");
  const [notFound, setNotFound] = useState(false);
  const [filteredChat, setFilteredChat] = useState<chat | null>(null);
  const [userIndex, setUserIndex] = useState<number[] | undefined>([]);
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInput(value);
    if (timer) clearTimeout(timer);

    if (value !== "") {
      const newTimer = setTimeout(() => {
        const result = chatMocData.find((chat) => chat.roomId === value);
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
      {notFound ? (
        <div style={{ fontSize: "30px", color: "red" }}>Not Found</div>
      ) : (
        filteredChat && (
          <div>
            {/* Render your new component based on the filteredChat data */}
            <p>Matching chat room found:</p>
            <p>Room ID: {filteredChat.roomId}</p>
            <p>
              Connect User:
              {userIndex &&
                userIndex
                  .map((index) => mocUserData[index].userNickName)
                  .join(", ")}
            </p>
            <p>Type: {`${Room[filteredChat.type].type}`}</p>
          </div>
        )
      )}
    </div>
  );
};

export default SearchRoom;
