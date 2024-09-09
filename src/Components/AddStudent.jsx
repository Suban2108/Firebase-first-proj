import React, {useState} from 'react'
import { getDatabase, ref, set } from 'firebase/database';
import { app } from '../FireBase'
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const [name,setName] = useState('');
  const [phone,setPhone] = useState(null);
  const [admNo,setAdmNo] = useState(null);
  const [selectedFile,setSelectedFile] = useState(null);
  const navigate = useNavigate();

  const handleFileChange = (event) =>{
    const file = event.target.files[0]
    setSelectedFile(file)
  }

  const submitHandler = async (event) =>{
    event.preventDefault();  
    const db = getDatabase(app);
    const storage = getStorage(app);

    const myRef = storageRef(storage, `images/${admNo}`);
    await uploadBytes(myRef,selectedFile)

    const imageUrl = await getDownloadURL(myRef);

    set(ref(db,'student/'+ admNo),{
      studentName:name,
      phoneNumber:phone,
      imageUrl:imageUrl
    })
    .then(res=>{
      navigate('/studentList')
    })
    .catch(err=>{
      console.log(err);
    })
  }

  return (
    <div style={{display:'flex',flexDirection:"column"}}>
    <h1>Add Student</h1>
      <form onSubmit={submitHandler}  style={{display:'flex',flexDirection:"column", width:'25%',gap:'20px'}} >
      <input onChange={(e)=>setAdmNo(e.target.value)} type="number" placeholder="Admission no." />
        <input onChange={(e)=>setName(e.target.value)} type="text" placeholder="Student name" />
        <input onChange={(e)=>setPhone(e.target.value)} type="number" placeholder="Phone number" />
        <input onChange={handleFileChange} type="file" />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Home
