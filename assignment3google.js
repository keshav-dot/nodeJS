const https=require('https');
const fs=require('fs');
let url='https://www.google.com';
https.get(url,res=>{
    res.setEncoding('utf8');
    let body='';
    res.on('data',data=>{
        body+=data;
    });
    res.on('end',()=>{
        
        fs.writeFile('googlefile.html',body,err=>{
            if(err) return err;
            console.log('successful');
        });
    });

});