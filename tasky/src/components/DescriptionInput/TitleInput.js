import React from "react";

import TextArea from "@atlaskit/textarea";

export default function TextAreaAppearanceSubtle(props) {
  const input = (e) => {
    console.log(e.target.value);
  };
  const isProject = props.isProject? true : false;
  return (
    <TextArea
      appearance="none"
      placeholder={isProject ? "Write the project name here" : "Write the tasks title here"}
      defaultValue={props.title}
      spellCheck={true}
      maxHeight="10px"
      onInput={props.onInput}
      text-color="white"
      resize="vertical"
      style={{
        color: "white",
        fontSize: '1.5em'
      }}
    />
  );
}
