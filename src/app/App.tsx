import { Unit, Skeleton, BLa} from '../classes/Unit'
export const App = () => {
  const unit = new Unit(new Skeleton());
  console.log(unit)
  unit.setUnit(new BLa());
  console.log(unit);
  return <div className="App">app</div>;
};
