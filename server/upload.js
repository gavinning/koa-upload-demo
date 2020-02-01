const mkdirp = require('mkdirp')
const formidable = require('formidable')

const options = {
    uploadDir: '/tmp/demo'
}

// 防止目录不存在
options.uploadDir && mkdirp(options.uploadDir)

const form = formidable(options)

module.exports = (req) => {
    return new Promise((resolve, reject) => {
        form.parse(req, (err, params, files) => {
            err ? reject(err) : resolve({ params, files })
        })
    })
}
