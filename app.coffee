express = require 'express'
app = express()

app.get '/', (req, res) ->
    res.send 'Hello from <a href="http://appfog.com">AppFog.com</a>'

app.listen process.env.VCAP_APP_PORT || 3000
