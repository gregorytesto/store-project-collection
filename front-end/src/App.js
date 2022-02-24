import NewForm from "./components/NewForm";
import "./App.css";
import { useState } from "react";
import Card from "./Card";

function App() {
  const [projects, setProjects] = useState([]);

  // const allCards = () => {};

  return (
    <div className="App">
      <header className="App-header">
        <h1>8.2 eCommerce Project Collection</h1>
        <NewForm />
      </header>

      <div className="cards-container">
        {/* {allCards} */}
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;
