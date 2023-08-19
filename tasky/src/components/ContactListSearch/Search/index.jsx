import { useContacts } from "../ContactsContext";
import { Input } from "../Input";

export function Search() {
    const { search, onChangeSearch } = useContacts();

    const onChangeSearchSpec = (event) => {
        onChangeSearch(event.target.value);
    }

    return (
        <Input onChange={onChangeSearchSpec} value={search} placeholder='Invite others...'/>
    )
}