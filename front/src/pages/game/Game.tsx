import React, { useState } from "react";
import WindowIcon from "../globalComponents/WindowIcon";
import Modal from "../globalComponents/ModalWrapper";
import { Button, Window, WindowContent, WindowHeader } from "react95";
import { Grid } from "antd";
import InGame from "./InGame";

const { useBreakpoint } = Grid;

const Game = () => {
  const [isOpen, setIsOpen] = useState(false);
  const screens = useBreakpoint();

  const openModal = () => {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <div>
      <WindowIcon
        IconName="게임(임시)."
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
                게임
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
              <InGame />
            </WindowContent>
          </Window>
        </Modal>
      )}
    </div>
  );
};

export default Game;
