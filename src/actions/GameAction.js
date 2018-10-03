
export const toggleMode = () => ({
  type: 'TOGGLE_MODE',
});

export const reset = () => ({
  type: 'RESET'
});


export const pickWeapon = (weapon) => ({
  type: 'PICK_WEAPON',
  weapon
});