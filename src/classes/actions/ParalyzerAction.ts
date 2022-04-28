import { UnitAction } from "./interfaceUnitAction";

export class ParalyzerAction implements UnitAction {
  doAction(): boolean {
    return true;
  }
}
