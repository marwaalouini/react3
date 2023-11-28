import React from "react";
import Card from "react-bootstrap/Card";

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
  return (
    <Card style={{ width: "18rem", margin: "10px" , marginTop: "3%", marginLeft:"2%" ,}}>
      <Card.Img variant="top" src={imageUrl} alt={name} />
      <Card.Body style={{ marginLeft:"15%"}}>
        <Card.Title style= {{marginLeft:"4%"}}>{name}</Card.Title>
        <Card.Text>
          Team: {team}
          <br />
          Nationality: {nationality}
          <br />
          Jersey Number: {jerseyNumber}
          <br />
          Age: {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Player;
