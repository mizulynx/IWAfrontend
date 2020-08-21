export class Participant{
    id: number;
    username: string;
    choice: number;
    votes: number;

    constructor(id: number, username: string, choice: number, votes: number){
        id = id;
        username = username;
        choice = choice;
        votes = votes
    }
}