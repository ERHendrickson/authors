//Import mongoose
const mongoose = require('mongoose');

const database = "aurthors2022";

mongoose.connect(`mongodb://localhost/${database}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then( () => console.log(`You have now connected to database: ${database}`))
    .catch( (err) => console.log('something went wrong when connething to the database', err));