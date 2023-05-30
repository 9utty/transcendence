import React, { useState } from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import tokyoDart from "react95/dist/themes/tokyoDark";
import original from "react95/dist/themes/original";
import { Layout, Grid, Row, Col } from "antd";
// UI components
import {
  MenuList,
  MenuListItem,
  Separator,
  styleReset,
  AppBar,
  Frame,
  Bar,
  Button,
} from "react95";
import Appbar from "./Appbar";
import Link from "next/link";
import FriendIcon from "../friendList/FriendIcon";
import ChatIcon from "../chat/ChatIcon";
import Game from "../game/Game";

const { useBreakpoint } = Grid;
type Props = {
  children: React.ReactNode;
};

const AppLayout = ({ children }: Props) => {
  const screens = useBreakpoint();
  const [isOpen, setIsOpen] = useState(false);

  const openBlog = () => {
    setIsOpen(true);
  };
  const closeBlog = () => {
    setIsOpen(false);
  };

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
      <div
        style={{
          width: "100vw",
          height: "100vh",
        }}
      >
        <ThemeProvider theme={original}>
          <div style={{ height: "91%" }}>
            <div style={{ top: "0px" }}>
              <Bar
                style={{
                  width: "100vw",
                  height: screens.md ? "2.5rem" : "50px",
                }}
              >
                <Button
                  onClick={openBlog}
                  style={{
                    width: "30vw",
                    height: screens.md ? "2.3rem" : "45px",
                  }}
                >
                  <div
                    style={{
                      top: "50%",
                      left: "50%",
                      width: "30vw",
                      transform: "translate(0%,0%)",
                      fontSize: screens.md ? "1.6rem" : "20px",
                      fontFamily: "dunggeunmo-bold",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    감장과 아이들
                  </div>
                </Button>
              </Bar>
            </div>
            <Row gutter={[0, 30]}>
              {Components.map(({ Component }, index) => {
                return <Component key={index} />;
              })}
            </Row>
            {children}
          </div>
          <Appbar />
        </ThemeProvider>
      </div>
    </div>
  );
};

export default AppLayout;

interface Component {
  Component: React.FunctionComponent;
}

const Components: Component[] = [
  {
    Component: () => {
      return (
        <Col xs={12} sm={8} md={4}>
          <FriendIcon />
        </Col>
      );
    },
  },
  {
    Component: () => {
      return (
        <Col xs={12} sm={8} md={4}>
          <ChatIcon />
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
