import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import { useState, useEffect } from "react";
import Tasks from "../../../Contacts.json";

export default function App() {
  const [tasks, setTasks] = useState(() => {
    const savedContacts = window.localStorage.getItem("saved-contacts");
    if (savedContacts !== null) {
      return JSON.parse(savedContacts);
    }
    return Tasks;
  });

  const [fileter, setFilter] = useState("");
  const searchContact = tasks.filter((task) =>
    task.name.toLowerCase().includes(fileter.toLowerCase())
  );

  useEffect(() => {
    window.localStorage.setItem("saved-contacts", JSON.stringify(tasks));
  }, [tasks]);

  const addContact = (task) => {
    setTasks((prevState) => {
      return [...prevState, task];
    });
  };

  const handleDelete = (id) => {
    setTasks((prevContacts) => {
      return prevContacts.filter((item) => item.id !== id);
    });
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addCont={addContact} />
      <SearchBox value={fileter} onFilter={setFilter} />
      <ContactList tasks={searchContact} onHandleDelete={handleDelete} />
    </div>
  );
}
