import { useBoolean } from "@darwish/hooks-core";

export default function UseBoolean() {
  const [on, toggle] = useBoolean(true);

  return (
    <div>
      <div>{on ? "ON" : "OFF"}</div>
      <button onClick={toggle}>Toggle</button>
      <button onClick={() => toggle(true)}>set ON</button>
      <button onClick={() => toggle(false)}>set OFF</button>
    </div>
  );
}
