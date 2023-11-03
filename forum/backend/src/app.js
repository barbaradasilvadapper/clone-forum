const express         = require('express');
const cors            = require('cors');
const app             = express();
require('dotenv').config();
const usersRouter = require('./routes/usersRouter');
const loginRouter = require('./routes/loginRouter');
const postsRouter = require('./routes/postsRouter');
const commentsRouter   = require('./routes/commentsRouter');
const reactionsRouter = require('./routes/reactionsRouter');

app.use(cors());
app.use(express.json());
app.set('port', process.env.PORT);
app.use('/api,', usersRouter);
app.use('/api', loginRouter);
app.use('/api', postsRouter);
app.use('/api', commentsRouter);
app.use('/api', reactionsRouter);
module.exports = app;