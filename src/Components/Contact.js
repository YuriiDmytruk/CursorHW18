import "../Styles/Contact.css";
import male from "../Img/male.png"
import female from "../Img/female.png"
import none from "../Img/question.png"

function Contact(props) {
  let image;
  if (props.contact.gender === "male"){
    image = <img src={male} alt="Male" className="image"/>
  }
  else if(props.contact.gender === "female"){
    image = <img src={female} alt="Female" className="image"/>
  }
  else{
    image = <img src={none} alt="None" className="image"/>
  }
  return (
    <div>
      <p>
        {image}
        {props.contact.firstName}, {props.contact.lastName},
        {props.contact.phone}
      </p>
    </div>
  );
}

export default Contact;