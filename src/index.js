const { promises: fsPromises, createReadStream } = require("fs");
const { join } = require("path");
const express = require("express");


const app = express();
const videoPath = join(__dirname, "../videos/SampleVideo_1280x720_1mb.mp4");



///////////////MAIN//////////////////
const PORT = getPortNumber();
app.get("/video", serveVideo);
startServer(PORT);
/////////////////////////////////////

function getPortNumber() {
  if (!process.env.PORT) {
    throw new Error(`Please specify the port number for the HTTP server with the environment variable PORT.`);
  }
  return process.env.PORT;
}


function startServer(portNumber) {
    app.listen(portNumber, () => {
      console.log(`Server is running on port ${portNumber}`);
    });
}

  async function serveVideo(req, res) {
    try {
      const stats = await getFileStats(videoPath);
      setResponseHeaders(res, stats.size);
      const videoStream = createReadStream(videoPath);
      videoStream.pipe(res);
    } catch (error) {
      handleServerError(res, error);
    }
  }
  async function getFileStats(filePath) {
    return fsPromises.stat(filePath);
  }

  function setResponseHeaders(res, fileSize) {
    res.set({
      "Content-Length": fileSize,
      "Content-Type": "video/mp4",
    });
  }

function handleServerError(res, error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  } 

  