const test = require('ava')
const Message = require('../../../models//Message')
const User = require('../../../models/User')

const user = new User({

	email: "email@email.com",
  password: "password",

  verified:true,
  verificationToken: 'verificationToken',
  registrationCode: 'registrationCode',
  passwordResetToken: 'passwordResetToken',

  // Profile data
  firstname: 'firstname',
  lastname: 'lastname',
  nickname: 'nickname',
  serviceInterests: 'serviceInterests',
  picture: 'picture',
  birthdate: 'birthdate',
  gender: 'gender',
  race: 'race',
  groupIdentification: 'groupId1',
  computerAccess: 'computerAccess',
  preferredTimes: '10:00am',
  phone: 5555555555,

  highschool: 'highschool',
  currentGrade: 'currentGrade',
  expectedGraduation: 'expectedGraduation',
  difficultAcademicSubject: 'difficultAcademicSubject',

  difficultCollegeProcess: ['yes'],
  highestLevelEducation: ['highestLevelEducation'],
  hasGuidanceCounselor: 'no',
  favoriteAcademicSubject: 'favoriteAcademicSubject',
  gpa: 'gpa',
  collegeApplicationsText: 'collegeApplicationsText',
  commonCollegeDocs: ['commonCollegeDocs'],
  college: 'college',
  academicInterestsText: 'academicInterestsText',
  testScoresText: 'testScoresText',
  advancedCoursesText: 'advancedCoursesText',
  extracurricularActivitesText: 'extracurricularActivitesText',
  heardFrom: 'heardFrom',
  referred: 'referred',
  preferredContactMethod: ['preferredContactMethod', 'preferredContactMethod2'],

  availability: {
    Sunday: {
      '12a': false,
      '1a': false,
      '2a': false,
      '3a': false,
      '4a': false,
      '5a': false,
      '6a': false,
      '7a': false,
      '8a': false,
      '9a': false,
      '10a': false,
      '11a': false,
      '12p': false,
      '1p': false,
      '2p': false,
      '3p': false,
      '4p': false,
      '5p': false,
      '6p': false,
      '7p': false,
      '8p': false,
      '9p': false,
      '10p': false,
      '11p': false
    },
    Monday: {
      '12a': false,
      '1a': false,
      '2a': false,
      '3a': false,
      '4a': false,
      '5a': false,
      '6a': false,
      '7a': false,
      '8a': false,
      '9a': false,
      '10a': false,
      '11a': false,
      '12p': false,
      '1p': false,
      '2p': false,
      '3p': false,
      '4p': false,
      '5p': false,
      '6p': false,
      '7p': false,
      '8p': false,
      '9p': false,
      '10p': false,
      '11p': false
    },
    Tuesday: {
      '12a': false,
      '1a': false,
      '2a': false,
      '3a': false,
      '4a': false,
      '5a': false,
      '6a': false,
      '7a': false,
      '8a': false,
      '9a': false,
      '10a': false,
      '11a': false,
      '12p': false,
      '1p': false,
      '2p': false,
      '3p': false,
      '4p': false,
      '5p': false,
      '6p': false,
      '7p': false,
      '8p': false,
      '9p': false,
      '10p': false,
      '11p': false
    },
    Wednesday: {
      '12a': false,
      '1a': false,
      '2a': false,
      '3a': false,
      '4a': false,
      '5a': false,
      '6a': false,
      '7a': false,
      '8a': false,
      '9a': false,
      '10a': false,
      '11a': false,
      '12p': false,
      '1p': false,
      '2p': false,
      '3p': false,
      '4p': false,
      '5p': false,
      '6p': false,
      '7p': false,
      '8p': false,
      '9p': false,
      '10p': false,
      '11p': false
    },
    Thursday: {
      '12a': false,
      '1a': false,
      '2a': false,
      '3a': false,
      '4a': false,
      '5a': false,
      '6a': false,
      '7a': false,
      '8a': false,
      '9a': false,
      '10a': false,
      '11a': false,
      '12p': false,
      '1p': false,
      '2p': false,
      '3p': false,
      '4p': false,
      '5p': false,
      '6p': false,
      '7p': false,
      '8p': false,
      '9p': false,
      '10p': false,
      '11p': false
    },
    Friday: {
      '12a': false,
      '1a': false,
      '2a': false,
      '3a': false,
      '4a': false,
      '5a': false,
      '6a': false,
      '7a': false,
      '8a': false,
      '9a': false,
      '10a': false,
      '11a': false,
      '12p': false,
      '1p': false,
      '2p': false,
      '3p': false,
      '4p': false,
      '5p': false,
      '6p': false,
      '7p': false,
      '8p': false,
      '9p': false,
      '10p': false,
      '11p': false
    },
    Saturday: {
      '12a': true,
      '1a': true,
      '2a': true,
      '3a': true,
      '4a': true,
      '5a': true,
      '6a': true,
      '7a': true,
      '8a': true,
      '9a': true,
      '10a': true,
      '11a': true,
      '12p': true,
      '1p': true,
      '2p': true,
      '3p': true,
      '4p': true,
      '5p': true,
      '6p': true,
      '7p': true,
      '8p': true,
      '9p': true,
      '10p': true,
      '11p': true
    }
  },
  hasSchedule: false,
  timezone: "timezone",
  pastSessions: null
})

test('Test creation of Message scheme object', t => {
  let message = new Message({contents: 'message' })
  message.user = user

  t.is(message.createdAt.getDate(), new Date().getDate())
	t.is(message.contents, 'message')
	t.is(message.user.email, 'email@email.com')
}) 
