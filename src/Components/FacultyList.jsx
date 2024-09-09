import React, { useEffect, useState } from 'react'
import { app } from '../FireBase'
import { getDocs, getFirestore, collection, deleteDoc, doc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom';


const FacultyList = () => {
    const [facultyData,setFacultyData] = useState([])
    const navigate = useNavigate();

    useEffect( ()=>{
        getData();
    },[])

    const getData = async()=>{
        const db = getFirestore(app)
        const docRef = collection(db,'faculty')
        const docSnap = await getDocs(docRef)
        
        const data = docSnap.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }))
        console.log(data)
        setFacultyData(data)
    }

    const deleteData = async(id) =>{
      const db = getFirestore(app)
      const dataRef = doc(db,'faculty',id)

      try{
        await deleteDoc(dataRef)
        getData()
      }
      catch(err){
        console.log(err)
      }
    }

  return (
    <div>
      <h1>Faculty Data</h1>
      {facultyData.map(faculty=>{
        return(
          <div key={faculty.id}>
            <p>{faculty.facultyName} {faculty.phoneNumber}</p>
            <button onClick={()=>{deleteData(faculty.id)}}>Delete</button>
            <button onClick={()=>{navigate('/updatefaculty',{state:faculty})}}>Update</button>
          </div>
        )
      })}
    </div>
  )
}

export default FacultyList
