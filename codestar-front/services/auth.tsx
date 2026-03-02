/* Services d'authentification (login & signup) */
import { AuthResponse, AccountCredentials } from "@/types/auth";

const BACK_REST = process.env.NEXT_PUBLIC_BACK_API_URL;

export const authService = {
    // Fonction de login
    login: async (credentials: AccountCredentials): Promise<AuthResponse> => {
        const response = await fetch(`${BACK_REST}/api/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || "Login failed");
        }

        return response.json();
    },

    // Fonction de création du compte
    signup: async (credentials: AccountCredentials): Promise<AuthResponse> => {
        const response = await fetch(`${BACK_REST}/api/auth/signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || "Signup failed");
        }

        return response.json();
    },
};