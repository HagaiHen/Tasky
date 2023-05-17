import React, { useState } from "react";
import {
  TaskContainer,
  Priority,
  Title,
  Description,
  Spacer,
  StatusText,
  Selected,
  DescriptionContainer,
} from "./styles";
import Image from "next/image";
import Modal from "react-modal";
import Comments from "./Comments";

const Task = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const formatDescription = (desc) => {
    if (desc.length > 20) {
      return desc.substring(0, 17) + "...";
    }
    return desc;
  };
  return (
    <TaskContainer onClick={()=>{openModal()}}>
      <Priority color={props.color} />
      <Title>TAS - 1</Title>
      <DescriptionContainer>
        <Description size={props.description.length}>
          {formatDescription(props.description)}
        </Description>
      </DescriptionContainer>
      <Spacer />
      <Title>Status: </Title>
      <Selected>
        <StatusText>{"IN PROGRESS"}</StatusText>
      </Selected>
      <Spacer />
      <Title>Assignee: </Title>
      <Selected>
        <StatusText>{"Bar Goldenberg"}</StatusText>
      </Selected>
      <Spacer />
      <Image
        src={"./Trash.svg"}
        width={20}
        height={20}
        style={{ alignSelf: "center", marginLeft: "33px" }}
        onClick={() => {
          console.log("delete");
        }}
      />
      <Modal
        isOpen={isModalOpen}
        onRequestClose={()=>{closeModal()}}
        // Other modal props and styles...
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
          content: {
            width: "500px",
            height: "300px",
            margin: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "white",
          },
        }}
        contentLabel="Task Modal"
      >
        {/* Modal content */}
        <h3>Modal Title</h3>
        <p style={{ whiteSpace: "nowrap" }}>Add the Task description here...</p>

        <Comments />

        <button onClick={()=>{closeModal()}} style={{ marginTop: "10px" }}>
          Close
        </button>
      </Modal>
    </TaskContainer>
  );
};

export default Task;
