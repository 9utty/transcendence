import React, { useState } from "react";
import WindowIcon from "../components/WindowIcon";
import { Grid, Row } from "antd";
import Modal from "../components/ModalWrapper";
import {
  Button,
  Window,
  WindowContent,
  WindowHeader,
  ScrollView,
  Toolbar,
  Tabs,
  Tab,
} from "react95";
import FriendUser from "./components/FriendUser";
import { mocUserData } from "@/moc/user";
import BlockUser from "./components/BlockUser";

const { useBreakpoint } = Grid;

const FriendList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const screens = useBreakpoint();
  const [isBlock, setIsBlock] = useState(false);
  const [state, setState] = useState({ activeTab: 0 });

  const openModal = () => {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  };

  const onClickFriend = () => {
    setIsBlock(false);
  };

  const onClickBlock = () => {
    setIsBlock(true);
  };

  const handleChange = (
    value: number,
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setState({ activeTab: value });
  };

  const { activeTab } = state;

  return (
    <div>
      <WindowIcon
        IconName="친구목록."
        func={openModal}
        ImageUrl="https://user-images.githubusercontent.com/86397600/239874067-d60aa992-9004-4ada-8856-481f9d35a20a.png"
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
                친구목록
              </span>
              <Button style={{ marginTop: "3px" }} onClick={closeModal}>
                <span
                  style={{ fontFamily: "dunggeunmo-bold", fontSize: "20px" }}
                >
                  X
                </span>
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
                  친구
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
                  차단
                </span>
              </Tab>
              <Tab value={2}>
                <span
                  style={{
                    fontFamily: "dunggeunmo-bold",
                    fontSize: "22px",
                    width: "100px",
                  }}
                >
                  팔로우
                </span>
              </Tab>
            </Tabs>
            <WindowContent>
              <Row>
                <ScrollView
                  shadow={false}
                  style={{ width: "100%", height: "44vh" }}
                >
                  {activeTab === 0 &&
                    mocUserData.map((user, index) => (
                      <FriendUser
                        key={index}
                        userNickName={user.userNickName}
                        stateOn={user.stateOn}
                      />
                    ))}
                  {activeTab === 1 &&
                    mocUserData.map((user, index) => (
                      <BlockUser key={index} userNickName={user.userNickName} />
                    ))}
                </ScrollView>
              </Row>
            </WindowContent>
          </Window>
        </Modal>
      )}
    </div>
  );
};

export default FriendList;
