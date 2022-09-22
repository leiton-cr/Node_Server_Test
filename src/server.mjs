import express from "express";
import cors from "cors";
import TestRouter from "./router/test.router.mjs";

export default class Server {

    #app;
    #testRouter;

    constructor() {
        this.#app = express();
        
        this.#testRouter = new TestRouter();

        this.#setMiddleWares();
        this.#setRoutes();
    }

    #setMiddleWares() {
        this.#app.use(express.json({ limit: "50mb" }));
        this.#app.use(cors());
    }

    #setRoutes() {
        this.#app.use('/test', this.#testRouter.router);
    }

    launch() {
        this.#app.listen(process.env.PORT || 5500, () => console.log("Running on port", process.env.PORT || 5500));
    }
}