import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Cards from "./components/Cards";
import AddMovie from "./components/AddMovie";

function App() {
  return (
    <div className="App relative">
      <Header />
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/addmovie" element={<AddMovie />} />
      </Routes>
    </div>
  );
}

export default App;
