import { chat } from "@/types/chat";

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
    connectUser: [9],
    type: 0,
  },
];
