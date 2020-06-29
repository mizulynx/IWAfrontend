export class ArtistModel {
    name: string;
    genre: string
    picturePath: string

    constructor(name: string, genre: string, picturePath: string) {
      this.name = name;
      this.genre = genre;
      this.picturePath = picturePath;
    }
  }