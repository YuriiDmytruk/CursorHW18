function Contact(props) {
    return (
      <div>
        <p>{props.contact.firstName}, {props.contact.lastName}, {props.contact.phone}, {props.contact.gender}</p>
      </div>
    );
  }
  
  export default Contact;
  