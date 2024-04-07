import {
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import IconButton from "@mui/material/IconButton/IconButton";
import TableCell from "@mui/material/TableCell/TableCell";
import { makeStyles } from "@mui/styles";
import React from "react";

import ArticleIcon from "@mui/icons-material/Article";

import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import "./css/guia.css";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function TableHeader(props) {
  return (
    <TableCell align="center">
      {props.header}
      <IconButton onClick={props.sortData}>
        <ArticleIcon />
      </IconButton>
    </TableCell>
  );
}

function App() {
  const classes = useStyles();
  const [data, setData] = React.useState([
    {
      nomllibre: "El Nom del Vent",
      editorial: "DAW Books",
      tematica: "fantasia",
      preu: 10.99,
    },
    {
      nomllibre: "El Camí dels Reis",
      editorial: "Tor Books",
      tematica: "fantasia",
      preu: 9.99,
    },
    {
      nomllibre: "La Comunitat de l'Anell",
      editorial: "Allen & Unwin",
      tematica: "fantasia",
      preu: 12.99,
    },
    {
      nomllibre: "Manual del Jugador de Dungeons & Dragons",
      editorial: "Wizards of the Coast",
      tematica: "rol",
      preu: 49.95,
    },
    {
      nomllibre: "L'Ull del Món: La Roda del Temps",
      editorial: "Tor Books",
      tematica: "fantasia",
      preu: 8.99,
    },
    {
      nomllibre: "Berserk Volum 1",
      editorial: "Hakusensha",
      tematica: "manga",
      preu: 14.99,
    },
    {
      nomllibre: "El Pozo de la Ascensión",
      editorial: "Tor Books",
      tematica: "fantasia",
      preu: 11.99,
    },
    {
      nomllibre: "Manual de Monstruos de Dungeons & Dragons",
      editorial: "Wizards of the Coast",
      tematica: "rol",
      preu: 34.95,
    },
    {
      nomllibre: "Nausicaä de la Vall del Vent",
      editorial: "Tokuma Shoten",
      tematica: "manga",
      preu: 17.99,
    },
    {
      nomllibre: "Mistborn: L'Imperi Final",
      editorial: "Tor Books",
      tematica: "fantasia",
      preu: 9.99,
    },
  ]);

  const sortData = (key) => {
    setData(
      [...data].sort((a, b) => {
        if (a[key] < b[key]) {
          return -1;
        }
        if (a[key] > b[key]) {
          return 1;
        }
        return 0;
      })
    );
  };

  return (
    <>
      <Header />
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableHeader
                header="Nom del Llibre"
                sortData={() => sortData("nomllibre")}
              />
              <TableHeader
                header="Editorial"
                sortData={() => sortData("editorial")}
              />
              <TableHeader
                header="Tematica"
                sortData={() => sortData("tematica")}
              />
              <TableHeader header="Preu" sortData={() => sortData("preu")} />
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((llibre) => (
              <TableRow key={llibre.nomllibre}>
                <TableCell align="center">{llibre.nomllibre}</TableCell>
                <TableCell align="center">{llibre.editorial}</TableCell>
                <TableCell align="center">{llibre.tematica}</TableCell>
                <TableCell align="center">{llibre.preu} €</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default App;
