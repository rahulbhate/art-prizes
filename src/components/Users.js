import React, { Component } from "react";
import axios from "axios";
class Users extends Component {
  state = {
    response: [],
    loading: false
  };
  componentDidMount() {
    try {
      this.setState({ loading: false });
      axios
        .get(`https://api.github.com/users`)
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
      <div>
        {this.state.loading ? (
          "loading..."
        ) : (
          <div>
            {userData.map(user => {
              return (
                <a href="#">
                <div
                  key={user.id}
                  className="card text-white bg-info mb-3"
                  style={{ maxWidth: 150 }}
                >
                  <div class="card-body">
                 
                    <img alt={user.login} src={user.avatar_url} height={100} />
                    <h5 className="card-title">{user.login}</h5>
                   
                  </div>
                </div>
                </a>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

export default Users;
