import decode from "jwt-decode";

class AuthService {
  getUser() {
    return decode(localStorage.getItem("id_token"));
  }
  loggedIn() {
    return localStorage.getItem("id_token") ? true : false;
  }
  login(idToken) {
    localStorage.setItem("id_token", idToken);
    window.location.assign("/profile");
  }
  logout() {
    localStorage.removeItem("id_token");
    window.location.reload();
  }
}

export default new AuthService();
