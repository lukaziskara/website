const express = require('express'); //განაცხადი express ბიბლიოთეკაზე
const app = express(); // განაცხადი express() ფუნქციაზე ბიბლიოთეკიდან
const port = 8383;

app.use(express.static('public'));



app.get('/info/:dynamic', (req, res) => {
    const { dynamic } = req.params;
    const { key } = req.query;
    console.log(dynamic, key);
    res.status(200).json({info: 'preset text'});
});

app.use(express.json);
app.post('/', (req, res) => {
    console.log("post");
    console.log("req"+req.body);
    const parcel = req.body;
    console.log(parcel);
    if(!parcel) {
        return res.status(400).send({status: 'failed'});
    }
    res.status(200).send({status: 'received'});
});

app.listen(port, () => console.log(`server has started on port: ${port}`));