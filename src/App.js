import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import List from "./components/List";
import Details from "./components/Details";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/detail" element={<Details />} />
      </Routes>
    </>
  );
}

export default App;
