type TShooting = { range: number, accuracy: number };
type TMagic = { range: number, power: number, damage: number };

type TStats = {
  attack: number,
  protection: number,
  health: number,
  shooting: TShooting | null,
  magic: TMagic | null,
}

interface ICharacterCard {
  id: number,
  name: string,
  squad_id: number,
  stats: TStats,
}

type TSquad = {
  squad_id: number,
  name: string,
  color: string,
  characters: Map<ICharacterCard['id'], ICharacterCard>
}

interface IArmyMap {
  name: string;
  squad_ids: number[];
}
interface ISquadMap {
  name: string;
  color: string;
  character_ids: number[];
}
interface ICharMap {
  name: string;
  stats: TStats;
}


export type { TShooting, TSquad, ICharacterCard, TStats, IArmyMap, ISquadMap, ICharMap };