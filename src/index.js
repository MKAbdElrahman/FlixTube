const { promises: fsPromises, createReadStream } = require("fs");
const { join } = require("path");
const express = require("express");


const PORT = 3002;
const app = express();
const videoPath = join(__dirname, "../videos/SampleVideo_1280x720_1mb.mp4");


///////////////MAIN//////////////////
app.get("/video", serveVideo);
startServer();
/////////////////////////////////////



function startServer() {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
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

  
 
  
 