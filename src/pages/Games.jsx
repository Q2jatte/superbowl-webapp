import Header from "../components/Header";
import Footer from "../components/Footer";
import FilterButton from "../components/FilterButton";
import GamesList from "../components/GamesList";
import { useState } from "react";

function Games() {
  const [filterValue, setFilterValue] = useState("all");

  //callback du bouton de filtre
  const handleFilterValue = (value) => {
    setFilterValue(value);
    console.log("parentValue: " + value);
  };

  return (
    <>
      <Header></Header>
      <main>
        <h1 className="mx-auto text-center">🏈 Tous les matchs 🤩</h1>
        <FilterButton onValueChange={handleFilterValue}></FilterButton>
        <nav>
          <ul>
            <GamesList filter={filterValue}></GamesList>
          </ul>
        </nav>
      </main>
      <Footer></Footer>
    </>
  );
}

export default Games;
