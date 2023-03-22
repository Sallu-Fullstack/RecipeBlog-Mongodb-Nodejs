const mongoose = require('mongoose');
const uri = mongodb+srv://sallu_fullstack2:sallu_fullstack2%40mongodb@sallu-fullstack.yxk0z0w.mongodb.net/Recipes?retryWrites=true&w=majority;
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
  console.log('Connected')
});

// Models
require('./Category');
require('./Recipe');
