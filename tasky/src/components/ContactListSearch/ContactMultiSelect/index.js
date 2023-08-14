import { Contact } from "../Contact";
import { useContacts } from "../ContactsContext";
import { useState } from "react";
import React from "react";
import { Select, Tag } from "antd";

const { Option } = Select;

const ContactMultiSelect = () => {
  const { search, onChangeSearch, filteredContacts } = useContacts();
  const [selectedValues, setSelectedValues] = useState([]);

  const customFilterOption = (inputValue, option) => {
    // Custom filtering, the true condition is happening in the onChangeSearch function
    return true;
  };

  const dropdownRenderer = (menu) => {
    return (
      <div>
        {/* Render the selected values */}
        {selectedValues.map((value) => (
          <div key={value.key}>
            <div style={{ color: "white" }}>{value.value}</div>
          </div>
        ))}
        {/* Render the dropdown menu */}
        <div>{menu}</div>
      </div>
    );
  };

  const tagRender = (props) => {
    const { label, value, closable, onClose } = props;
    const onPreventMouseDown = (event) => {
      event.preventDefault();
      event.stopPropagation();
    };
    return (
      <Tag
        onMouseDown={onPreventMouseDown}
        closable={closable}
        onClose={onClose}
        style={{ marginRight: 3 }}
      >
        {value}
      </Tag>
    );
  };

  return (
    <Select
      mode="multiple"
      style={{ width: "100%" }}
      placeholder="Invite your team"
      labelInValue
      value={selectedValues}
      onChange={setSelectedValues}
      onSearch={onChangeSearch}
      filterOption={customFilterOption} // Set the custom filter function
      showSearch
      dropdownStyle={{
        backgroundColor: "#303030",
      }}
      searchValue={search}
      tagRender={tagRender}
    >
      {filteredContacts.map((user) => (
        <Option key={user.uid} value={user.firsName + " " + user.lastName}>
          <Contact key={user.uid} user={user} />
        </Option>
      ))}
    </Select>
  );
};

export default ContactMultiSelect;
