import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const DashBoard = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'row'}}>
            <div style={{width:'20%',background:'royalblue',height:'100vh',fontSize:'30px'}}>
                <Link to='/dashboard/addStudent' style={{color:'white',display:'block',margin:'50px',textDecoration:'none'}}>Add Student</Link>
                <Link to='/dashboard/addfaculty' style={{color:'white',display:'block',margin:'50px',textDecoration:'none'}}>Add Faculty</Link>
                <Link to='/dashboard/studentList' style={{color:'white',display:'block',margin:'50px',textDecoration:'none'}}>Student List</Link>
                <Link to='/dashboard/facultyList' style={{color:'white',display:'block',margin:'50px',textDecoration:'none'}}>Faculty List</Link>
            </div>
            <div style={{width:'70%',height:'100vh'}}>
                <Outlet/>
            </div>
        </div>
    )
}

export default DashBoard
