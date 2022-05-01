import { Unit } from "../classes/Unit";

export const canAttacking = (
  unit: Unit,
  firstTeam: Unit[] | undefined,
  secondTeam: Unit[] | undefined
) => {
  const teamArray = unit.team ? firstTeam : secondTeam;
  const teamArrayFriend = unit.team ? secondTeam : firstTeam;
  switch (unit.typeAction) {
    case "range":
      teamArray?.forEach((unit) => {
        if (unit.currentHealth > 0) {
          unit.canAttacked = true;
        }
      });
      break;
    case "mage":
      teamArray?.forEach((unit) => {
        if (unit.currentHealth > 0) {
          unit.canAttacked = true;
        }
      });
      break;
    case "heal":
      teamArrayFriend?.forEach((unit) => {
        if (unit.currentHealth > 0) {
          unit.canAttacked = true;
        }
      });
      break;
    case "paralyzer":
      teamArray?.forEach((unit) => {
        if (unit.currentHealth > 0) {
          unit.canAttacked = true;
        }
      });
      break;
    case "melee":
      if (
        teamArray !== undefined &&
        firstTeam !== undefined &&
        secondTeam !== undefined
      )
        if (unit.team === 0) {
          const index = firstTeam?.findIndex(
            (activeUnit) => activeUnit === unit
          );
          if (index === undefined) {
            break;
          }
          if (index === 3) {
            if (
              teamArray[0]?.currentHealth !== 0 &&
              teamArray[1].currentHealth !== 0
            ) {
              for (let i = 0; i < 2; i++) {
                teamArray[i]!.canAttacked = true;
              }
            } else if (
              teamArray[0]?.currentHealth === 0 &&
              teamArray[1].currentHealth === 0
            ) {
              teamArray[2].canAttacked = true;
            }
          }
          if (index === 4) {
            for (let i = 0; i < 3; i++) {
              teamArray[i].canAttacked = true;
            }
          }
          if (index === 5) {
            if (
              teamArray[2]?.currentHealth !== 0 &&
              teamArray[1].currentHealth !== 0
            ) {
              for (let i = 1; i < 3; i++) {
                teamArray[i]!.canAttacked = true;
              }
            } else if (
              teamArray[2]?.currentHealth === 0 &&
              teamArray[1].currentHealth === 0
            ) {
              teamArray[0].canAttacked = true;
            }
          }
          if (index === 0) {
            if (firstTeam[3].currentHealth === 0) {
              for (let i = 0; i < 3; i++) {
                if (teamArray[i].currentHealth !== 0) {
                  teamArray[i].canAttacked = true;
                }
              }
            }
          }
          if (index === 1) {
            if (firstTeam[4].currentHealth === 0) {
              for (let i = 0; i < 3; i++) {
                if (teamArray[i].currentHealth !== 0) {
                  teamArray[i].canAttacked = true;
                }
              }
            }
          }
          if (index === 2) {
            if (firstTeam[5].currentHealth === 0) {
              for (let i = 0; i < 3; i++) {
                if (teamArray[i].currentHealth !== 0) {
                  teamArray[i].canAttacked = true;
                }
              }
            }
          }
          teamArray.forEach((unit) => {
            if (unit.currentHealth < 0) {
              unit.canAttacked = false;
            }
          });
        } else {
          const index = secondTeam?.findIndex(
            (activeUnit) => activeUnit === unit
          );
          if (index === 0) {
            if (
              teamArray[3]?.currentHealth !== 0 &&
              teamArray[4].currentHealth !== 0
            ) {
              for (let i = 3; i < 5; i++) {
                teamArray[i]!.canAttacked = true;
              }
            } else if (
              teamArray[3]?.currentHealth === 0 &&
              teamArray[4].currentHealth === 0
            ) {
              teamArray[5].canAttacked = true;
            }
          }
          if (index === 1) {
            for (let i = 3; i < 6; i++) {
              teamArray[i].canAttacked = true;
            }
          }
          if (index === 2) {
            if (
              teamArray[5]?.currentHealth !== 0 &&
              teamArray[4].currentHealth !== 0
            ) {
              for (let i = 4; i < 6; i++) {
                teamArray[i]!.canAttacked = true;
              }
            } else if (
              teamArray[5]?.currentHealth === 0 &&
              teamArray[4].currentHealth === 0
            ) {
              teamArray[3].canAttacked = true;
            }
          }
          if (index === 3) {
            if (secondTeam[0].currentHealth === 0) {
              for (let i = 3; i < 6; i++) {
                if (teamArray[i].currentHealth !== 0) {
                  teamArray[i].canAttacked = true;
                }
              }
            }
          }
          if (index === 4) {
            if (secondTeam[1].currentHealth === 0) {
              for (let i = 3; i < 6; i++) {
                if (teamArray[i].currentHealth !== 0) {
                  teamArray[i].canAttacked = true;
                }
              }
            }
          }
          if (index === 5) {
            if (secondTeam[2].currentHealth === 0) {
              for (let i = 3; i < 6; i++) {
                if (teamArray[i].currentHealth !== 0) {
                  teamArray[i].canAttacked = true;
                }
              }
            }
          }
          teamArray.forEach((unit) => {
            if (unit.currentHealth < 0) unit.canAttacked = false;
          });
        }
      break;
    default:
      teamArray?.forEach((unit) => (unit.canAttacked = false));
      break;
  }
  return teamArray;
};
