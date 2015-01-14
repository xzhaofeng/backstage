var Client = require('mysql').Client;  
var client = new Client();   
client.host = '192.166.1.42';  
client.port = 3306;  
client.user = 'root';   
client.password = '123456';   
client.database='backstage';  
  
query(client);  
  
function query(client){   
     client.query(   
         'select * from nav_bar',  
         function(err,res,fields){   
             console.log(res);   
             client.end();   
         }   
     );   
};  