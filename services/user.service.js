export default class UserService {
    /**
     * Retrieves the user from localStorage
     * @returns {null|any}
     */
    static getUser() {
        const user = localStorage.getItem('checkref_user');
        if (user == null) {
            return null;
        }
        return JSON.parse(user);
    }

    /**
     * Retrieves user company
     */
    static getCompany() {
        const user = this.getUser();
        if (!user) {
            return null;
        }

        return user.company;
    }

    /**
     * Retrieves the user token from localStorage
     * @returns {string} token
     */
    static getToken() {
        const token = localStorage.getItem('checkref_token');
        return token;
    }

    static setUser(user) {
        if (typeof user !== 'string') {
            user = JSON.stringify(user);
        }
        localStorage.setItem('checkref_user', user);
    }

    static setToken(token) {
        localStorage.setItem('checkref_token', token);
    }
}
