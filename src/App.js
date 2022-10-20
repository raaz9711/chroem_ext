import './App.css';
import code from './codesnip/code';
const App = () => {
  const List = ({meta},onClick) => {
    console.log(meta,onClick)
   const {id,shortcode,code} = meta
    return(
      <li className='list-group-item p-2'>
        <div className='row container'>
        <h5>{shortcode}</h5>
        <div className='col-11' id = {'copy-'+id}>
        {code}
        </div>
        <div className='col-1'>
          <button className='btn btn-primary' onClick={() => onClick('copy-'+id)}>copy</button>
        </div>
        
        </div></li>
    )
  }
const handlecopy = (id) => {
  const copyText = document.getElementById(id);

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

   // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);

  // Alert the copied text
  alert("Copied the text: " + copyText.value);
}


  return (
    <div className="container">
    <h2> Code Snip </h2>
     <ul className='list-group'>
      {code.map(c => <List key ={c.id} meta = {c} onClick = {handlecopy}/>)}
     </ul>
    
    </div>
  );
}

export default App;
