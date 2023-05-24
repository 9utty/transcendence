import { chatMocData } from "@/moc/chat";
import { mocContentData } from "@/moc/chatContent";
import { mocUserData } from "@/moc/user";
import Modal from "@/pages/components/ModalWrapper";
import Spacer from "@/pages/components/Spacer";
import { chat } from "@/types/chat";
import { Room } from "@/types/roomType";
import { Grid, Row, Image } from "antd";
import React, { useState } from "react";
import {
  Button,
  MenuList,
  MenuListItem,
  ScrollView,
  TextInput,
  Window,
  WindowContent,
  WindowHeader,
} from "react95";
import MessageCard from "./MessageCard";

interface Chatting {
  room: chat | undefined;
}

const { useBreakpoint } = Grid;

const Chatting = ({ room }: Chatting) => {
  const screens = useBreakpoint();
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isDm, setIsDm] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const dm = value.includes("/w");
    if (dm === true) {
      setIsDm(true);
    } else {
      setIsDm(false);
    }
    setInput(value);
  };

  return (
    <div
      style={{
        margin: "10px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {room ? (
        <div style={{ width: "70vw" }}>
          {/* Render your new component based on the filteredChat data */}
          <p>Matching chat room found:</p>
          <p>
            {"Connect User: "}
            {room.connectUser
              .map((index) => mocUserData[index].userNickName)
              .join(", ")}
          </p>
          <p>Type: {`${Room[room.type].type}`}</p>
        </div>
      ) : (
        <div style={{ fontSize: "30px", color: "red" }}>Not Found</div>
      )}
      <Button style={{ width: "10vw", minWidth: "80px" }} onClick={openModal}>
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
                {chatMocData.map((chat) => {
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
            <WindowContent>
              <Row>
                <ScrollView
                  shadow={false}
                  style={{ width: "100%", height: "44vh" }}
                >
                  {menuOpen && (
                    <MenuList
                      style={{
                        position: "absolute",
                        right: "0",
                        top: "0",
                        marginRight: "30px",
                        justifyContent: "flex-end",
                        width: "30vw",
                        height: "90%",
                        fontFamily: "dunggeunmo-bold",
                      }}
                    >
                      <ScrollView style={{ width: "100%", height: "100%" }}>
                        {room?.connectUser.map((index) => {
                          return (
                            <div key={index}>
                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "row",
                                  justifyContent: "space-between",
                                  alignItems: "center",
                                }}
                              >
                                {mocUserData[index].userNickName}
                                <Button>게임하기</Button>
                              </div>
                              <div
                                style={{
                                  width: "100",
                                  height: "2px",
                                  backgroundColor: "#999",
                                  marginBottom: "5px",
                                }}
                              />
                            </div>
                          );
                        })}
                      </ScrollView>
                    </MenuList>
                  )}
                  {mocContentData.map((data, index) => {
                    return (
                      <div key={index} style={{}}>
                        <MessageCard Data={data} />
                      </div>
                    );
                  })}
                </ScrollView>
              </Row>
            </WindowContent>
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
              <TextInput
                value={input}
                onChange={handleInput}
                placeholder="Input..."
                style={{ fontFamily: "dunggeunmo" }}
              />
              <Button
                style={{ display: "flex-end", flexDirection: "row" }}
                onClick={() => setMenuOpen(!menuOpen)}
                active={menuOpen}
              >
                <span>{`유저목록 (${room?.connectUser.length})`}</span>
              </Button>
            </div>
          </Window>
        </Modal>
      )}
    </div>
  );
};

export default Chatting;
