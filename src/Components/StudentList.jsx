import React, { useEffect, useState } from 'react'
import { getDatabase, onValue, ref, remove } from 'firebase/database'
import { app } from '../FireBase';
import { getStorage, ref as  storageRef, deleteObject} from 'firebase/storage';
import { useNavigate } from 'react-router-dom';

const StudentList = () => {
    const [studentData, setStudentData] = useState(null);
    const navigate = useNavigate();
    useEffect(()=>{
      const db = getDatabase(app)
      const studentRef = ref(db, 'student')
      onValue(studentRef, (snapshot) => {
        const data = snapshot.val()
        console.log(data)
        setStudentData(data)
      })
    },[])

    const deleteData = (key) =>{
      const db = getDatabase(app)
      const storage = getStorage(app)
      const studentRef = ref(db, 'student/'+key)
      const myRef= storageRef(storage,'images/'+key)
      deleteObject(myRef)
      .then(res=>{
        remove(studentRef)
      })
      .catch(err=>console.log(err))
    }

  return (
    <div>
      <h1>Student List</h1>
      {studentData && (
        <div>
            {Object.entries(studentData).map(([key,value])=>{
                return (
                <div key={key}>
                    <img style={{width:'100px'}} src={value.imageUrl} alt="" />
                   <p>{value.studentName} {value.phoneNumber}</p>
                   <button onClick={()=> {deleteData(key)}}>Delete</button>
                   <button onClick={()=>{navigate('/updateStudent',{state:[key,value]})}}>Update</button>
                </div>
             )
            })}
        </div>
      )}
    </div>
  )
}

export default StudentList
