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
import Inc from "./components/Assignment4/IncFive/Inc";
import Countertwo from "./components/Assignment4/IncFive/Countertwo/Countertwo";
import Login from "./components/Assignment4/IncFive/Login/Login";
import Contextfile from "./components/Assignment4/IncFive/Context/Contextfile";
import Contextfile2 from "./components/Assignment4/IncFive/Context/Contextfile2";

import FormContainer from "./components/Practice/Formhandler/FormContainer";

function App() {
  return (
    <>
      <div className="App">
        {/* <Synthetic />
        <Gallery2 />
        <ReactForm />
        <Parent />
        <Parent2 />
        <LifeCycle />
        <Map />
        <Destu />
        <Cards /> */}
        {/* <Inc />
        <Countertwo />
        <Login />
        <Contextfile2 /> */}
        <FormContainer />
      </div>
    </>
  );
}

export default App;
