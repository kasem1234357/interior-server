import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Navbar from './components/navbar/Navbar';
import Main from './pages/Main';
import WebsitePost from './pages/WebsitePost';
import Task from './pages/Task';
import Tasks from './pages/Tasks';
import Calender from './pages/Calender'
import Dashboard from './pages/Dashboard';
function App() {
  return (
    <Router>
    <div className="App flex">
      <Navbar/>
      
       <Routes>
        <Route path='/' Component={Main} />
        <Route path='/Dashboard' Component={Dashboard} />
        <Route path='/tasks' element={<Tasks />}/>
        <Route path='/calender' element={<Calender />}/>
      <Route path='/tasks/task/:taskId' element={<Task/>}/>
        <Route path='/website' Component={WebsitePost} />
       </Routes>
      

    </div>
    </Router>
  );
}

export default App;
