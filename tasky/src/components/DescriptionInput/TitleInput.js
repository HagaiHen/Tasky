import React from "react";

import TextArea from "@atlaskit/textarea";

export default function TextAreaAppearanceSubtle(props) {
  const input = (e) => {
    console.log(e.target.value);
  };
  return (
    <TextArea
      appearance="none"
      placeholder="Write the tasks title here"
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
