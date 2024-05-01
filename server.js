const  express =require('express');
const  path =require('path');
const app = express();

const sql= require("mssql/msnodesqlv8");
var config = {
    server :"DESKTOP-IRSO487\\SQLEXPRESS",
    database : "person",
    driver:"msnodesqlv8",
    options:{
        trustedConnection:true,
        userName: "personal", 
        password: "setting"
    }
}

// let DataBaseRecords = [];
// sql.connect(config,function(err){
//     if(err)console.log(err);
//     var request = new sql.Request();
//     request.query("select History from personal.history",function(err,records){
//         if(err)console.log(err);
//         else{
//             records.recordset.forEach(function(record){
//                 DataBaseRecords.push(record.History);
//             })
//         }
//     });
// })


app.get('/api/history',(req,res)=>{
    let movies = [];
    const searchTerm = req.query.search;
    movies.length = 0;
    sql.connect(config,function(err){
            if(err)console.log(err);
            var request = new sql.Request();
            request.query(`SELECT LOWER(History) AS History FROM personal.history WHERE LOWER(History) LIKE '%${searchTerm.toLowerCase()}%'`,function(err,records){
                if(err)console.log(err);
                else{
                    records.recordset.forEach(function(record){
                        movies.push(record.History);
                    });
                    res.json(movies);
                }
            });
    })
});


app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'));
});
app.listen(8080,()=>{
    console.log("Server is listening on port 8080");
});