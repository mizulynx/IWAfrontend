export class SignupInfo {

    username: string;
    role: string[];
    password: string;
    choice: number;
    votes: number;

    constructor(username: string, password: string) {
      this.username = username;
      this.role = ['user'];
      this.password = password;
      this.votes = 1;
      this.choice = 0;

    }
  }
