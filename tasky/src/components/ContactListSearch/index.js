import { List } from "./List"
import { Search } from "./Search";
import { ContactsContextProvider } from "./ContactsContext";
import { Padding } from "@mui/icons-material";

export function ContactsList(props) {
  return (
    <ContactsContextProvider myuid={props.uid}>
      <main>
        <Search />
        <div style={{ height: 5 }} />
        <List />
      </main>
    </ContactsContextProvider>
  )
}

export default ContactsList;