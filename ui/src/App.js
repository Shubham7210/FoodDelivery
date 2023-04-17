import {Routes, Route, Link} from 'react-router-dom';
import Home from './Components/Home';
import Userdata from './Components/Userdata';
import Adduser from './Components/Adduser';
import welcome from './assests/images/welcome.webp'


function App() {
  return (
    <div style={{
      backgroundImage: `url(${welcome})`,
      backgroundSize: "cover",
      height: "100vh",
      width: "100vw"
  }}>

<h3 className="nav-item"><Link to="/" className="nav-link">Home</Link></h3>
     
      <Routes>
      <Route path='/' element={<Home/>} />  
      <Route path='/userdata' element={<Userdata/>} />  
      <Route path='/adduser' element={<Adduser />} />
      </Routes>
      
     </div>
    
  );
}

export default App;
