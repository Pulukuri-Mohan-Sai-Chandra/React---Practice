import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {toast} from 'react-toastify'
import { Autocomplete } from '@mui/material'
import TextField from '@mui/material/TextField';
import './App.css'
import cities from './cities-new.json'
function App() {
  const states = Object.keys(cities).sort();
  const [data,setData] = useState({state:"",city:""})
  const [dataCities, setCities] = useState([])
  const handleChange = (obj) =>{
    
    setData({...data,[obj.name]:obj.value})
    console.log(data);

  }
  useEffect(()=>{
    let temp = []
    setData({...data,['city']:""})
    temp = (data.state != "")?cities[data.state].sort():[]
    setCities(temp)
  },[data.state])
  return (

    <>
    <h2> Select you State and City </h2>
    <Autocomplete 
    
    id='state'
     options={states} renderInput={(params) => <TextField name='state'{...params} label="State"/>}
     value={data.state}
     onInputChange={(event,value) => handleChange({name:"state",value:value})}
     />

    <Autocomplete 
    id='city'
    options={dataCities}
    renderInput={(params) => <TextField  name='city' {...params} label="City" />}
    value={data.city}
    onInputChange={(event,value) => handleChange({name:"city",value:value})}
    onOpen={(e)=>{
      if(!data.state){
        toast.error("Please Select State first ")
      }
    }}
    />
    </>

  )
}

export default App
