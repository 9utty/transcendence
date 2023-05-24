import React, { useState } from "react";
import AppLayout from "./components/AppLayout";
import { Row, Col } from "antd";
import FriendList from "./friendList/FriendList";
import ChatList from "./chat/ChatList";
import Game from "./game/Game";

const Home = () => {
  return (
    <div
      style={{
        backgroundColor: "#008080",
        marginLeft: -8,
        marginRight: -3,
        marginTop: -8,
        marginBottom: -10,
        width: "100vw",
        height: "100vh",
      }}
    >
      <div>
        <AppLayout>
          <Row gutter={[0, 30]}>
            {Components.map(({ Component }, index) => {
              return <Component key={index} />;
            })}
          </Row>
        </AppLayout>
      </div>
    </div>
  );
};

export default Home;

interface Component {
  Component: React.FunctionComponent;
}

const Components: Component[] = [
  {
    Component: () => {
      return (
        <Col xs={12} sm={8} md={4}>
          <FriendList />
        </Col>
      );
    },
  },
  {
    Component: () => {
      return (
        <Col xs={12} sm={8} md={4}>
          <ChatList />
        </Col>
      );
    },
  },
  {
    Component: () => {
      return (
        <Col xs={12} sm={8} md={4}>
          <Game />
        </Col>
      );
    },
  },
];
