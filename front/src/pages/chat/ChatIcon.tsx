import React, { useState } from "react";
import WindowIcon from "../globalComponents/WindowIcon";
import { Grid, Row } from "antd";
import Modal from "../globalComponents/ModalWrapper";
import {
  Button,
  ScrollView,
  Toolbar,
  Window,
  WindowContent,
  WindowHeader,
  Tabs,
  Tab,
} from "react95";
import { chatMocData } from "@/moc/chat";
import SearchRoom from "./components/SearchRoom";
import ChatRoom from "./components/ChatRoomList";
import AppLayout from "../globalComponents/AppLayout";
import { useRouter } from "next/router";

const { useBreakpoint } = Grid;
const ChatIcon = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const screens = useBreakpoint();
  const [state, setState] = useState({ activeTab: 0 });
  const router = useRouter();
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

  const handleChange = (
    value: number,
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setState({ activeTab: value });
  };
  const close = () => {
    router.back();
  };
  const { activeTab } = state;

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
            <Tabs value={activeTab} onChange={handleChange}>
              <Tab value={0}>
                <span
                  style={{
                    fontFamily: "dunggeunmo-bold",
                    fontSize: "22px",
                    width: "100px",
                  }}
                >
                  목록
                </span>
              </Tab>
              <Tab value={1}>
                <span
                  style={{
                    fontFamily: "dunggeunmo-bold",
                    fontSize: "22px",
                    width: "100px",
                  }}
                >
                  찾기
                </span>
              </Tab>
            </Tabs>
            <WindowContent>
              <Row>
                <ScrollView
                  shadow={false}
                  style={{ width: "100%", height: "44vh" }}
                >
                  {activeTab === 0 && <ChatRoom />}
                  {activeTab === 1 && <SearchRoom />}
                </ScrollView>
              </Row>
            </WindowContent>
          </Window>
        </Modal>
      )}
    </div>
  );
};

export default ChatIcon;
