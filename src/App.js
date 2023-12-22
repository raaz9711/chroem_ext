import { useEffect, useState } from 'react';
import './App.css';
import code from './codesnip/code';
import ButtonList from './Component/ButtonList';
import List from './Component/List';
const App = () => {

  const [data,setData] = useState([])
  const [search,setSearch] = useState('')

  
  const handleSearch = (e) => {
      //console.log(e.target.value)
    setSearch((s) => e.target.value)
  }
  const filterData = () => {
    if(search === '') {
      setData(f => code);
    }
    setData((d) => {
      //console.log('18',d)
      return code.filter(c => c.shortcode.includes(search))
    })
  }

  useEffect(() => {
    setData(() => code.filter(c => c.id < 6))
  },[])

  const handleFilterByName = (v) => {
    //console.log(v)
    if(v === 'clear')
    {
      setData(() => code.filter(c => c.id < 6))

      }
    else if(v === 'all')
      {
        setData(code)
  
        }
        
else {
    setData((d) => {
      //console.log('18',d)
      return code.filter(c => c.category === v)
    })
  }
  }


  return (
    <>
    <div className='p-1 border border-dark'>

    <h2> Code Snip </h2>
      <div className="container p-2 mx-auto">
      <input className='w-70' onChange={handleSearch} value = {search} />
      <button className='btn btn-success mx-3' onClick={filterData} ><small>Search</small></button>
      </div>
      <div>
        <ButtonList code={code} handleFilterByName = {handleFilterByName} />

      </div>
      <br/>
      <div className="container">
     <ul className='list-group p-2'>
      {data.map(c => <List key ={c.id} meta = {c}/>)}
     </ul>
    
    </div>
    </div>
  
    </>
  );
}

export default App;
