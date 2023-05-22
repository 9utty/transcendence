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
} from "react95";
import FriendUser from "./components/FriendUser";
import { mocUserData } from "@/moc/user";
import BlockUser from "./components/BlockUser";

const { useBreakpoint } = Grid;

const FriendList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const screens = useBreakpoint();
  const [isBlock, setIsBlock] = useState(false);

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
            <Toolbar>
              <Button
                variant="menu"
                size="sm"
                style={{ fontFamily: "dunggeunmo-bold", fontSize: "20px" }}
                onClick={onClickFriend}
              >
                친구
              </Button>
              <Button
                variant="menu"
                size="sm"
                style={{ fontFamily: "dunggeunmo-bold", fontSize: "20px" }}
                onClick={onClickBlock}
              >
                차단
              </Button>
            </Toolbar>
            <WindowContent>
              <Row>
                <ScrollView
                  shadow={false}
                  style={{ width: "100%", height: "44vh" }}
                >
                  {isBlock
                    ? mocUserData.map((user, index) => (
                        <BlockUser
                          key={index}
                          userNickName={user.userNickName}
                        />
                      ))
                    : mocUserData.map((user, index) => (
                        <FriendUser
                          key={index}
                          userNickName={user.userNickName}
                          stateOn={user.stateOn}
                        />
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
