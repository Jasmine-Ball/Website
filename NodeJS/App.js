// Basic proof of concept working as of 18/10/2021
// Jasmine-Ball
var body = "Check DB";
const http = require('http');
const mysql = require('mysql');
const port = process.env.PORT || 3000;
const con = mysql.createConnection({
    host: /**/,
    user: /**/,
    password: /**/,
    database: /**/
});

function last(displ) {
    const handler = (req, res) => {
};

server.listen(port, err => {
if (err) {
    console.error(err);
}
else {
    console.error(`Server listening on port ${port}`);
    body = displ;
}

});  
    
};

function qy() {
con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT Body FROM articles WHERE Body LIKE 'St%' LIMIT 1", function (err, result, fields)
{
    if (err) throw err;
    const displ = result[0].Body;
    last(displ);
    });
});
};

qy();

const server = http.createServer(function(req, res) {
res.setHeader('Content-type', 'application/json');
res.setHeader('Access-Control-Allow-Origin', '*');
res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
res.setHeader('Access-Control-Allow-Methods', '*');
res.setHeader('Access-Control-Allow-Headers', 'message');
res.writeHead(200);
res.end(JSON.stringify({"id": body}));
});