const app = require('express')()
const path = require('path')
const port = process.env.PORT || 8080

app.get('/', (req, res) => res.send('hello!'))
app.get('/index.html', (req, res) =>
  res.sendFile(path.join(__dirname, './index.html'))
)
app.get('/stream', (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream')
  send(res)
})

app.listen(port, () => {
  console.log(`Listen on ${port}`)
})

let i = 0
function send(res) {
  res.write(`data: hello! ${i++}\n\n`)
  setTimeout(() => send(res), 999)
}
