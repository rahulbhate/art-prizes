import React, { Component } from "react";
import { Link } from "react-router-dom";
import exhibitions from "../serverData/exhibitions";
import {
  Button,
  Jumbotron,
  Container,
  Row,
  Col,
  ButtonGroup,
  Table,
  Card,
  Alert
} from "react-bootstrap";

class Exhibitions extends Component {
  render() {
    console.log(exhibitions);
const compare = (a,b) => a.PrizeAmount - b.PrizeAmount;
 
    return (
      <div>
        <Jumbotron>
          <h3>Exhibitions Prizes Page.... </h3>
          <h4>
            <Link to="/courses">Courses</Link>
          </h4>
          <Button variant="warning"> Learn More...</Button>
        </Jumbotron>
       
        { exhibitions.sort(compare).map( (artPrize, i) => {
          return (
            <div className="card" key={i}>
              <Table striped bordered hover variant="light">
                <tbody>
                  <tr>
                    <td>
                      {artPrize.prize_logo != null ?  
                      <img
                        src={`https://art-prizes.com/${artPrize.prize_logo}`}
                        alt="aa"
                        height="50"
                        width="50"
                      /> : "No image available.."
                      }
                    </td>
                    <td> <Alert variant="light">{artPrize.sponsored ? "Sponsored" : "Non Sponsored"} 
                    {i+1} : {artPrize.title}
                    FollowCount: {artPrize.FollowCount} IntentToEnterCount: {artPrize.IntentToEnterCount} ViewCount: {artPrize.ViewCount}
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
export default Exhibitions;
