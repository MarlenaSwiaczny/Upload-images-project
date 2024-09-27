module.exports = {
    homepage: (req, res) => {
        res.send("Homepage ok !!!")
    },
    files: (req, res) => {
        res.send("Files shown")
    }
}