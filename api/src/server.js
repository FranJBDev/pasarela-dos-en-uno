const express = require("express");
const morgan = require("morgan");
const routes = require("./routes/index.routes");
const cors = require("cors");
const bodyParser = require("body-parser");
const { CORS_URL } = process.env;
const server = express();

// Middlewares
server.use(bodyParser.json({ limit: "10mb" }));
server.use(express.json());
server.use(morgan("dev"));
server.use(cors({
  origin: '*'
}));

// server.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Credentials", "true");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Authorization, Origin, X-Requested-With, Content-Type, Accept, Accept Authorization"
//   );
//   if (req.method === "OPTIONS") {
//     res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
//   }
//   next();
// });

// Routes
routes(server);

module.exports = server;
