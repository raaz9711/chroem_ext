const ButtonList = ({code,handleFilterByName}) => {
 const handler = handleFilterByName 
    console.log(handler,handleFilterByName)
let btnList = {}
console.log('3',code)
code.forEach(e => {
    if(btnList[e.category] == null) {
        btnList[e.category] = e.category
    }
});

const btns = Object.keys(btnList)

return(<div>
        <button className="mx-1 btn btn-primary" onClick = {() => handler('all')} >All</button>

{btns.map((b,i) => { return <button key={i} onClick = {() => handler(b)} className="mx-1 btn btn-success"> {b} </button>
    }) }
        <button className="mx-1 btn btn-success" onClick = {() => handler('clear')} >Clear</button>

</div>)


}

export default ButtonList