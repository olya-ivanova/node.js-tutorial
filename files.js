const fs = require("fs");

// fs.readFile("./data.txt", (error, data) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(data);
//   }
// });

// fs.readFile("./data.txt", (error, data) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(data.toString());
//   }
// });

// fs.readFile("./data.txt", "utf-8", (error, data) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(data);
//   }
// });

// fs.writeFile("./data.txt", "New text is here 1", (error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("New data has been added to file");
//   }
// });

// fs.appendFile("./data.txt", "New text is here 2\r\n", (error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("More data has been added to file");
//   }
// });

// fs.mkdir("newFolder", (error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("New folder has been created");
//   }
// });

// if (!fs.existsSync("newFolder")) {
//   fs.mkdir("newFolder", (error) => {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log("New folder has been created");
//     }
//   });
// } else {
//   console.log("The folder already exists");
// }

// remove folder
// if (fs.existsSync("newFolder")) {
//   fs.rmdir("newFolder", (error) => {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log("The folder was deleted");
//     }
//   });
// } else {
//   console.log("The folder has already been deleted");
// }

if (fs.existsSync("./data.txt")) {
  fs.unlink("./data.txt", (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("The file was deleted");
    }
  });
} else {
  console.log("The file has already been deleted");
}
