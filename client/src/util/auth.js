import decode from "jwt-decode";
//This would also be more secure if cookies were utilized...
class AuthService {
  getUser() {
    return decode(localStorage.getItem("id_token"));
  }
  loggedIn() {
    //This needs to be refactored to decode the token if one is returned and check the expiration.
    return localStorage.getItem("id_token") ? true : false;
  }
  login(idToken) {
    localStorage.setItem("id_token", idToken);
    //Manipulating window isn't reactive.
    //Auth shouldn't be responsible for handling navigation,
    //just decoding and writing the token.
    //the components where this is called should render the relevant component...
    window.location.assign("/");
  }
  logout() {
    localStorage.removeItem("id_token");
    window.location.assign("/");
  }
}

export default new AuthService();
