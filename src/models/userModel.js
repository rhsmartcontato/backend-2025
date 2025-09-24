import database from '../../db/connection.js';

export async function findAll() {
    try {
        const query = "SELECT id, username, email, photo FROM users;";
        const statement = database.prepare(query);
        const users = statement.all();
        //statement.finalize();
        return users;
    } catch (error) {
        console.log(error);
        throw new Error("Error fetching users: " + error.message);
    }  finally {
        database.close();
    }
}

export async function create(userData) {
    try {
        const query = "INSERT INTO users (username, email) VALUES (??, ?);";
        const statement = database.prepare(query);
        const result = statement.run(userData.username, userData.email, userData.password, userData.photo);
        return result;
    } catch (error) {
        console.log(error);
        throw new Error("Error creating user: " + error.message);
    } finally {
        database.close();
    }
}