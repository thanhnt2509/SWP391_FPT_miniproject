const autocannon = require("autocannon");

const instance = autocannon({
  url: "http://localhost:5000/users",
  connections: 1, // number of concurrent connections
  pipelining: 1, // number of requests to pipeline
  duration: 1, // duration of the test in seconds
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    user_id : 2,
    name : `CUSTOMER_TEST_${Math.floor(Math.random() * 1000)}`,
}), // request body
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
