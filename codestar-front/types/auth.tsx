// used for login & signup
export interface AccountCredentials {
  username: string;
  password: string;
}

// used for login & signup
export interface AuthResponse {
  token: string;
  message: string;
}