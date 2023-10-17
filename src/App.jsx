import { useState } from "react";
import "./App.css";
import { Button } from "./components/Button";
import { Counter } from "./components/Counter";

function App() {
  const [count, setCount] = useState(100);

  function inc() {
    setCount(count + 2);
  }
  function dec() {
    setCount(count - 2);
  }

  return (
    <div className=" App">
      <Counter count={count} />
      <Button onClick={inc} />
      <Button onClick={inc} />
      <Button onClick={inc} />
      <Button onClick={dec} />
      <Button onClick={dec} />
      <Button onClick={dec} />
    </div>
  );
}

export default App;
