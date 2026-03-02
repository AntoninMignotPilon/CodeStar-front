// utilisé pour login et signup
export interface AccountCredentials {
  username: string;
  password: string;
}

// utilisé pour login et signup
export interface AuthResponse {
  token: string;
  message: string;
}