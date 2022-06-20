// import logo from './logo.svg';
import "./App.css";
import Gallery2 from "./components/Gallery/Gallery2";
import Parent from "./components/Practice/Children/Parent";
import ReactForm from "./components/Synthetic/ReactForm";
import Synthetic from "./components/Synthetic/Synthetic";

function App() {
  return (
    <>
      <div className="App">
        <Synthetic />
        <Gallery2 />
        <ReactForm/>
        <Parent/>
      </div>
    </>
  );
}

export default App;
