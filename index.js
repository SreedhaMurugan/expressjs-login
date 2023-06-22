const express = require ('express');
// const port = process.env.PORT || 5000;


const app = express();
app.use(
    express.urlencoded({
      extended: true,
    })
  )

// Create application/x-www-form-urlencoded parser  



  //this is basically to decode the data send through  html form

app.use(express.static('public'));


//Basic Authentication in express js

app.use((req, res, next) => {
  
  if(!req.get('Authorization')){
      var err = new Error('Not Authenticated!')
      
      res.status(401).set('WWW-Authenticate', 'Basic')
      next(err)
  }
 
  else{
      var credentials = Buffer.from(req.get('Authorization').split(' ')[1], 'base64')
     
      .toString()
     
      .split(':')
      

      var username = credentials[0]
      var password = credentials[1]
      
      
      if(!(username === 'admin' && password === 'Welcome')){
          var err = new Error('Not Authenticated!')
          
          res.status(401).set('WWW-Authenticate', 'Basic')
          next(err)
      } 
      res.status(200)
      // Continue the execution
      next()
  }
})
app.get('/',(req,res)=>{
  res.redirect("/todo");
})
app.get('/login',(req,res)=>{
res.sendFile(__dirname + '/index.html')

})

app.get('/todo',(req,res)=>{
    res.sendFile(__dirname + '/public/main.html')
    })
    

// app.post('/loginPost',(req,res)=>{
// console.log(req.body);
// })

//This is basically to listen on port
// app.listen(4000,()=>{
// console.log("Server started at 4000")
// });

var server = app.listen(8000, function () {  
     host = server.address().address  
    var port = server.address().port  
    console.log("varExample app listening at http://%s:%s", host, port)  
  })  

app.post('/post', function (req, res) {  
    //console.log(req.body);
    // Prepare output in JSON format  
    let response = {  
        email:req.body.email,  
        password:req.body.password  
    };  
    console.log(response,'hiiii');
    console.log(response.email,'hiiii');
      

    // res.end(JSON.stringify(response));  
    
    if(response.email=="admin" && response.password=="Welcome" ){
        res.redirect("/todo");
        console.log(res.redirect,"this");
    }
    else{
        
    res.send("Please give valid username and password");
    }
 })  

 //Query Params 
 app.get('/loginti',(req,res)=>{
  // res.sendFile(__dirname + '/index.html')
  console.log(req.query);
  return res.json({
   email:req.query.email,
   password:req.query.password
   

       
  //  console.log('email :'+ req.query.email);
  
  //  console.log('password :' + req.query.password);
  })
})


