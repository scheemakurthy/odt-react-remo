import React, { useState } from 'react'
import { base_url, paths } from '../App'
export const NewRecord = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [color, setColor] = useState('');
    const [empId, setEmpId] = useState('')
    const [savedId, setSavedId] = useState(null)
    const handleSaveData = () => {
        fetch(base_url + paths.employee + ".json", {
            method: "POST",
            body: JSON.stringify({
                name: name,
                email: email,
                address: address,
                color: color,
                empId: empId
            }),
        })
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
                setSavedId(res);
                setName('');
                setEmail('');
                setAddress('');
                setColor('');
                setEmpId('')
                setTimeout(() => {
                    setSavedId(null)
                }, 5000)
            });
    }
    return (
        <div><h3>Add new employee record </h3><div>
            <label>Enter name :</label><span> <input type={'text'} value={name} onChange={(e) => setName(e.target.value)} /></span>
            <br></br><label>Enter Id :</label><span> <input type={'number'} value={empId} onChange={(e) => setEmpId(e.target.value)} /></span>
            <br></br><label>Enter email :</label><span> <input type={'email'} value={email} onChange={(e) => setEmail(e.target.value)} /></span>
            <br></br><label>Enter address :</label><span> <input type={'text'} value={address} onChange={(e) => setAddress(e.target.value)} /></span>
            <br></br><label>Pick color :</label><span> <input type={'color'} value={color} onChange={(e) => setColor(e.target.value)} /></span>
            <button onClick={e => {
                handleSaveData()
            }} >Save data</button>
            {savedId && <div style={{ color: 'purple', fontStyle: 'italic' }}>
                Saved employee ID is {savedId.name}</div>}
        </div>

        </div>
    )
}
