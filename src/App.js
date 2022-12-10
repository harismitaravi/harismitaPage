import './App.css';
import List from './components/list'
import Classstate from './components/classstate'
import {BrowserRouter,Route,Routes,Link} from 'react-router-dom';
import BasicButtons from './components/aadhi';

function App() {
  return(
    /*<BrowserRouter>
    <ul>
    <li><Link to="/user">user</Link>
      </li>
    <Link to="/age">age</Link>
    </ul>
    <Routes>
      <Route path="/user" element={<List/>}/>
      <Route path="/age" element={<Classstate/>}/>

    </Routes>
    </BrowserRouter>*/
    <div>
      <BasicButtons />
    </div>
          
  );
}
export default App;