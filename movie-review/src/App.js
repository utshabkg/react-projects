import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Cards from "./components/Cards";
import AddMovie from "./components/AddMovie";
import Detail from "./components/Detail";

function App() {
  return (
    <div className="App relative">
      <Header />
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/addmovie" element={<AddMovie />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
