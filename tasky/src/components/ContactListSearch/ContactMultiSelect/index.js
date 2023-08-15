import { Contact } from "../Contact";
import { useContacts } from "../ContactsContext";
import { useState } from "react";
import React from "react";
import { Select, Tag } from "antd";

const { Option } = Select;

const ContactMultiSelect = (props) => {
  const { search, onChangeSearch, filteredContacts } = useContacts();

  const selectedValues = props.selectedValues;
  const setSelectedValues = (options) => {
    props.setSelectedValues(
      options.map((option) => {
        return option.key;
      })
    );
  };

  const customFilterOption = (inputValue, option) => {
    // Custom filtering, the true condition is happening in the onChangeSearch function
    return true;
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
    <div
      style={{
        width: "100%",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        overflow: "hidden",
      }}
    >
      <Select
        mode="multiple"
        style={{
          width: "100%",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
        placeholder="Invite your team"
        labelInValue
        onChange={setSelectedValues}
        onSearch={onChangeSearch}
        filterOption={customFilterOption} // Set the custom filter function
        showSearch
        dropdownStyle={{
          backgroundColor: "#303030",
        }}
        searchValue={search}
        tagRender={tagRender}
        size="large"
      >
        {filteredContacts.map((user) => (
          <Option key={user.uid} value={user.firstName + " " + user.lastName}>
            <Contact key={user.uid} user={user} />
          </Option>
        ))}
      </Select>
    </div>
  );
};

export default ContactMultiSelect;
