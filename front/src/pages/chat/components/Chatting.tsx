import { chatMocData } from "@/moc/chat";
import Modal from "@/pages/components/ModalWrapper";
import { chat } from "@/types/chat";
import { Grid } from "antd";
import React, { useState } from "react";
import { Button, Window, WindowHeader } from "react95";

interface Chatting {
  room: chat | null;
}

const { useBreakpoint } = Grid;

const Chatting = ({ room }: Chatting) => {
  const screens = useBreakpoint();
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

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
    <div>
      <Button style={{ width: "10vw" }} onClick={openModal}>
        참여
      </Button>
      {isOpen && (
        <Modal>
          <Window
            className="window"
            style={{
              position: "absolute",
              top: screens.md ? "50%" : "0%",
              left: screens.md ? "50%" : "0%",
              width: screens.md ? "80vw" : "99vw",
              height: "60vh",
              transform: screens.md
                ? "translate(-50%, -50%)"
                : "translate(0%, 15%)",
            }}
          >
            <WindowHeader
              className="window-title"
              style={{ justifyContent: "space-between", display: "flex" }}
            >
              <span style={{ fontFamily: "dunggeunmo-bold", fontSize: "22px" }}>
                {chatMocData.map((chat, index) => {
                  let text: string = "";
                  if (chat.roomId === room?.roomId) {
                    text = chat.roomName;
                  }
                  return text;
                })}
              </span>
              <Button style={{ marginTop: "3px" }} onClick={closeModal}>
                <span
                  style={{ fontFamily: "dunggeunmo-bold", fontSize: "20px" }}
                >
                  X
                </span>
              </Button>
            </WindowHeader>
          </Window>
        </Modal>
      )}
    </div>
  );
};

export default Chatting;
