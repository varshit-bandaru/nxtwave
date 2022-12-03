
import CardDetails from "./Components/CardDetails/CardDetails";
import Header from "./Components/Header/Header";
import Products from "./HOC/Products/Products";
import { RecoilRoot } from "recoil";
import SwitchTabs from "./Components/SwitchTabs/SwitchTabs";
import React ,{useEffect} from 'react'
import ItemTextFields from "./Components/ItemDetails/ItemTextFields";

function App() {
  const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        // alert(newValue)
      setValue(newValue);
    };
    useEffect(() => {
     
    }, [])
    
    function renderComponent()
    {
      if(value==0)
      {
        return(<Products></Products>)
      }
    }
  return (
    <RecoilRoot>
    <div className="App">
      <Header ></Header>
      {/* <SwitchTabs handleChange={handleChange} value={value}></SwitchTabs> */}
     {/* { renderComponent()} */}
      <ItemTextFields></ItemTextFields>
    </div>
    </RecoilRoot>
  );
}

export default App;
