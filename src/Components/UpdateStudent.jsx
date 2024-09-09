import React, { useState } from 'react'
import { getDatabase, ref, update } from 'firebase/database';
import { app } from '../FireBase'
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
import { useLocation, useNavigate } from 'react-router-dom';

const UpdateStudent = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const [selectedFile, setSelectedFile] = useState(null);
    const [name, setName] = useState(location.state[1].studentName);
    const [phone, setPhone] = useState(location.state[1].phoneNumber);
    const [admNo, setAdmNo] = useState(location.state[0]);


    const handleFileChange = (event) => {
        const file = event.target.files[0]
        setSelectedFile(file)
    }


    const submitHandler = async (event) => {

        if (selectedFile) {
            event.preventDefault();
            const db = getDatabase(app);
            const storage = getStorage(app);

            const myRef = storageRef(storage, `images/${location.state[0]}`);
            await uploadBytes(myRef, selectedFile)

            const imageUrl = await getDownloadURL(myRef);


            const studentRef = ref(db, 'student/' + location.state[0])
            update(studentRef, {
                studentName: name,
                phoneNumber: phone,
                imageUrl: imageUrl
            })

                .then(res => {
                    navigate('dashboard/studentList')
                })
                .catch(err => {
                    console.log(err);
                })
        }

        else
            event.preventDefault();  
            const db = getDatabase(app);
        
        
            const studentRef = ref(db,'student/'+location.state[0])
            update(studentRef,{
                studentName:name,
                phoneNumber:phone, 
            })
        
            .then(res=>{
                navigate('/studentList')
            })
            .catch(err=>{
                console.log(err);
            })
        
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <input disabled value={admNo} onChange={(e) => setAdmNo(e.target.value)} type="number" placeholder="Admission no." />
                <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Student name" />
                <input value={phone} onChange={(e) => setPhone(e.target.value)} type="number" placeholder="Phone number" />
                <input onChange={handleFileChange} type="file" />
                <button type='submit'>Update</button>
            </form>
        </div>
    )
}

export default UpdateStudent
