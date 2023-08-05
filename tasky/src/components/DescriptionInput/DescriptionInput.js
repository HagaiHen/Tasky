import React from "react";

import TextArea from "@atlaskit/textarea";

export default function TextAreaAppearanceSubtle(props) {
  const input = (e) => {
    console.log(e.target.value);
  };
  return (
    <TextArea
      appearance="none"
      placeholder="Write the tasks description here"
      defaultValue={props.description}
      spellCheck={true}
      maxHeight="100px"
      onInput={props.onInput}
      text-color="white"
      resize="vertical"
      style={{
        color: "white",
      }}
    />
  );
}
