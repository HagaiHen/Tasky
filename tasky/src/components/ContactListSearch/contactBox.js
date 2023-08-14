import { List } from "./List"
import { Search } from "./Search";
import { ContactsContextProvider } from "./ContactsContext";

export function ContactsList() {
// TODO: implement layout for contacts list box at the right bottom side of the screen
  return (
    <ContactsContextProvider>
      <main>
        <Search />
        <List />
      </main>
    </ContactsContextProvider>
  )
}

export default ContactsList;