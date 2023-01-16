const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/playground')
    .then(()=>console.log('connected to MongoDB'))
    .catch(err=>console.error('could not connect to MongoDB ...',err))

const courseSchema= new mongoose.Schema({
    name:String,
    author:String,
    tags:[String],
    date:{type:Date,default:Date.now},
    isPublished:Boolean
})
const Course=mongoose.model('Course',courseSchema);

async function createCourse(){

    const course= new Course({
        name:'Node js course',
        author:'Andrew',
        tags:['node','backend'],
        isPublished:true
 });
 const result=await course.save();
 console.log(result)

}
createCourse();
