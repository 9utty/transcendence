import { ComponentMeta } from "@storybook/react";
import React, { useEffect, useState } from "react";
import { Bar } from "react95";
import {
  AppBar,
  Button,
  MenuList,
  MenuListItem,
  Separator,
  TextInput,
  Toolbar,
  styleReset,
} from "react95";
import styled, { createGlobalStyle } from "styled-components";
import { Grid } from "antd";
import Profile from "../profile/Profile";

interface IWrapperProps {
  screenSize: Record<string, boolean>;
}

const Wrapper = styled.div<IWrapperProps>`
  background: ${({ theme }) => theme.desktopBackground};
  font-size: ${({ screenSize }) => (screenSize.md ? "1.5rem" : "1rem")};
`;

const { useBreakpoint } = Grid;

export default function Appbar() {
  const [open, setOpen] = useState(false);
  const [isProfile, setIsProfile] = useState(false);
  const screens = useBreakpoint();
  let textSize;

  const openProfile = () => {
    setIsProfile(true);
  };

  const closeProfile = () => {
    setIsProfile(false);
  };

  return (
    <>
      <Wrapper screenSize={screens}>
        <div>
          <Bar
            style={{
              width: "100vw",
              height: screens.md ? "100%" : "100%",
            }}
          >
            <Toolbar style={{ justifyContent: "space-between" }}>
              <div style={{ position: "relative", display: "inline-block" }}>
                <Button
                  onClick={() => setOpen(!open)}
                  active={open}
                  style={{
                    fontWeight: "bold",
                    fontFamily: "dunggeunmo-bold",
                    height: screens.md ? "2.rem" : "40px",
                    width: screens.md ? "6rem" : "90px",
                    fontSize: screens.md ? "1.2rem" : "19px",
                    marginBottom: "20px",
                  }}
                >
                  <img
                    src={
                      "https://user-images.githubusercontent.com/86397600/236210202-560b7128-fa5a-4fdd-b746-f3c304c977bd.png"
                    }
                    style={{
                      paddingRight: "5px",
                      height: screens.md ? "1.6rem" : "25px",
                    }}
                  />
                  Start
                </Button>
                {open && (
                  <MenuList
                    style={{
                      position: "absolute",
                      left: "0",
                      bottom: "100%",
                      width: "30vw",
                    }}
                    onClick={() => setOpen(false)}
                  >
                    <MenuListItem onClick={openProfile}>
                      <span role="img" aria-label="👨‍💻">
                        👨‍💻
                      </span>
                      <div style={{ fontFamily: "dunggeunmo-bold" }}>
                        Profile?
                      </div>
                    </MenuListItem>
                    <MenuListItem
                      onClick={() =>
                        (window.location.href = "https://github.com/9utty")
                      }
                    >
                      <span role="img" aria-label="📁">
                        📁
                      </span>
                      <div
                        style={{
                          fontFamily: "dunggeunmo-bold",
                        }}
                      >
                        GitHub?
                      </div>
                    </MenuListItem>
                    <Separator />
                    <MenuListItem>
                      <span role="img" aria-label="🔙">
                        🔙
                      </span>
                      <div style={{ fontFamily: "dunggeunmo-bold" }}>
                        Login?
                      </div>
                    </MenuListItem>
                  </MenuList>
                )}
              </div>
            </Toolbar>
          </Bar>
          {isProfile && <Profile close={closeProfile} />}
        </div>
      </Wrapper>
    </>
  );
}

Appbar.story = {
  name: "default",
};
