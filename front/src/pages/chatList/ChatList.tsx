import React, { useState } from "react";
import WindowIcon from "../components/WindowIcon";
import { Grid } from "antd";

const { useBreakpoint } = Grid;
const ChatList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const screens = useBreakpoint();
  const openModal = () => {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  };
  return (
    <div>
      <WindowIcon
        IconName="채팅목록."
        func={openModal}
        ImageUrl="https://user-images.githubusercontent.com/86397600/239874911-135e4e97-bc7e-4b5f-b4dc-cc773ff04fb2.png"
      />
    </div>
  );
};

export default ChatList;
