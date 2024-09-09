import React, { useState } from 'react';
import { app } from '../FireBase';
import { doc, getFirestore, updateDoc } from 'firebase/firestore';
import { useLocation ,useNavigate } from 'react-router-dom';


const UpdateFaculty = () => {

  const location = useLocation()

   console.log(location.state)
    const [name, setName] = useState(location.state.facultyName);
    const [phone, setPhone] = useState(location.state.phoneNumber); 
    const navigate = useNavigate();


    const submitHandler = async(event) => {
        event.preventDefault();
        const db = getFirestore(app)
        
        const docRef = doc(db,'faculty',location.state.id)
        try{
            await updateDoc(docRef,{facultyName:name,phoneNumber:phone})
            navigate('/facultyList')
        }
        catch(err){
            console.log(err)
        }
    };

    return (
        <div>
            <h1>Add Faculty</h1>
            <form onSubmit={submitHandler} style={{ display: 'flex', flexDirection: "column", width: '25%', gap: '20px', margin: '20px' }}>
                <input 
                    value = {name}
                    type="text" 
                    onChange={(e) => setName(e.target.value)} 
                    placeholder='Full Name' 
                    style={{ height: '20px' }} 
                />
                <input 
                   value = {phone}
                    type="number" 
                    onChange={(e) => setPhone(e.target.value)} 
                    placeholder='Phone Number' 
                    style={{ height: '20px' }} 
                />
                <button type='submit'>Update</button> 
            </form>
        </div>
    );
};

export default UpdateFaculty;
