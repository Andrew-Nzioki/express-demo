const mongoose= require('mongoose')
const {Schema}=mongoose;

mongoose.connect('mongodb://127.0.0.1:27017/playground')
    .then(()=>console.log('connected to MongoDB'))
    .catch(err=>console.error('could not connect to MongoDB ...',err))

const courseSchema= new Schema({
    name:String,
    author:String,
    tags:[String],
    date:{type:Date,default:Date.now},
    isPublished:Boolean
});
const Course=mongoose.model('Course',courseSchema);

async function createCourse(){

    const course= new Course({
        name:' js course',
        author:'Himo',
        tags:['node','backend'],
        isPublished:false
 });
 const result=await course.save();
 result.f

}
createCourse();
