import React, { useState } from "react";
import Contact from "./Contact.js";
import contacts from "../Scripts/Data.js";
import filter from "../Scripts/Filter.js"

function Contacts() {
  const [state, SetContacts] = useState({ contacts: contacts, search: "" });

  const handleSearchChange = (e) => {
    SetContacts({contacts : filter(contacts, e.target.value), search: e.target.value})
  }


  return (
    <div>
    <input type="text" id="name" onChange={handleSearchChange}/>
    {state.contacts.map((e) => <Contact contact={e} />)}
    </div>
  )
}

export default Contacts;
