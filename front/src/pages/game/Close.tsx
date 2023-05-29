import React, { useEffect } from "react";

interface Props {
  WinPlayerId: number;
  WinPlayerNickName: string;
  Score: number[];
}

const GameClose = ({ WinPlayerId, WinPlayerNickName, Score }: Props) => {
  useEffect(() => {
    // TODO: WinPlayerId로 승리 콜 보내기
  }, []);

  return <div>{`${WinPlayerNickName}이 승리하셨습니다.`};</div>;
};

export default GameClose;
