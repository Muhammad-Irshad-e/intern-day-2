const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://irshad:nm22ccsr02@cluster0.xy7yx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
        console.log("Connected")
    
    })
    .catch((err) => {
        console.log(err)
    })