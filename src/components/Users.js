import React, { Component } from "react";
import axios from "axios";
import { Card, CardDeck } from "react-bootstrap";
class Users extends Component {
  state = {
    response: [],
    loading: false
  };
  componentDidMount() {
    try {
      this.setState({ loading: false });
      axios
        .get(`https://api.github.com/users?since=135`)
        .then(response => response.data)
        .then(response => this.setState({ response, loading: false }));
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    const userData = this.state.response;
    console.log(userData);

    return (
      <div className="card-columns ">
        {this.state.loading ? (
          "loading..."
        ) : (
          <CardDeck>
          <Card border="warning" style={{ width: "18rem" }}>
            {userData.map(user => {
              return (
                <Card.Body>
                  <Card.Img variant="top" src={user.avatar_url} />
                  <Card.Title> Name: {user.login} </Card.Title>

                  <Card.Footer>
                    <small className="text-muted">Type: {user.type}</small>
                  </Card.Footer>
                </Card.Body>
              );
            })}
          </Card>
          </CardDeck>
        )}
      </div>
    );
  }
}

export default Users;
