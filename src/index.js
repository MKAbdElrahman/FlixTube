const fs = require("fs");
const path = require("path");
const express = require("express");

const PORT = 3002;
const app = express();
const videoPath = path.join(__dirname, "../videos/SampleVideo_1280x720_1mb.mp4");

app.get("/video", async (req, res) => {
  try {
    const stats = await fs.promises.stat(videoPath);

    res.writeHead(200, {
      "Content-Length": stats.size,
      "Content-Type": "video/mp4",
    });

    const videoStream = fs.createReadStream(videoPath);
    videoStream.pipe(res);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});