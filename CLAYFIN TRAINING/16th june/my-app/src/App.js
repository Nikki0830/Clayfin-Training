// import logo from './logo.svg';
import "./App.css";
import Gallery2 from "./components/Gallery/Gallery2";
import Parent from "./components/Practice/Children/Parent";
import Parent2 from "./components/Practice/Children/Propsdrilling/Parent2";
import LifeCycle from "./components/Practice/Lifecycle/LifeCycle";
import Map from "./components/Mappingmap/Map";
import ReactForm from "./components/Synthetic/ReactForm";
import Synthetic from "./components/Synthetic/Synthetic";
import Destu from "./components/Destructuring/Destu";
import Cards from "./components/Cards/Cards";

function App() {
  return (
    <>
      <div className="App">
        <Synthetic />
        <Gallery2 />
        <ReactForm/>
        <Parent/>
        <Parent2/>
        <LifeCycle/>
        <Map/>
        <Destu/>
        <Cards/>
      </div>
    </>
  );
}

export default App;
