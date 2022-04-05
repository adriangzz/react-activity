import Container from "react-bootstrap/Container";
import "./App.css";
import Game from "./components/game/Game";
import Menu from "./components/menu/Menu";

function App() {
  return (
    <Container className="App">
      <div className="App">
        <Menu />
        <Game />
      </div>
    </Container>
  );
}

export default App;
