import React from "react";
import Image from "next/image";
import { HeaderContainer } from "./styles";
import { useRouter } from "next/router";
const Header = () => {
  const router = useRouter();
  return (
    <HeaderContainer>
      <Image
        width={160}
        height={58}
        src="./Logo.svg"
        style={{ marginLeft: "15px" }}
      />
      <Image
        width={131.5}
        height={20}
        src="./HomePageUC.svg"
        style={{ marginLeft: "10%", marginTop: "2%", cursor: "pointer" }}
        onClick={() => {
          router.push("/homepage");
        }}
      />
      <Image
        width={108.5}
        height={20}
        src="./CalendarUC.svg"
        style={{ marginLeft: "2%", marginTop: "2%", cursor: "pointer" }}
        onClick={() => {
          router.push("/calendar");
        }}
      />
      <Image
        width={99}
        height={40}
        src="./BacklogClicked.svg"
        style={{ marginLeft: "2%", marginTop: "2%", cursor: "pointer" }}
        onClick={() => {
          router.push("/backlog");
        }}
      />
      <Image
        width={70}
        height={38}
        src="./ProfileClicked.svg"
        style={{ marginLeft: "46%", marginTop: "1.2%", cursor: "pointer" }}
      />
    </HeaderContainer>
  );
};

export default Header;
