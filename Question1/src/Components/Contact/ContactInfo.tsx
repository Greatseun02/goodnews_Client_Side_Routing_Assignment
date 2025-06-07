import { useState } from "react";
import type { setState } from "../../utils/types";
import type { contact } from "../../Pages/Contact";

type contactInfo = {
    id: number;
    name: string;
    city: string;
    phone: string;
    editMode: number | null;
    setEditMode: setState<number|null>;
    setContact: setState<contact[]>
}


export default function ContactInfo({id, name, city, phone, editMode, setContact, setEditMode}: contactInfo) {
  const [editName, setEditName] = useState(name);
  const [editCity, setEditCity] = useState(city);
  const [phoneNumber, setPhoneNumber] = useState(phone);

  function handleEditContact (contact: contact[]){
    const contactInstance = {
      name: editName,
      city: editCity,
      phoneNumber: phoneNumber,
    };

    let newContact = contact.map((c, index)=> {
      if(index === id){
        return contactInstance
      }else{
        return c
      }
    })

    return newContact;
  }


  return (
    <div className='contactInfo'>
        {
          editMode === id 
          ?
          <div className="contactInfo-edit">
             <div className="input-output-inner">
                  <label htmlFor="name-contactInfo" className="input">
                      <span>Name:</span>
                      <input id="name-contactInfo" value={editName} onChange={(e)=>setEditName(e.target.value)}/>
                  </label>
              </div>
              <div className="input-output-inner">
                  <label htmlFor="city-contactInfo" className="input">
                      <span >City:</span>
                      <input id="city-contactInfo" value={editCity} onChange={(e)=>setEditCity(e.target.value)}/>
                  </label>
              </div>
              <div className="input-output-inner">
                  <label htmlFor="phone-contactInfo" className="input">
                      <span>Phone No:</span>
                      <input id="phone-contactInfo" value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)}/>
                  </label>
              </div>
              <div className="action-buttons">
                <button className="delete" onClick={()=>{setContact(contact=> contact.filter((_,index)=> index !== id)); setEditMode(null)}}>Delete</button>
                <div className="">
                  <button className="cancel" onClick={()=>setEditMode(null)}>Cancel</button>
                  <button className="save" onClick={()=>{setContact(handleEditContact); setEditMode(null)}}>Save</button>
                </div>
              </div>
          </div>
          :
          <>
            <div className="texts">
                <p className="name">{name}</p>
                <p>{city}</p>
                <p>{phone}</p>
            </div>
            <button onClick={()=>{setEditMode(id)}}>Edit</button>
          </>
        }
    </div>
  )
}
