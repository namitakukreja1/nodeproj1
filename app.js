const Joi = require('joi');
var express = require("express");
var app = express();

app.use(express.json());
const courses = [
  { id:1,name:'course1'},
  { id:2,name:'course2'},
  { id:3,name:'course3'},
]
app.get("/url",(req,res,next)=>{res.json(["Namita","Sakshi"])});
app.get('/api',(req,res)=>{
  res.send(courses);
});
app.get('/api/courses/:id',(req,res)=>{
  const result = courses.find(c => c.id === parseInt(req.params.id));
  if(!result) res.status(404).send('does not exist')//404
  res.send(result);
});
app.post('/api/courses', (req,res) => {
  const course = {
    id: courses.length +1,
    name: req.body.name
  };
  couses.push(course);
  res.send(course);
});
app.post('/api/courses', (req,res) => {
  const schema = {
    name: Joi.string().min(3).required()
  };

  const res1 = Joi.validate(req.body,schema);
  if(result.error) {
    res.status(400).send(result.error.details[0].message);
    return;
  }
  const course = {
    id: courses.length +1,
    name: req.body.name
  };
  couses.push(course);
  res.send(course);

});
const port = process.env.PORT || 3000;
app.listen(3000, () =>{ console.log("Server running on port" +port);});
