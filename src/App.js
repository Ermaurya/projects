
import './App.css';
import Motion from './components/Motion';
import Motion2 from './components/Motion2';

import Nav from './components/Nav';

function App() {
  
const innerBoxStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '20px',
    bg:'#bf2fab',
    borderRadius:'15px',
  }
const display={
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
}
  return (
    <div className="App">
      <Nav display={display} innerBoxStyles={innerBoxStyles}/>
     <Motion/>
     <Motion2/>
    </div>
  );
}

export default App;
