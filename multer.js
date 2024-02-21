const multer = require('multer')
const path = require('path')

const allowedExtensions = [
    'txt',
    'docx',
    'doc',
    'pdf',
    'xls',
    'xlsx',
    'csv',
    'ppt',
    'pptx',
    'jpg',
    'jpeg',
    'png',
    'gif',
    'bmp',
    'mp3',
    'mp4',
    'mov',
    'avi',
    'mkv',
    'zip',
    'rar',
    'xml',
    'MOV'
];

const storage = multer.diskStorage(
    {
        destination: (req, file, callback) => {
            callback(null, path.resolve("uploads"))
        },
        filename: (req, file, callback) => {
            const time = new Date().getTime()
            callback(null, `${time}_${file.originalname}`)
        },
    } 
) 

exports.storage = storage
exports.allowedFile = allowedExtensions