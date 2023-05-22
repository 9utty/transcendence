export interface chat {
  roomId: string;
  connectUser: number[];
  type: number; // 0: public, 1: private, 2: protected
  password?: number; // protected일때는 password의 유효성 검사를 해야함
}
