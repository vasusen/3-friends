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
    fetch('https://uinames.com/api/?amount=3&ext')
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
        <h2 class="mt-4 mb-4">Three friends met...</h2>
        <div class="row">
        <div class="col-md-8 mx-auto">
        <div class="row">
        {profiles.map((profile, i) => (
          
            <div key={i} class="col-md-3 offset-md-1">
            <div class="card friends-card">

              <div class="text-center">
                <img class="circle-img" src={profile.photo} alt="Profile phot" />
              </div>

              <div class="card-body">
                <h4 class="card-title"><a>{profile.name} {profile.surname}</a></h4>
                <p class="card-text">from {profile.region}</p>

              </div>
            </div>
            </div>
        ))}
        </div>
        </div>
        </div>

      </div>
    );
  }
}

export default Friends;