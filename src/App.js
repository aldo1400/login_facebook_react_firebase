import React,{Component} from 'react'
import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyDGIyHvLaxvNulr-xweOkXIsKV6O3q8obM",
    authDomain: "react-facebook-app.firebaseapp.com",
    databaseURL: "https://react-facebook-app.firebaseio.com",
    projectId: "react-facebook-app",
    storageBucket: "react-facebook-app.appspot.com",
    messagingSenderId: "549317698366"

}

firebase.initializeApp(config)

const auth = firebase.auth
const provider = new firebase.auth.FacebookAuthProvider();

class App extends Component {

  state = {
    user: null
  }

  login = () => {
    auth().signInWithPopup(provider)
      .then(({ user }) => {
        this.setState({ user })
      })
  }

  logout = () => {
    auth().signOut().then(() => {
      this.setState({ user: null }) 
    })
  }

  render() {
    const { user } = this.state
    return (
      <div className='App'>
        <p>{user ? `Hi, ${user.displayName}!` : 'Hi!'}</p>
        <button onClick={this.login}>
          Login with Facebook
        </button>

        <button onClick={this.logout}>
          Logout
        </button>
      </div>
    );
  }
}
export default App;
