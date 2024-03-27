import "./App.css";
import { Button, Space } from "antd";
import { useBearStore } from "./store";
import { useSetState } from "ahooks";

function App() {
  const [states, setStates] = useSetState({
    name: "darwish",
    age: 23,
  });
  return (
    <Space direction="vertical" className="p-2">
      <h1 className="text-emerald-600">
        Hello {states.name}, i am {states.age} year(s) old{" "}
      </h1>
      <Button onClick={() => setStates({ age: states.age + 1 })}>Age ++</Button>
      <BearCounter />
      <Controls />
    </Space>
  );
}
function BearCounter() {
  const bears = useBearStore((state) => state.bears);
  return <h1>{bears} around here ...</h1>;
}

function Controls() {
  const increasePopulation = useBearStore((state) => state.increasePopulation);
  return <Button onClick={increasePopulation}>one up</Button>;
}

export default App;
