const express = require('express')
const path = require('path')
const multer = require('multer')
const storage = require('./multer').storage
const allowedExtensions = require('./multer').allowedFile

const upload = multer({ 
    storage: storage,
    fileFilter: (req, file, callback) => {
        const ext = path.extname(file.originalname).slice(1); 
        if(allowedExtensions.includes(ext)){
            callback(null, true);
        } else {
            callback(new Error(`this file type ${file.originalname} is not accepted!`));
        }
    }
})

const app = express()

app.use(express.static(path.join(__dirname, "front")))

app.post(
    "/upload",
    upload.array("file"),
    (req, res) => {return res.sendStatus(200)},
    (error, req, res, next) => {
        if (error) {
            var err = res.status(400).json({ error: error.message })
        } else {
            next()
        }
    }
)

app.listen(
    1212, () => {
        console.log('port: 1212')
        console.log('stop: Ctrl + C')
    }
)