const mongoose = require('mongoose');


const {WEB_APP_NOTES_MONGODB_HOST,WEB_APP_NOTES_MONGODB_DATABASE} = process.env;
console.log(WEB_APP_NOTES_MONGODB_HOST)
console.log(WEB_APP_NOTES_MONGODB_DATABASE)
const MONGODB_CONNECTION = `mongodb://${WEB_APP_NOTES_MONGODB_HOST}/${WEB_APP_NOTES_MONGODB_DATABASE}`;
    

mongoose.connect('mongodb+srv://gabrieleciuladaite:gabrieleciuladaite@cluster0.cw2h9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/STUDENTS', { useNewUrlParser: true }, (err) => {
    if (!err) { console.log('MongoDB Connection Succeeded.') }
    else { console.log('Error in DB connection : ' + err) }
});

require('./employee.model');