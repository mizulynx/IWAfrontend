export class Room{
  id: number;
  capacity: number;
  user_id: number;
  constructor(capacity: number, user_id: number) {
    this.capacity = capacity;
    this.user_id = user_id;
  }

}
