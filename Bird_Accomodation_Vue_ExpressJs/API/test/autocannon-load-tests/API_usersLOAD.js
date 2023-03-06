const autocannon = require("autocannon");

const instance = autocannon({
  url: "http://localhost:5000/users",
  connections: 10, // number of concurrent connections
  pipelining: 1, // number of requests to pipeline
  duration: 10, // duration of the test in seconds
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
//   body: JSON.stringify({
//     text: "Some text ~~",
//     day: "2022 - 01- 01",
//     reminder: true,
//   }), // request body
});
autocannon.track(instance, {
  renderProgressBar: true,
  renderLatencyTable: true,
  renderHeadersTable: true,
//   outputStream: fs.createWriteStream("../Scan_results.json"),
});


instance.on("done", (result) => {
  console.log(result);
});
