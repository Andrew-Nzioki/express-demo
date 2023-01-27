const mongoose = require('mongoose');
const { Schema } = mongoose;

mongoose.connect('mongodb://127.0.0.1:27017/playground');
const courseSchema = new Schema({
  name: String,
  author: String,
  tags: [String],
  date: Date,
  isPublished: Boolean,
});
const Course = mongoose.model('Course', courseSchema);

// async function getCourses() {
//   const pageNumber = 2;
//   const pageSize = 10;
//   const courses = await Course.find({ author: 'Giddy', isPublished: true })
//     .skip((pageNumber - 1) * pageSize)
//     .limit(pageSize)
//     .sort({ name: 1 })
//     .select({ name: 1, tags: 1 });
//   console.log(courses);
// }

async function updateCourse(id) {
  const result = await Course.updateOne(
    { _id: id },
    {
      $set: {
        author: 'Mosh',
        isPublished: false,
      },
    }
  );
  console.log(result);
}
async function removeCourse(id) {
  const result = await Course.deleteOne({ _id: id });
  console.log(result);
}
removeCourse('5a68fdc3615eda645bc6bdec');
