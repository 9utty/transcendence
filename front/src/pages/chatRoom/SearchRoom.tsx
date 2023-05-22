import React, { useState } from "react";
import { Button, TextInput } from "react95";

const SearchRoom = () => {
  const [input, setInput] = useState("");

  const handleSearch = (event: any) => {
    const value = event.target.value;
    setInput(value);
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
        <Button style={{ width: "10vw" }}>참여</Button>
      </div>
    </div>
  );
};

export default SearchRoom;
