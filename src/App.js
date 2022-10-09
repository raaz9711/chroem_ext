import './App.css';
import code from './codesnip/code';
function App() {
  return (
    <div className="App">
     Extension
     <ul>
      {code.map(c => <li key={c.id}>{c.shortcode} || {c.code } </li>)}
     </ul>
    
    </div>
  );
}

export default App;
