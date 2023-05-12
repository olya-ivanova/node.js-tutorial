const fs = require("fs");

// const readStream = fs.createReadStream("bigtext.txt");

// readStream.on("data", (chunk) => {
//   console.log("### chunk ###");
//   console.log(chunk);
// });

// readStream.on("data", (chunk) => {
//   console.log("### chunk ###");
//   console.log(chunk.toString());
// });

// const readStream = fs.createReadStream("bigtext.txt", { encoding: "utf-8" });
// const writeStream = fs.createWriteStream("writestream.txt");

// readStream.on("data", (chunk) => {
//   console.log("### chunk ###");
//   console.log(chunk);

//   writeStream.write("\n### new chunk ###\n");
//   writeStream.write(chunk);
// });

const readStream = fs.createReadStream("bigtext.txt", { encoding: "utf-8" });
const writeStream = fs.createWriteStream("writestream.txt");

//pipe() - connects readable stream and writable stream

readStream.pipe(writeStream);
