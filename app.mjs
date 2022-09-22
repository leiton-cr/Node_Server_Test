import Server from "./src/server.mjs";
import dotenv  from "dotenv"

dotenv.config()

const server = new Server();

server.launch();