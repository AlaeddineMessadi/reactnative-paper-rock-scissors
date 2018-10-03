
import { modes, modeKeys } from '../constants/MODES';
import { weapons, weaponKeys } from '../constants/WEAPONS';

export const getRandomWeapon = () => {
  return weaponKeys[(weaponKeys.length * Math.random()) << 0];
};

export const chooseWinner = (weapon1, weapon2, p1, p2) => {
  if (weapon1 === weapon2) {
    this.tie = true;
    return "tie";
  }
  return weapons[weapon1].wins.some(wins => wins === weapon2) ? p1.label : p2.label;
};