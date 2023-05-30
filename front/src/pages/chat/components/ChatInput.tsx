import React from "react";
import { Button, TextInput } from "react95";

interface Props {
  input: string;
  func: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ChatInput = ({ input, func }: Props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginLeft: "20px",
        marginRight: "20px",
      }}
    >
      <div style={{ width: "500px" }}>
        <TextInput
          value={input}
          onChange={func}
          placeholder="Input..."
          style={{ fontFamily: "dunggeunmo" }}
        />
      </div>
      <Button
        style={{
          fontFamily: "dunggeunmo-bold",
          fontSize: "20px",
          width: "100px",
        }}
      >
        보내기
      </Button>
    </div>
  );
};

export default ChatInput;
