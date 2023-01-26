const mongoose= require('mongoose')
const {Schema}=mongoose;

mongoose.connect('mongodb://127.0.0.1:27017/playground')
    .then(()=>console.log('connected to MongoDB'))
    .catch(err=>console.error('could not connect to MongoDB ...',err))

const courseSchema = new Schema({
  name: String,
  author: String,
  media: String,
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
});
const Course = mongoose.model('Course', courseSchema);

async function createCourse() {
  const course = new Course({
    name: ' Angular frontend',
    author: 'Himo',
    media: 'CNN',
    tags: ['node', 'backend'],
    isPublished: false,
  });
  const result = await course.save();
  console.log(result);
}
async function getCourses() {
  const pageNumber = 2;
  const pageSize = 10;
  const courses = await Course.find({ author: 'Giddy', isPublished: true })
    .skip((pageNumber - 1) * pageSize)
    .limit(pageSize)
    .sort({ name: 1 })
    .select({ name: 1, tags: 1 });
  console.log(courses);
}
async function updateCourse(id){
  //Approach: Query first
  //findById()
  //modify its properties
  //save 

  //Approach: Update first
}
getCourses();
