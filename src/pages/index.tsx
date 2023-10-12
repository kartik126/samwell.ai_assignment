import Image from "next/image";
import Navbar from "@/components/Navbar";
import styled from "styled-components";
import { useState } from "react";
import background from "../../public/background.svg";
import EssayInput from "@/components/EssayInput";

const ContainerWithBackground = styled.div`
  background-image: url("../../public/background.svg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  width: 100%;
  height: 200vh;
  color: #fff;
  text-align: center;
  padding-top: 50px;
`;

const Heading = styled.h1`
  font-size: 4em;
  color: #000;
  font-weight: 400;
  padding: 0 3em;
  padding-top: 0.7em;
  line-height: 1.2;
  height:120px;
  @media (max-width: 768px) {
    padding:1em 0;

    font-size: 2em;
    height:50px;

  }
`;


const PostHeading = styled.p`
  font-size: 1.5em;
  color: rgb(158, 70, 242);
  font-weight: 500;
  line-height: 1;
  padding-bottom: 0.5em;
  padding-top: 0.7em;
  @media (max-width: 768px) {
    padding-top: 0;
    font-size: 1em;
  }
`;

export default function Home() {
  const [first, setfirst] = useState("");

  return (
    <>
      <Navbar />
      <ContainerWithBackground>
        <Image
          src={background}
          layout="fill"
          objectFit="cover"
          alt="background-image"
          style={{ zIndex: -999 }}
        />
        <Heading>Instantly write your next paper with Samwell.ai</Heading>
        <PostHeading>Your easy, pleasant, and productive AI helper</PostHeading>
        <EssayInput/>
      </ContainerWithBackground>
    </>
  );
}
