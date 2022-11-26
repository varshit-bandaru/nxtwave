import axios from 'axios';
import React, { useEffect ,useState} from 'react'
import { useRecoilState } from "recoil";
import { dataItems } from "./../../RecoilStore";
import CardDetails from '../../Components/CardDetails/CardDetails';
import { Grid } from '@mui/material';


function Products() {
    const [data, setData] = useRecoilState(dataItems);
    useEffect(() => {
      axios({
        method: "GET",
        url: `https://media-content.ccbp.in/website/react-assignment/resources.json`,
      })
        .then(function (response) {
        console.log(response);
        setData(response.data)
        })
        .catch((error ) => {
        });
    }, [])
    
  
  return (
    <div>Products
        <Grid container justifyContent="center" alignItems="center"  direction="row">
            {
                
                data.map(()=>(
                    <><CardDetails></CardDetails></>
                ))
                
            }
        </Grid>

    </div>
  )
}

export default Products