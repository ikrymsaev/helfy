class Settings {
  readonly playersCount: number;
  readonly chipsCount: number;
  constructor(playersCount: number, chipsCount: number) {
    if (playersCount > 2) throw new Error('Max player count is 2');
    if (chipsCount > 10) throw new Error('Max chips count is 6');
    this.playersCount = playersCount;
    this.chipsCount = chipsCount;
  }
}

export default Settings;