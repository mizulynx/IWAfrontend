export class Participant {
    id: number;
    username: string;
    choice: number;
    votes: number;
    constructor(id: number, username: string, choice: number, votes: number ) {
      this.username = username;
      this.id = id;
      this.choice = choice;
      this. votes = votes
    }
  }