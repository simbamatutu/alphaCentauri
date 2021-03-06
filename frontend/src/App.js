import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Signup from './Components/Register';
import Login from './Components/Login';
import Homescreen from './Screens/Homescreen';
import Coursescreen from './Screens/Coursescreen';
import Courseware from './Screens/Studentviews/Courseware';
import Profilescreen from './Screens/Profilescreen';
import UserListScreen from './Screens/UserListScreen';
import TeacherHomescreen from './Screens/Teacherviews/TeacherHomescreen';
import { EditUserScreen } from './Screens/EditUserScreen';
import CourseListScreen from './Screens/CourseListScreen';
import StudentHomeScreen from './Screens/Studentviews/StudentHomeScreen';
import { EditCourseScreen } from './Screens/EditCourseScreen';
function App() {
  return (
    <Router>
      <main style={{ minheight: '100vh' }}>
        <Route path='/' component={Homescreen} exact />
        <Route path='/Signup' component={Signup} />
        <Route path='/Login' component={Login} />
        <Route path='/courses/:id' exact component={Coursescreen} />
        <Route path='/courses/courseware/:id' component={Courseware} />
        <Route path='/teach' component={TeacherHomescreen} />
        <Route path='/learn' component={StudentHomeScreen} />
        <Route path='/profile' component={Profilescreen} />
        <Route path='/admin/user/:id/edit' component={EditUserScreen} />
        <Route path='/admin/user-list' component={UserListScreen} />

        {/*
        
        course stuff
        
        */}

        <Route path='/admin/course-list' component={CourseListScreen} />
        <Route path='/admin/courses/:id/edit' component={EditCourseScreen} />
        <Route path='/search/:keyword' component={Homescreen} />
        <Route path='/teach/courses/:id/edit' component={EditCourseScreen} />
      </main>
    </Router>
  );
}

export default App;
