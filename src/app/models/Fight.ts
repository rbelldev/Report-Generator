export class Fight {

  public ID : number;
  public StartTime: number;
  public EndTime: number;
  public BossId: number;
  public RaidSize: number;
  public Killed: boolean;
  public BossPercentage: number;
  public FightPercentage: number;
  public Name: string;
  public Difficulty: number;
  public Deaths: object = {};

  constructor(fightData) {
    this.ID = fightData['id'];
    this.StartTime = fightData['start_time'];
    this.EndTime = fightData['end_time'];
    this.BossId = fightData['boss'];
    this.RaidSize = fightData['size'];
    this.Killed = fightData['kill'];
    this.BossPercentage = fightData['bossPercentage'];
    this.FightPercentage = fightData['fightPercentage'];
    this.Name = fightData['name'];
    this.Difficulty = fightData['difficulty'];
  }
}
