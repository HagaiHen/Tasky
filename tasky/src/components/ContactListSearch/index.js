import { List } from "./List"
import { Search } from "./Search";
import { ContactsContextProvider } from "./ContactsContext";
import { Padding } from "@mui/icons-material";

export function ContactsList(props) {
// TODO: implement layout for contacts list box at the right bottom side of the screen
  return (
    <ContactsContextProvider myuid={props.uid}>
      <main>
        <Search />
        <List />
      </main>
    </ContactsContextProvider>
  )
}

export default ContactsList;