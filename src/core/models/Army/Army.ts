import Squad from "../Squad/Squad";

class Army {
  id: number;
  name: string;
  squads: Squad[];

  constructor(id: number, name: string, squads: Squad[]) {
    this.id = id;
    this.name = name;
    this.squads = squads;
  }
}

export default Army;