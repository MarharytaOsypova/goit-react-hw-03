import { BsFillPersonFill } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import styles from "./Contact.module.css"

const Contact = ({ name, number, onDelete, id }) => {
  return (
    <li className={styles.contactItem}>
      <div className={styles.contactInfo}>
        <p><BsFillPersonFill size="20" /> {name}</p>
        <p><BsFillTelephoneFill size="18" /> {number}</p>
      </div>
      <button onClick={() => onDelete(id)} className={styles.deleteButton}>Delete</button>
    </li>
  );
};

export default Contact;