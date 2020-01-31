import React, { useState, useEffect, useMemo, useCallback } from "react";

function App() {
  // states
  const [tech, setTech] = useState(["ReactJS", "React Native"]);
  const [newTech, setNewTech] = useState("");

  // setStates
  const handleAdd = useCallback(() => {
    setTech([...tech, newTech]);
    setNewTech("");
  }, [tech, newTech]);

  // componentDidMount
  useEffect(() => {
    const storageTech = localStorage.getItem("tech");

    if (storageTech) {
      setTech(JSON.parse(storageTech));
    }

    // componentDidUnmount
    // return () => {};
  }, []);

  // componentDidUpdate
  useEffect(() => {
    localStorage.setItem("tech", JSON.stringify(tech));
  }, [tech]);

  // Altera o techSize somente quando o state tech é alterado
  const techSize = useMemo(() => tech.length, [tech]);

  return (
    <>
      <ul>
        {tech.map(t => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <strong>Você tem {techSize} tecnologias</strong>
      <br />
      <input value={newTech} onChange={e => setNewTech(e.target.value)} />
      <button type="button" onClick={handleAdd}>
        Adicionar
      </button>
    </>
  );
}

export default App;
