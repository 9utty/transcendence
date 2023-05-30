import React, { useState } from "react";
import WindowIcon from "../globalComponents/WindowIcon";

import router from "next/router";

const FriendIcon = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
    router.push("/Page/Friend", "/Page/Friend", {
      shallow: false,
    });
  };

  return (
    <div>
      <WindowIcon
        IconName="친구목록."
        func={openModal}
        ImageUrl="https://user-images.githubusercontent.com/86397600/239874067-d60aa992-9004-4ada-8856-481f9d35a20a.png"
      />
    </div>
  );
};

export default FriendIcon;
