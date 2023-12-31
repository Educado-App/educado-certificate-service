const mongoose = require('mongoose');
const { Schema } = mongoose;

// TODO: Course creator should prolly have an id / firstname / lastname as well
const studentCertificateSchema = new Schema({
	courseName: {
		type: String,
		required: [true, 'courseName is required']
	},
	courseId: {
		type: Schema.Types.ObjectId,
		ref: 'courses'
	},
	studentId: {
		type: Schema.Types.ObjectId,
		ref: 'users'
	},
	studentFirstName: {
		type: String,
		required: [true, 'studentFirstName is required'],
	},
	studentLastName: {
		type: String,
		required: [true, 'studentLastName is required'],
	},
	courseCreator: {
		type: String,
		required: [true, 'courseCreator is required']
	},
	estimatedCourseDuration: {
		type: Number,
		required: [true, 'estimatedCourseDuration is required']
	},
	dateOfCompletion: {
		type: Date,
		required: [true, 'dateOfCompletion is required'],
		validate: {
			validator: function (date) {
				return date < Date.now();
			}
		}
	},
  courseCategory: {
    type: String,
    required: [true, 'courseCategory is required']
  },
});

const StudentCertificateModel = mongoose.model('student-certificates', studentCertificateSchema);

module.exports = StudentCertificateModel;