import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Signup from './Components/Register';
import Login from './Components/Login';
import Homescreen from './Screens/Homescreen';
import Coursescreen from './Screens/Coursescreen';
import Courseware from './Screens/Courseware';
import Profilescreen from './Screens/Profilescreen';
import teacherHomescreen from './Screens/teacherHomescreen';
function App() {
  return (
    <Router>
      <main style={{ minHeight: '80vh' }}>
        <Route path='/' component={Homescreen} exact />
        <Route path='/Signup' component={Signup} />
        <Route path='/Login' component={Login} />
        <Route path='/courses/:id' exact component={Coursescreen} />
        <Route path='/courses/courseware/:id' component={Courseware} />
        <Route path='/teacherHome' component={teacherHomescreen} />
        <Route path='/profile' component={Profilescreen} />
      </main>
    </Router>
  );
}

export default App;
