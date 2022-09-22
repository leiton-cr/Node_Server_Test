import DataBase from "../db/db.mjs";

export default class TestController {

    constructor() {
        this.db = new DataBase();
    }

    insertUser(name) {
        const sql = `INSERT INTO Users (name) VALUES ('${name}')`;

        this.db.con.promise().query(sql)
            .then(data => {
                console.log(data);
            })
            .catch(err => {
                console.log(err);
            })
    }

    async getUsers() {
        const sql = `SELECT * FROM Users`;
        const users = await this.db.con.promise().query(sql);
        return users[0]
    }

}