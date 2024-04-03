import "./App.css";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/guia.css";

import React, { useState } from "react";

const TableRow = ({ data }) => {
  return (
    <tr>
      {Object.keys(data).map((key) => (
        <td key={key}>{data[key]}</td>
      ))}
    </tr>
  );
};

const Table = ({ headers, data }) => {
  return (
    <table>
      <thead>
        <tr>
          {headers.map((header) => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <TableRow key={row.id} data={row} />
        ))}
      </tbody>
    </table>
  );
};

const App = () => {
  const [data, setData] = useState([
    {
      nomllibre: "El Nom del Vent",
      editorial: "DAW Books",
      tematica: "fantasia",
      preu: "10.99€",
    },
    {
      nomllibre: "El Camí dels Reis",
      editorial: "Tor Books",
      tematica: "fantasia",
      preu: "9.99€",
    },
    {
      nomllibre: "La Comunitat de l'Anell",
      editorial: "Allen & Unwin",
      tematica: "fantasia",
      preu: "12.99€",
    },
    {
      nomllibre: "Manual del Jugador de Dungeons & Dragons",
      editorial: "Wizards of the Coast",
      tematica: "rol",
      preu: "49.95€",
    },
    {
      nomllibre: "L'Ull del Món: La Roda del Temps",
      editorial: "Tor Books",
      tematica: "fantasia",
      preu: "8.99€",
    },
    {
      nomllibre: "Berserk Volum 1",
      editorial: "Hakusensha",
      tematica: "manga",
      preu: "14.99€",
    },
    {
      nomllibre: "El Pozo de la Ascensión",
      editorial: "Tor Books",
      tematica: "fantasia",
      preu: "11.99€",
    },
    {
      nomllibre: "Manual de Monstruos de Dungeons & Dragons",
      editorial: "Wizards of the Coast",
      tematica: "rol",
      preu: "34.95€",
    },
    {
      nomllibre: "Nausicaä de la Vall del Vent",
      editorial: "Tokuma Shoten",
      tematica: "manga",
      preu: "17.99€",
    },
    {
      nomllibre: "Mistborn: L'Imperi Final",
      editorial: "Tor Books",
      tematica: "fantasia",
      preu: "9.99€",
    },
  ]);

  const [sortBy, setSortBy] = useState("nom");

  const handleSort = (key) => {
    setSortBy(key);
    setData([...data].sort((a, b) => (a[key] > b[key] ? 1 : -1)));
  };

  const headers = ["Nom Llibre", "Editorial", "Temàtica", "Preu"];

  return (
    <div>
      <div className="App">
        <Header />
      </div>
      <h1>Taula de dades dinàmiques</h1>
      <Table headers={headers} data={data} />
      <div>
        <button onClick={() => handleSort("nom")}>Ordena per nom</button>
        <button onClick={() => handleSort("editorial")}>
          Ordena per editorial
        </button>
        <button onClick={() => handleSort("tematica")}>
          Ordena per tematica
        </button>
      </div>
    </div>
  );
};

export default App;
