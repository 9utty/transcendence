import React, { useState } from "react";
import Modal from "../globalComponents/ModalWrapper";
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
import MyModal from "../globalComponents/MyModal";
import AppLayout from "../globalComponents/AppLayout";
import { useRouter } from "next/router";

const { useBreakpoint } = Grid;

const Profile = () => {
  const [state, setState] = useState({ activeTab: 0 });
  const router = useRouter();
  const screens = useBreakpoint();

  const handleChange = (
    value: number,
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setState({ activeTab: value });
  };
  const { activeTab } = state;

  const close = () => {
    router.back();
  };

  return (
    <AppLayout>
      <MyModal hName="프로필" close={close}>
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
      </MyModal>
    </AppLayout>
  );
};

export default Profile;
