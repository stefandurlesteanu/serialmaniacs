import styled, { ThemeProvider } from "styled-components";
import React from "react";
import { Link } from "react-router-dom";

const CardDesing = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 90%;
  border-radius: 5px;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
  display: flex;
  margin: 2rem;
  justify-content: space-between;
  flex-flow: row wrap;
`;

const Image = styled.img`
  height: auto;
  width: 60%;
`;

const CardData = styled.div`
  float: right;
  width: 60%;
  height: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 1rem;
  flex: 3 1 55%;
`;

const Button = styled.button`
  font: "sans-serif";
  background: "green";
  font-size: 1.3rem;
  border-color: black;
  border-radius: 50px;
  padding: 7px 10px;
  background: yellow;
  color: black;
  &:hover {
    background: blue;
  }
`;

const Card = (props) => {
  // console.log("!!!!!!!>>>>>" + props.shows);
  const cutSummary =
    props.shows.summary.length > 450
      ? props.shows.summary.slice(0, 450) + " ..."
      : props.shows.summary;

  console.log(cutSummary);
  let content = (
    <CardDesing>
      {"      "}
      <div
        style={{
          flex: "1 1 auto",
          marginRight: "2rem",
        }}
      >
        {" "}
        <Image src={props.shows.image.medium} alt={""}></Image>
      </div>

      <CardData>
        <h2>Title: {props.shows.name}</h2>
        <h3>Runtime: {props.shows.runtime} </h3>
        <h4>
          Summary:{" "}
          <span
            dangerouslySetInnerHTML={{
              __html: cutSummary,
            }}
          ></span>{" "}
        </h4>
        <Link to={"/show/" + props.shows.id}>
          {" "}
          <Button> View more details </Button>
        </Link>
      </CardData>
    </CardDesing>
  );

  return content;
};

export default Card;
