export const fillUnit = (health: number, currentHealth: number) => {
  if (health === currentHealth) {
    return 0;
  }
  if (currentHealth === 0) {
    return 140;
  }
  if (currentHealth / health < 0.1) {
    return 130;
  }
  if (currentHealth / health < 0.2) {
    return 120;
  }
  if (currentHealth / health < 0.25) {
    return 110;
  }
  if (currentHealth / health < 0.3) {
    return 100;
  }
  if (currentHealth / health < 0.4) {
    return 90;
  }
  if (currentHealth / health < 0.5) {
    return 80;
  }
  if (currentHealth / health < 0.55) {
    return 70;
  }
  if (currentHealth / health < 0.6) {
    return 60;
  }
  if (currentHealth / health < 0.65) {
    return 50;
  }
  if (currentHealth / health < 0.7) {
    return 40;
  }
  if (currentHealth / health < 0.8) {
    return 30;
  }
  if (currentHealth / health < 0.9) {
    return 20;
  }
  if (currentHealth / health < 0.1) {
    return 10;
  }
};
