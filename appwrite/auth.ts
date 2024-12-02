
import { SignUpTypes, LoginTypes } from "@/type";
import { Client, Account, ID, OAuthProvider } from "appwrite";
import env from "@/env";

export class AuthService {
    client = new Client();
    account: any;

    constructor() {
        this.client.setEndpoint(env.appwriteUrl).setProject(env.appwriteProjectId);
        this.account = new Account(this.client);
    }

    async createUserAccount({ email, password, firstName, lastName }: SignUpTypes) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, `${firstName} ${lastName}`);

            if (userAccount) {
                return this.login({ email, password });
            } else {
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    async login({ email, password }: LoginTypes) {
        try {
            return await this.account.createEmailPasswordSession(email, password)
        } catch (error) {
            throw error;
        }
    }
    async isLoggedIn(): Promise<boolean> {
        try {
            const data = await this.getCurrentUser();
            return Boolean(data)
        } catch (error) { }

        return false;
    }

    async logout() {
        try {
            return await this.account.deleteSession();
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            throw error;
        }
    }
    async signinUsingGithub() {
        try {
            return this.account.createOAuth2Session(
                OAuthProvider.Github,
                'http://localhost:3000', // redirect here on success
                'htpp://localhost:3000/signup', // redirect here on failure
            )
        } catch (error) {
            throw error;
        }
    }
    async signinUsingGoogle() {
        try {
            return this.account.createOAuth2Session(
                OAuthProvider.Google,
                'http://localhost:3000', // redirect here on success
                'htpp://localhost:3000/signup', // redirect here on failure
            )
        } catch (error) {
            throw error;
        }
    }
}


const authService = new AuthService();

export default authService;
