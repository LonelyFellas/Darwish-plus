import "./App.css";
import { Button, Space } from "antd";
import { useBearStore } from "./store";
import { useSetState } from "ahooks";
import { Switch, Case, Default } from "@darwish/only-when";

function App() {
  const [states, setStates] = useSetState({
    name: "darwish",
    age: 23,
  });
  const handleClick = () => {
    window.alert("clicked");
  };
  return (
    <Space direction="vertical" className="p-2">
      <Switch
        as="ul"
        tagProps={{
          className: "flex space-x-2",
        }}
      >
        <Case
          as="li"
          is={states.age > 10}
          tagProps={{
            className: "text-red-600",
            onClick: handleClick,
          }}
        >
          1
        </Case>
        <Case as="li" is={states.age > 30}>
          2
        </Case>
        <Default as="li">3</Default>
      </Switch>
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
