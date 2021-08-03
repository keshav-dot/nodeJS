const xml2json=require('xml-to-json');
xml2json({
    input:'./example.xml',
    output:'./example.json'
},(err,res)=>{
    if(err) console.log(err);
    else console.log(res);
})