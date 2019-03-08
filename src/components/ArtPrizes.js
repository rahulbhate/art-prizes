import React, { Component } from "react";
import { Link } from "react-router-dom";
import artPrizes from "../serverData/artprizes";
import {
  Button,
  Jumbotron,
  Container,
  Row,
  Col,
  ButtonGroup,
  Table,
  Card,
  Alert,
  DropdownButton,
  Dropdown
} from "react-bootstrap";

class ArtPrizes extends Component {
  render() {
    console.log(artPrizes);
    const compare = (a, b) => a.PrizeAmount - b.PrizeAmount;
    const filterState = a => a.state === "VIC";
    return (
      <div>
        <Jumbotron>
          <h3>Art Prizes Page.... </h3>
          <h4>
            <Link to="/courses">Courses</Link>
          </h4>
          <Button variant="warning"> Learn More...</Button>
        </Jumbotron>
        <DropdownButton
                  alignRight
                  title="Sort"
                  id="dropdown-menu-align-right"
                >
                  <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                  <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                  <Dropdown.Item eventKey="3">
                    Something else here
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                </DropdownButton>
        {artPrizes
          .sort(compare)
          .filter(filterState)
          .map((artPrize, i) => {
            return (
              <div className="card" key={i}>
                
                <Table striped bordered hover variant="light">
                  <tbody>
                    <tr>
                      <td>
                        {artPrize.prize_logo != null ? (
                          <img
                            src={`https://art-prizes.com/${
                              artPrize.prize_logo
                            }`}
                            alt="aa"
                            height="50"
                            width="50"
                          />
                        ) : (
                          "No image available.."
                        )}
                      </td>
                      <td>
                        {" "}
                        <Alert variant="light">
                          {artPrize.sponsored ? "Sponsored" : "Non Sponsored"}
                          {i + 1} : {artPrize.title}
                          FollowCount: {artPrize.FollowCount}{" "}
                          IntentToEnterCount: {artPrize.IntentToEnterCount}{" "}
                          ViewCount: {artPrize.ViewCount}
                          {artPrize.Location}
                          {artPrize.Currency}: {artPrize.PrizeAmount}
                        </Alert>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            );
          })}
      </div>
    );
  }
}
export default ArtPrizes;
