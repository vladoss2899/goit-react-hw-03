import Contact from "../Contact/Contact";
import css from "../ContactList/ContactList.module.css";

export default function ContactList({ tasks, onHandleDelete }) {
  return (
    <div>
      <ul className={css.contactListWrap}>
        {tasks.map((task) => (
          <li key={task.id}>
            <Contact
              data={task}
              name={task.name}
              number={task.number}
              id={task.id}
              handleDelete={onHandleDelete}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
