
import CardDetails from "./Components/CardDetails/CardDetails";
import Header from "./Components/Header/Header";
import Products from "./HOC/Products/Products";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
    <div className="App">
      <Header ></Header>
      <Products></Products>
     <CardDetails></CardDetails>
    </div>
    </RecoilRoot>
  );
}

export default App;
