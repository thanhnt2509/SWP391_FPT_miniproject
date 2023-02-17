const autocannon = require("autocannon");

const instance = autocannon({
  url: "http://localhost:5173/",
  connections: 10, // number of concurrent connections
  pipelining: 1, // number of requests to pipeline
  duration: 10, // duration of the test in seconds
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
  //   body: JSON.stringify({
  //   }), // request body
});

autocannon.track(instance, {
  renderProgressBar: true,
  renderLatencyTable: true,
  renderHeadersTable: true,
});

instance.on("done", (result) => {
  console.log(result);
});
