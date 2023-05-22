interface chat {
  roomId: string;
  connectUser: number[];
  type: number; // 0: public, 1: private, 2: protected
  password?: number; // protected일때는 password의 유효성 검사를 해야함
}

export const chatMocData: chat[] = [
  {
    roomId: "room1",
    connectUser: [1, 2, 3],
    type: 0,
  },
  {
    roomId: "room2",
    connectUser: [4, 5],
    type: 1,
  },
  {
    roomId: "room3",
    connectUser: [6],
    type: 0,
  },
  {
    roomId: "room4",
    connectUser: [7, 8, 9, 10],
    type: 2,
    password: 1234,
  },
  {
    roomId: "room5",
    connectUser: [11, 12, 13],
    type: 1,
  },
  {
    roomId: "room6",
    connectUser: [14],
    type: 0,
  },
];
