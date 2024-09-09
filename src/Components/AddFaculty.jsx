import React, { useState } from 'react';
import { app } from '../FireBase';
import { addDoc , collection , getFirestore } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const AddFaculty = () => {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState(null); 
  const navigate = useNavigate();


    const submitHandler = async(event) => {
        event.preventDefault();
        const db = getFirestore(app)
        const docRef = await addDoc(collection(db,'faculty'),{
            facultyName:name,
            phoneNumber:phone
        });
            navigate('/facultyList')
        console.log(docRef,docRef.id)
    };

    return (
        <div>
            <h1>Add Faculty</h1>
            <form onSubmit={submitHandler} style={{ display: 'flex', flexDirection: "column", width: '25%', gap: '20px', margin: '20px' }}>
                <input 
                    type="text" 
                    onChange={(e) => setName(e.target.value)} 
                    placeholder='Full Name' 
                    style={{ height: '20px' }} 
                />
                <input 
                    type="number" 
                    onChange={(e) => setPhone(e.target.value)} 
                    placeholder='Phone Number' 
                    style={{ height: '20px' }} 
                />
                <button type='submit'>Submit</button> 
            </form>
        </div>
    );
};

export default AddFaculty;
