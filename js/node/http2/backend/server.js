import http2 from "http2";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import handler from "serve-handler";
import nanobuffer from "nanobuffer";

let connections = [];

const msg = new nanobuffer(50);
const getMsgs = () => Array.from(msg).reverse();

msg.push({
  user: "amsem",
  text: "hi amsem welcome back !",
  time: Date.now(),
});
// http2 only works over HTTPS
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const server = http2.createSecureServer({
  cert: fs.readFileSync(path.join(__dirname, "./../server.crt")),
  key: fs.readFileSync(path.join(__dirname, "./../key.pem")),
});
server.on("stream", (stream, headers) => {
    const path = headers[":path"];
    const method = headers[":method"];
    if (path === '/msgs' && method == "GET") {
        console.log('connected to a stream : '+ stream.id);
        stream.respond ({
            ":status": 200,
            "content-type": "text/plant; charset=utf-8",
        });
        stream.write(JSON.stringify({ msg: getMsgs()}));
        stream.on("close", () => {
            console.log("disconnected" + stream.id);
        });
    }
});
server.on("request", async (req, res) => {
  const path = req.headers[":path"];
  const method = req.headers[":method"];

  if (path !== "/msgs") {
    // handle the static assets
    return handler(req, res, {
      public: "./frontend",
    });
  } else if (method === "POST") {
    // get data out of post
    const buffers = [];
    for await (const chunk of req) {
      buffers.push(chunk);
    }
    const data = Buffer.concat(buffers).toString();
    const { user, text } = JSON.parse(data);
    

  }
});

// start listening
const port = process.env.PORT || 8080;
server.listen(port, () =>
  console.log(
    `Server running at https://localhost:${port} - make sure you're on httpS, not http`
  )
);
