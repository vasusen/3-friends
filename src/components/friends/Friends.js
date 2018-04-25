import React from 'react';

class Friends extends React.Component {
  constructor() {
    super();

    this.state = {
      loading: false,
      profiles: [],
      error: null,
    }
  }

  componentDidMount() {
    this.setState({ loading: true });

    // get 3 random profiles from uinames.com
    fetch('https://uinames.com/api/?amount=3')
    .then(response => {
      return response.json().then(json => {
        return response.ok ? json : Promise.reject(json);
      });
    })
    .then((data) => {
      this.setState({ 
        profiles: data, 
        loading: false });
    })
    .catch((error) => {
      this.setState({ 
        error: error.errorMessage, 
        loading: false});
    });
  }

  render() {
    console.log(this.state);
    const { loading, error, profiles } = this.state;

    if (loading) {
      return (
        <div>Loading...</div>
      );
    }

    if (error) {
      return (
        <div>{error}</div>
      );
    }

    return (
      <div>
        <h2>Three friends met...</h2>

        {profiles.map((profile, i) => (
          <div key={i}>{profile.name} from {profile.region}</div>
        ))}
      
      </div>
    );
  }
}

export default Friends;