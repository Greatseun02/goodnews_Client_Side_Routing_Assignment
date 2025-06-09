import { useState } from "react"
import "../Contact.css"
import ContactInfo from "../Components/Contact/ContactInfo";


export type contact = {
    name: string,
    city: string, 
    phoneNumber: string,
}

export default function Contact() {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [editMode, setEditMode] = useState<number | null>(null);
  const [contact, setContact] = useState<contact[]>([]);

  return (
    <div className="contact-div">
        <h1>
            Contact Book
        </h1>
        <p>Keep track of your friends details.</p>
        <form 
            onSubmit={(e)=>{
                e.preventDefault();
                setContact(contact=>[...contact, {name:name, city:city, phoneNumber:phoneNumber}]);
                setName("");
                setCity("");
                setPhoneNumber("");
            }}
        >
            <div className="form">
                <div className="input-output-inner">
                    <label htmlFor="name" className="input">
                        <span>Name:</span>
                        <input id="name" value={name} onChange={(e)=>setName(e.target.value)}/>
                    </label>
                </div>
                <div className="input-output-inner">
                    <label htmlFor="city" className="input">
                        <span >City:</span>
                        <input id="city" value={city} onChange={(e)=>setCity(e.target.value)}/>
                    </label>
                </div>
                <div className="input-output-inner">
                    <label htmlFor="phone" className="input">
                        <span>Phone No:</span>
                        <input id="phone" value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)}/>
                    </label>
                </div>
                <button className="button">Submit</button>
            </div>
        </form>
        <div className="details-div">
            {
                contact.map((c, index)=> <ContactInfo key={index} id={index} name={c.name} city={c.city} phone={c.phoneNumber} editMode={editMode} setEditMode={setEditMode} setContact={setContact}/>)
            }
        </div>
    </div>
  )
}
