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
let DataBaseRecords = [];
sql.connect(config,function(err){
    if(err)console.log(err);
    var request = new sql.Request();
    request.query("select History from personal.history",function(err,records){
        if(err)console.log(err);
        else{
            records.recordset.forEach(function(record){
                DataBaseRecords.push(record.History);
                console.log(DataBaseRecords);
            })
        }
    });
})
