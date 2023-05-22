import React, { useState } from "react";
import WindowIcon from "../components/WindowIcon";
import { Grid, Row } from "antd";
import Modal from "../components/ModalWrapper";
import {
  Button,
  ScrollView,
  Toolbar,
  Window,
  WindowContent,
  WindowHeader,
} from "react95";
import { chatMocData } from "@/moc/chat";
import SearchRoom from "../chatRoom/SearchRoom";
import ChatRoom from "../chatRoom/ChatRoom";

const { useBreakpoint } = Grid;
const ChatList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const screens = useBreakpoint();

  const openModal = () => {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  };

  const onClickSearch = () => {
    setIsSearch(true);
  };

  const onClickChat = () => {
    setIsSearch(false);
  };

  return (
    <div>
      <WindowIcon
        IconName="채팅목록."
        func={openModal}
        ImageUrl="https://user-images.githubusercontent.com/86397600/239874911-135e4e97-bc7e-4b5f-b4dc-cc773ff04fb2.png"
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
                채팅목록
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
                목록
              </Button>
              <Button
                variant="menu"
                size="sm"
                style={{ fontFamily: "dunggeunmo-bold", fontSize: "20px" }}
                onClick={onClickSearch}
              >
                찾기
              </Button>
            </Toolbar>
            <WindowContent>
              <Row>
                <ScrollView
                  shadow={false}
                  style={{ width: "100%", height: "44vh" }}
                >
                  {isSearch ? <SearchRoom /> : <ChatRoom />}
                </ScrollView>
              </Row>
            </WindowContent>
          </Window>
        </Modal>
      )}
    </div>
  );
};

export default ChatList;
