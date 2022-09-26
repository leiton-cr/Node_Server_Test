import express from "express";
import TestController from "../controller/test.controller.mjs";

export default class TestRouter {

    #router;
    #controller;

    constructor(){
        this.#controller = new TestController();
        this.#router = express.Router();

        this.#router.get('/', ( async (req, res) => {
            //const users = await this.#controller.getUsers();
            //res.status(200).json(users);
            res.status(200).json({ state: "success" })
        }))

        this.#router.post('/', ((req, res) => {
            //this.#controller.insertUser(req.body.name);
            res.status(200).json({ state: "success" });
        }))

    }

    get router(){
        return this.#router;
    }
}

express.Router()
