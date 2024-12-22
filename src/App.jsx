import ContactList from "./components/ContactList/ContactList"
import { useState, useEffect } from "react";
import SearchBox from './components/SearchBox/SearchBox';
import ContactForm from './components/ContactForm/ContactForm';
const App = () => {
   
 const loadContacts = () => {
    const savedContacts = localStorage.getItem("contacts");
    return savedContacts ? JSON.parse(savedContacts) : [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' }
    ];
 };
  
   const [contacts, setContacts] = useState(loadContacts);
  const [filter, setFilter] = useState('');

    useEffect(() => {
    if (contacts.length > 0) {
      localStorage.setItem("contacts", JSON.stringify(contacts));
    }
  }, [contacts]);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

    const addContact = (newContact) => {
    setContacts(prevContacts => [...prevContacts, newContact]);
    };
  
    const deleteContact = (contactId) => {
    setContacts(prevContacts => prevContacts.filter(contact => contact.id !== contactId));
  };

  return (
  <div>
  <h1>Phonebook</h1>
  <ContactForm onAddContact={addContact}/>
  <SearchBox value={filter} onChange={handleFilterChange}/>
  <ContactList contacts={filteredContacts} onDelete={deleteContact}/>
</div>

)


}
 
export default App
