import axios from 'axios'


const Auth = {
  userToken : localStorage.getItem('token'),
  isAuthenticated: false, //Has the user authenticated with the server?
  token: null,            //The token received from the server after authentication
  //Authenticate method - username/password and callback
  
  authenticate(username, password, cb) {
    //Use axios to post the username/password to the server
    axios.post('http://localhost:8080/login', {
      username,
    }).then((response) => {
      //If we get a token, update isAuthenticated/token to indicate that
      //the user is now authenticated. Call the callback.
      if(response.data) {
        this.isAuthenticated = true
        // this.token = response.data.token
        cb(true)
      } else {
        cb(false)
      }
    })
  },
  //Signout method - signs out the user, and calls a signout endpoint on
  //the server. 
  signout(token, cb) {
    axios.get('http://localhost:8080/signout', {
      headers: {
        'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
        'Authorization': token
      }
     
    }).then((response) => {
      console.log(response)
      //Reset the authentication properties and token to indicate
      //the user is not logged in. 
      this.isAuthenticated = false
      this.token = null
      localStorage.removeItem('token')

    })
  },
  //Signup method - signs up a user on the server
  signup(username, password, cb) {
    axios.post('http://localhost:8080/signup', {
      username,
      password
    }).then((response) => {
      cb(response.data)
    })
  }
}

export default Auth ;