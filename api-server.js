const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");

const apiPort = process.env.REACT_APP_API_PORT || 3001;
const apiDomain = process.env.REACT_APP_API_URL || `http://localhost:${apiPort}`;
const websitePort = process.env.REACT_APP_WEBSITE_PORT || 3000;
const websiteDomain = process.env.REACT_APP_WEBSITE_URL || `http://localhost:${websitePort}`


const app = express();


app.use(cors({
    origin: websiteDomain,
    allowedHeaders: ["content-type"],
    methods: ["GET", "PUT", "POST", "DELETE"],
    credentials: true,
}));

app.use(morgan("dev"));
app.use(helmet({
    contentSecurityPolicy: false,
}));

// custom API that requires session verification
app.get("/sessioninfo", async (req, res) => {
    // TODO: verify session
    // let session = req.session;
    // res.send({
    //     sessionHandle: session.getHandle(),
    //     userId: session.getUserId(),
    //     jwtPayload: session.getJWTPayload(),
    //     sessionData: await session.getSessionData(),
    // });
});

app.listen(apiPort, () => console.log(`API Server listening on port ${apiPort}`));