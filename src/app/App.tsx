import { unit, unit2, unit1} from "../classes/Unit";

export const App = () => {
  console.log(unit.doAction(), unit.name);
  console.log(unit1.doAction(), unit1.name);
  console.log(unit2.doAction(), unit2.name);
  return <div className="App">app</div>;
};
