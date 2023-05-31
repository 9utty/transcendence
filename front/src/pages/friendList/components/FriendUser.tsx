import Profile from "@/pages/Page/Profile";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Button } from "react95";

interface User {
  userNickName: string;
  stateOn: boolean;
}

const FriendUser = ({ userNickName, stateOn }: User) => {
  const router = useRouter();

  const openProfile = () => {
    // TODO: Profile 리덕스에 Uid dispatch 해야함
    document.body.style.overflow = "hidden";
    router.push("/Page/Profile", "/Page/Profile", { shallow: false });
  };
  // TODO: 차단할때 사용할 API콜함수

  return (
    <div
      style={{
        padding: "15px",
        fontFamily: "dunggeunmo-bold",
        fontSize: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          {userNickName ? userNickName : "user1"}
          <div
            style={{
              marginRight: "8px",
              backgroundColor: stateOn ? "green" : "red",
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              marginLeft: "10px",
            }}
          ></div>
        </div>
        <div>
          <Button style={{ width: "10vw" }} onClick={openProfile}>
            <span
              style={{
                fontFamily: "dunggeunmo-bold",
                fontSize: "18px",
                width: "200px",
              }}
            >
              프로필
            </span>
          </Button>
          <Button style={{ width: "10vw" }}>
            <span
              style={{
                fontFamily: "dunggeunmo-bold",
                fontSize: "18px",
                width: "200px",
              }}
            >
              차단
            </span>
          </Button>
        </div>
      </div>
      <div
        style={{ width: "100", height: "2px", backgroundColor: "#999" }}
      ></div>
      {/* {isProfile && <Profile close={closeProfile} />} */}
    </div>
  );
};

export default FriendUser;
