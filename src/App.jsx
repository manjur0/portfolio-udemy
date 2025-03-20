import { Outlet } from "react-router";
import "./App.css";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Outlet>
        <h1>Hello</h1>
      </Outlet>
      <footer>Footer</footer>
    </div>
  );
}

export default App;
