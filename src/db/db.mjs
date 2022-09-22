import mysql from "mysql2"

export default class DataBase {

    #con;

    constructor() {
        
        this.#createConnection();

        this.#con.connect(function (err) {
            if (err) throw err;
            console.log("Connected!");
        });
    }

    #createConnection() {
        this.#con = mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            port: process.env.DB_PORT,
            password: process.env.DB_PASS,
            database: process.env.DB_DATABASE,
        });
    }

    get con () {
        return this.#con;
    }

}