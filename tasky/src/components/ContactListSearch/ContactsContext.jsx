import { createContext, useState, useEffect, useContext } from 'react';
import { getAllUsers } from '../../controller/UserController';
import { set } from 'date-fns';



export const ContactsContext = createContext({});

export function ContactsContextProvider({ children }) {
    const [contacts, setContacts] = useState([]);
    const [search , setSearch] = useState("");

    async function loadSavedContacts() {
        setContacts(await getAllUsers());
    }

    useEffect(() => {
        loadSavedContacts();
    }, []);

    function addContact(newContact) {
        setContacts([
        ...contacts,
        newContact
        ])
    }

    function deleteContact(contactId) {
        const newContacts = contacts.filter((item) => {
        return item.id !== contactId
        });
        setContacts(newContacts);
    }

    function onChangeSearch(value) {
        setSearch(value)
    }

    const filteredContacts = contacts.filter((user) => {
        const userFullName = user.firstName + " " + user.lastName;
        return userFullName.toLowerCase().includes(search.toLowerCase());
    });

    return (
        <ContactsContext.Provider value={{ addContact, contacts, search, deleteContact, onChangeSearch, filteredContacts }}>
            {children}
        </ContactsContext.Provider>
    )
}

export function useContacts() {
    const context = useContext(ContactsContext);
    return context
}