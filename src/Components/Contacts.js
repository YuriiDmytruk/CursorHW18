import React, { useState } from "react";
import "../Styles/Contacts.css";
import Contact from "./Contact.js";
import contacts from "../Scripts/Data.js";
import filter from "../Scripts/Filter.js";

function Contacts() {
  const [state, SetContacts] = useState({
    contacts: [],
    search: "",
    specification: [],
  });

  const handleSearchChange = (e) => {
    let filtered = [];
    if (
      e.target.value === "male" ||
      e.target.value === "female" ||
      e.target.value === "not-specified"
    ) {
      let index = state.specification.indexOf(e.target.value);
      if (index !== -1) {
        state.specification.splice(index, 1);
      } else {
        state.specification.push(e.target.value);
      }
      filtered = filter(contacts, "", state.specification);
    } else {
      filtered = filter(contacts, e.target.value, state.specification);
    }

    SetContacts({
      contacts: filtered,
      search: e.target.value,
      specification: state.specification,
    });
  };

  return (
    <div className="external">
      <div>
        <div className="middle">
          <input type="text" id="name" onChange={handleSearchChange} />
        </div>
        <div className="middle">
          <input type="checkbox" value="male" onChange={handleSearchChange} />
          <label> Male</label>
          <input type="checkbox" value="female" onChange={handleSearchChange} />
          <label> Female</label>
          <input type="checkbox" value="not-specified" onChange={handleSearchChange} />
          <label> Not specified</label>
        </div>
        <div className="contacts">
          {state.contacts.map((e) => (
            <Contact contact={e} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Contacts;
