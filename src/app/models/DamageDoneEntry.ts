export class DamageDoneEntry {

  public Class: string;
  public ItemLevel: number;
  public TotalDamage: number;

  constructor(damageDoneData: object) {
    this.Class = damageDoneData['type'];
    this.ItemLevel = damageDoneData['itemLevel'];
    this.TotalDamage = damageDoneData['total'];
  }
}
