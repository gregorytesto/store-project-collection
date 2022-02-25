import NewForm from "./components/NewForm";
import "./App.css";
import { useState, useEffect } from "react";
import Card from "./Card";

const { REACT_APP_API_URL } = process.env;

function App() {
  const [projects, setProjects] = useState([]);

  const allCards = projects.map((project, i) => {
    return <Card key={project.name + i} project={project} />;
  });

  useEffect(() => {
    fetch(REACT_APP_API_URL)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setProjects(data);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>8.2 eCommerce Project Collection</h1>
        <NewForm />
      </header>

      <div className="cards-container">{allCards}</div>
    </div>
  );
}

export default App;
