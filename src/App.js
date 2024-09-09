import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import DashBoard from './Components/DashBoard';
import AddStudent from '../src/Components/AddStudent'
import AddFaculty from '../src/Components/AddFaculty'
import StudentList from './Components/StudentList';
import FacultyList from './Components/FacultyList';
import UpdateStudent from './Components/UpdateStudent';
import UpdateFaculty from './Components/UpdateFacutly';
import Signup from './Components/Signup';
import Login from './Components/Login';


const myRouter = createBrowserRouter([
  {path:'signup',Component:Signup},
  {path:'login',Component:Login},
  {path:'dashboard',Component:DashBoard, children:[
    {path:'',Component:StudentList},
    {path:'addStudent',Component:AddStudent}, 
    {path:'studentList',Component:StudentList},
    {path:'updateStudent',Component:UpdateStudent},
    {path:'addFaculty',Component:AddFaculty},
    {path:'facultyList',Component:FacultyList},
    {path:'updatefaculty',Component:UpdateFaculty},
  ]}
]);

function App() {
  return (
    <>
      <RouterProvider router={myRouter}/>
    </>
  );
}

export default App;
