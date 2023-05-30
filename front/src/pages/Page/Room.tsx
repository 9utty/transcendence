import { chatMocData } from "@/moc/chat";
import { mocContentData } from "@/moc/chatContent";
import Modal from "@/pages/globalComponents/ModalWrapper";
import { chat } from "@/types/chat";
import { Grid, Row } from "antd";
import React, { useEffect, useRef, useState } from "react";
import {
  WindowHeader,
  Window,
  Button,
  WindowContent,
  ScrollView,
  TextInput,
  Tabs,
  Tab,
} from "react95";
import MessageCard from "../chat/components/MessageCard";
import { mocUserData } from "@/moc/user";
import GameMode from "@/pages/game/GameMode";
import ChatInput from "../chat/components/ChatInput";
import { useSelector } from "react-redux";
import RootState from "@/redux/RootReducer";

const { useBreakpoint } = Grid;

const ChatRoom = () => {
  const [input, setInput] = useState("");
  const [isGameMode, setIsGameMode] = useState(false);
  const [isNormal, setIsNormal] = useState(true);
  const [isDm, setIsDm] = useState(false);
  const [state, setState] = useState({ activeTab: 0 });

  const room = useSelector((state: RootState) => state.chat.room);

  const screens = useBreakpoint();
  const scrollBottomRef = useRef<HTMLDivElement>(null); // 참조 생성

  // TODO: 서버와 연결시 여기에서 다시 ChatRoom 최신정보 가져오기

  useEffect(() => {
    if (scrollBottomRef.current) {
      scrollBottomRef.current.scrollIntoView({ behavior: "smooth" }); // 참조된 요소가 보이도록 스크롤
    }
  }, [scrollBottomRef]); // mocContentData가 변경될 때마다 실행

  const openGameMode = () => {
    setIsGameMode(true);
  };

  const closeGameMode = () => {
    setIsGameMode(false);
  };

  const handleGameMode = (value: boolean) => {
    setIsNormal(value);
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

  const handleChange = (
    value: number,
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setState({ activeTab: value });
  };

  const { activeTab } = state;

  return (
    <div>
      <Modal>
        <Window
          className="window"
          style={{
            position: "absolute",
            top: screens.md ? "50%" : "0%",
            left: screens.md ? "50%" : "0%",
            width: "700px",
            height: "500px",
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
            <Button style={{ marginTop: "3px" }} onClick={close}>
              <span style={{ fontFamily: "dunggeunmo-bold", fontSize: "20px" }}>
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
                  width: "200px",
                }}
              >
                채팅로그
              </span>
            </Tab>
            <Tab value={2}>
              <span
                style={{
                  fontFamily: "dunggeunmo-bold",
                  fontSize: "22px",
                  width: "200px",
                }}
              >
                {`유저목록 (${room?.connectUser.length})`}
              </span>
            </Tab>
          </Tabs>
          <WindowContent>
            <Row>
              <ScrollView
                shadow={false}
                style={{ width: "100%", height: "330px" }}
              >
                {activeTab === 0 &&
                  mocContentData.map((data, index) => {
                    return (
                      <div key={index} style={{}}>
                        <MessageCard Data={data} />
                      </div>
                    );
                  })}
                {activeTab === 1 &&
                  room?.connectUser.map((index) => {
                    return (
                      <div key={index}>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            fontFamily: "dunggeunmo-bold",
                            fontSize: "20px",
                          }}
                        >
                          {mocUserData[index].userNickName}
                          <Button
                            style={{
                              fontFamily: "dunggeunmo-bold",
                              fontSize: "17px",
                            }}
                            onClick={openGameMode}
                          >
                            게임하기
                          </Button>
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
                <div ref={scrollBottomRef} />
              </ScrollView>
            </Row>
          </WindowContent>
          <ChatInput input={input} func={handleInput} />
        </Window>
      </Modal>
      {isGameMode && (
        <GameMode close={closeGameMode} gameMode={handleGameMode} />
      )}
    </div>
  );
};

export default ChatRoom;
