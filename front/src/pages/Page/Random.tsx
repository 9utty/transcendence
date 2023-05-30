import React from "react";
import AppLayout from "../globalComponents/AppLayout";
import MyModal from "../globalComponents/MyModal";
import { useRouter } from "next/router";
import { WindowContent } from "react95";

const Random = () => {
  const router = useRouter();

  const close = () => {
    router.back();
  };

  return (
    <AppLayout>
      <MyModal hName="랜덤매칭" close={close}>
        <WindowContent></WindowContent>
      </MyModal>
    </AppLayout>
  );
};

export default Random;
