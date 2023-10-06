import Header from "../components/Header";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import GameDetails from "../components/GameDetails";

function Game() {
  const { id } = useParams();

  return (
    <>
      <Header></Header>
      <main>        
        <GameDetails id={id}/>
      </main>
      <Footer></Footer>
    </>
  );
}

export default Game;
