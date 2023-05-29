import React, { useState } from "react";
import WindowIcon from "../../components/WindowIcon";
import { Grid, Row } from "antd";
import Modal from "../../components/ModalWrapper";
import {
  Button,
  ScrollView,
  Toolbar,
  Window,
  WindowContent,
  WindowHeader,
} from "react95";
import Chatting from "./SearchToRoom";
import UserList from "./UserList";

interface Props {
  ChatRoomName: string;
  userCount: number;
  isPS: boolean;
}

const { useBreakpoint } = Grid;

const Chat = ({ ChatRoomName, userCount, isPS }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isUser, setIsUser] = useState(false);
  const screens = useBreakpoint();

  const openModal = () => {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  };

  const onClickUser = () => {
    setIsUser(true);
  };

  const onClickChat = () => {
    setIsUser(false);
  };

  return (
    <div>
      <WindowIcon
        IconName={ChatRoomName}
        func={openModal}
        ImageUrl={
          isPS
            ? "https://user-images.githubusercontent.com/86397600/239898237-c4fa07e3-dd6a-4054-b140-0f46dc78259d.png"
            : "https://user-images.githubusercontent.com/86397600/239898239-397e4a7c-7ea1-446d-8af6-30f34f8fccab.png"
        }
      />
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
                {`${ChatRoomName}. ${userCount}`}
              </span>
              <Button style={{ marginTop: "3px" }} onClick={closeModal}>
                <span
                  style={{ fontFamily: "dunggeunmo-bold", fontSize: "20px" }}
                >
                  X
                </span>{" "}
              </Button>
            </WindowHeader>
            <Toolbar>
              <Button
                variant="menu"
                size="sm"
                style={{ fontFamily: "dunggeunmo-bold", fontSize: "20px" }}
                onClick={onClickChat}
              >
                채팅
              </Button>
              <Button
                variant="menu"
                size="sm"
                style={{ fontFamily: "dunggeunmo-bold", fontSize: "20px" }}
                onClick={onClickUser}
              >
                유저
              </Button>
            </Toolbar>
            <WindowContent>
              <Row>
                <ScrollView
                  shadow={false}
                  style={{ width: "100%", height: "44vh" }}
                >
                  {isUser ? <Chatting /> : <UserList />}
                </ScrollView>
              </Row>
            </WindowContent>
          </Window>
        </Modal>
      )}
    </div>
  );
};

export default Chat;
