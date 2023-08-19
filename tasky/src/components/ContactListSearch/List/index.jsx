import { Contact } from "../Contact";
import styles from "./list.module.scss";
import { FaSadTear } from "react-icons/fa";
import { useContacts } from "../ContactsContext";
import { ListContainer } from "./styles";
import { useState } from "react";


// scrollable list container


export function List() {
  const { search, onChangeSearch, filteredContacts } = useContacts();

  return (
    <ListContainer>
        {filteredContacts.map((item)=>{
            return(
                <Contact key={item.uid} user={item} />
            )
        })}
        {filteredContacts.length <= 0 && (
            <div className={styles.empty}>
                <FaSadTear size={50} />
                <div>
                    {search ? (
                        <>
                            <strong>No users found</strong>
                            <p>Try to be more precise with your search</p>
                        </>
                    ) : (
                        <>
                            <strong>You don't have any friends</strong>
                            <p>You can try find users by them email or first and last names</p>
                        </>
                    )}
                </div>
            </div>
        )}
    </ListContainer>
    );
}
