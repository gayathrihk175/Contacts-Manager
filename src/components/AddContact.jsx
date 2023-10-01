import React, { useState } from 'react'

const AddContact = ({addContact}) => {

    const [contactData, setContactData] = useState({name:"",email:""})

    const handleChange = (e) => {
        if(e.target.name === "name"){
            setContactData({...contactData,name:e.target.value})
        }else{
            setContactData({...contactData,email:e.target.value})
        }
    }

    const handleAdd = () => {
        if(!contactData.name || !contactData.email){
            alert("Please fill all the fields !");
            return;
        }
        addContact(contactData)
        setContactData({name:"",email:""});
    }

  return (
    <div className='py-7'>
        <h1 className='text-fuchsia-900 text-center text-2xl font-mono font-semibold'>Add Contacts</h1>
        <form className='max-w-[30%] mx-auto mt-4 p-5 leading-9'>
            <label className='font-mono text-fuchsia-800'>Name:</label>
            <br />
            <input type="text" placeholder='Enter Name' name='name' className='border border-fuchsia-900 w-[100%] px-2 rounded-md' value={contactData.name} onChange={handleChange} />
            <br />
            <label className='font-mono text-fuchsia-800'>Email:</label>
            <br />
            <input type="email" placeholder='Enter Email' name='email' className='border border-fuchsia-900  w-[100%] px-2 rounded-md' value={contactData.email} onChange={handleChange} />
            <br />
        </form>
        <button className='bg-fuchsia-900 text-white font-mono py-2 px-4 rounded-2xl mt-2 block mx-auto' onClick={handleAdd}>Add Contact</button>
    </div>
  )
}

export default AddContact
