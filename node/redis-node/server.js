const {promisify} = require("util");
const express = require("express");
const redis = require("redis");
const client = redis.createClient();



const rIncr = promisify(client.incr).bind(client);
const rGet = promisify(client.get).bind(client);
const rSetex = promisify(client.setex).bind(client);


function cache(key, ttl, slowFn) {
    return async function(...props) {
        const cacheResponse = await rGet(key);
        if (cacheResponse) {
            return cacheResponse;
        }
        const result = await slowFn(...props);
        await rSetex(key, ttl, result);
        return result;
    };
}

async function slowFunc() {
    console.log("expensive call!!!");
    const p = new Promise((resolve) => {
        setTimeout(() => {
            resolve(new Date().toUTCString());
        }, 8000);
    });
    return p;
}

const cacheFn = cache("expensive_call", 10, slowFunc);

async function init() {
    const app = express();

    app.get("/pageview", async (req, res) => {
       const views = await rIncr("pageviews");

        res.json({
            status: "ok",
            views,
        });
    });

    app.get("/get", async (req, res) => {
        const data = await cacheFn();
        res.json({
            data,
            status: "ok",
        });
    });
    app.use(express.static("./static/"));
    app.listen(3000);
    console.log("server starting at http://localhost:3000 ");
}
init();


