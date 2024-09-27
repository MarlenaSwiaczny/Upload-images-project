const express = require("express");
const config = require("./config.js");
const apiRouter = require("./routes/api.js");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const fs = require('fs');


const port = config.port;
const app = express();
app.use(cors());
app.use(express.json());

const imagePath = path.join(__dirname, "public/images");
// serwowanie plików z folderu 'public'
app.use("/images", express.static(imagePath));

// routes
app.use("/", apiRouter);

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        return cb(null, "./public/images")
    },
    filename: function(req, file, cb) {
        return cb(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({storage: storage})
// zamiast upload.single (pojedynczy plik) można upload.array lub upload.fields (kilka plików)
app.post("/upload", upload.single("file"), (req, res) => {
    const fileUrl = `http://localhost:${port}/images/${req.file.filename}`;
    console.log("req.file: ", req.file);
    res.status(200).json({ port, fileUrl});  // Zwracamy URL pliku w odpowiedzi
})

// zwracam listę plików z folderu "public/images"
app.get("/gallery", (req, res) => {
    const directoryPath = path.join(__dirname, "public/images");

    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            return res.status(500).json({ error: "Nie można odczytać folderu z plikami." });
        }
        const fileData = files.map(file => ({fileName: file, fileUrl:`http://localhost:${port}/images/${file}`}));
        console.log("fileUrls: ", fileData)
        res.status(200).json(fileData);
    });
});


//server
app.listen(port, () => {
    console.log(`Serwer uruchomiony na porcie http://localhost:${port}`)
})