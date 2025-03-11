import { IoPersonSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import css from "../Contact/Contact.module.css";

export default function Contact({ data: { name, number, id }, handleDelete }) {
  return (
    <div className={css.container}>
      <div className={css.contact}>
        <p>
          <IoPersonSharp className={css.icon} />
          {name}
        </p>
        <p>
          <FaPhoneAlt className={css.phone} />
          {number}
        </p>
      </div>
      <button className={css.delete} onClick={() => handleDelete(id)}>
        Delete
      </button>
    </div>
  );
}
