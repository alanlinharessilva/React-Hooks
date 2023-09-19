import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [amount, setAmount] = useState(0);

  function addCount() {
    setCount((prev) => {
      return prev + 1;
    });
  }
  function reduceCount() {
    setCount((prev) => {
      return prev - 1;
    });
  }

  function resetCount() {
    setCount(0);
  }

  function handleAmount(e) {
    const value = Number(e.target.value); //target.value  valor padrao do input sempre vem como "String" por isso foi colocado Number a frente!
    setAmount(value);
  }

  function sumAmount() {
    setCount((prev) => amount + prev);
  }

  useEffect(() => {}, []);

  return (
    <>
      <p>Contador</p>
      <div>
        <input
          onChange={handleAmount}
          value={amount}
          type="number"
          placeholder="Adicione a quantidade..."
        ></input>
        <button onClick={sumAmount}>Adicionar</button>
      </div>

      <div className="flex gap-3 items-center">
        <button onClick={reduceCount}>-</button>
        {count}
        <button onClick={addCount}>+</button>

        <button onClick={resetCount}>Reset</button>
      </div>
    </>
  );
}

export default App;
