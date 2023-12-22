import { useState } from 'react';

const List = ({meta}) => {
    const [display,setDisplay] = useState({
      copy : 'copy',
      btn : 'btn-primary'
    })

   const {shortcode,code} = meta
   //console.log(meta)

    const handlecopy = (i) => {
      const copyText = i;
      setDisplay((s) => {return {copy : 'copied!',btn : 'btn-success'} } )
      setTimeout(() => {
        setDisplay({
          copy : 'copy',
          btn : 'btn-primary'
        })
      },2000)
      navigator.clipboard.writeText(copyText);
    
      // Alert the copied text
   //   alert("Copied the text: " + copyText);
    }
    
    return(
      <li className='list-group-item p-2'>
        <div className='row p-2'>
        <h5>{shortcode}</h5>
        <div className='col-9 bg-dark text-white p-2'>
        {code}
        </div>
        <div className='col-3 align-middle'>
          <button className= {'btn '+display.btn } onClick={() => handlecopy(code)}><small>{display.copy}</small></button>
        </div>
        
        </div></li>
    )
  }

  export default List