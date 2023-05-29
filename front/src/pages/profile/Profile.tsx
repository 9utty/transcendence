import React, { useState } from "react";
import Modal from "../components/ModalWrapper";
import H1 from "../PostComponents/H1";
import {
  Button,
  ScrollView,
  Tab,
  TabBody,
  Tabs,
  Window,
  WindowContent,
  WindowHeader,
} from "react95";
import { Grid, Row } from "antd";
import UserInfo from "./UserInfo";

interface Props {
  close: () => void;
}

const { useBreakpoint } = Grid;

const Profile = ({ close }: Props) => {
  const [state, setState] = useState({ activeTab: 0 });

  const screens = useBreakpoint();

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
              프로필
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
                  width: "100px",
                }}
              >
                유저정보
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
                게임로그
              </span>
            </Tab>
          </Tabs>
          <WindowContent>
            <Row>
              <ScrollView
                shadow={false}
                style={{ width: "100%", height: "44vh" }}
              >
                {activeTab === 0 && (
                  <UserInfo nickName="gulee" profileIndex={0} />
                )}
                {activeTab === 1 && <H1>게임로그</H1>}
              </ScrollView>
            </Row>
          </WindowContent>
        </Window>
      </Modal>
    </div>
  );
};

export default Profile;
