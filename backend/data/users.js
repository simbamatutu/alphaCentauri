import bcryptjs from 'bcryptjs';
const teachers = [
  {
    name: 'Pete Tosh',
    loginName: 'pTosh',
    profilePic: '/resourses/dummyPerson.png',
    password: bcryptjs.hashSync('123456', 10),
    email: 'toshtosh@mail.com',
    about:
      "I'm baby farm-to-table aliquip YOLO DIY butcher kickstarter ullamco heirloom. Cillum next level salvia occupy lomo in activated charcoal, non laboris locavore food truck consequat do. Mustache veniam mumblecore health goth swag XOXO jean shorts af ut authentic offal. Ipsum trust fund aliquip irony bitters mumblecore direct trade. Bushwick blog small batch, blue bottle pariatur try-hard nisi glossier raw denim voluptate velit ugh cupidatat hammock hashtag.",
    isAdmin: 'true',
    isTeacher: 'true',
    isStudent: 'false',
    teacherNumber: 'LB7737373',
    coursesTaught: [
      {
        name: 'Chemistry',
        courseImage: '/resourses/chemistry.png',
        teacher: 'Steve Rogers',
        teacherImg: '/resourses/dummyPerson.png',
        teacherIntro:
          'Steve has sold more than 1,000,000 of his online business & self improvement courses in 12 languages in 196 countries and his courses have been profiled in Business Insider, NBC, Inc, Forbes, CNN, Entrepreneur & on other business news websites. Chris is the author of the #1 best selling online business course called "An Entire MBA in 1 Course®” & many other courses.',
        overview:
          'Microsoft Excel for Beginner and Intermediate Users: Become Proficient with the world’s #1 productivity software.Accounting, Financial Statements, and Financial Ratios: Making Sense of Debits and Credits, Profit and Loss statements, Balance Sheets, Liquidity, Solvency, Profitability, and Growth Financial Ratios Finance Basics: Interest Rates, Financial Math Calculations, Loan Calculations, Time Value of Money, Present and Future Value of Cash Flows Finance Basics: Interest Rates, Financial Math Calculations, Loan Calculations, Time Value of Money, Present and Future Value of Cash Flows Finance Basics: Interest Rates, Financial Math Calculations, Loan Calculations, Time Value of Money, Present and Future Value of Cash Flows',
        school: '13',
        level: '2',
        courseNum: 'BJ201082',
        category: ['Science'],
        maxCapacity: '200',
        enrolled: '200',
        lectures: '10',
        quiz: 'Yes',
        startingWeek: '1',
        endingWeek: '17',
        exam: 'Yes',
        language: 'Chinese',
        assingments: 'Yes',
      },
    ],
  },
  {
    name: 'John Chibadura',
    loginName: 'joechiba',
    profilePic: '/resourses/dummyPerson.png',
    email: 'johnChibadura@mail.com',
    password: bcryptjs.hashSync('123456', 10),
    about:
      "I'm baby farm-to-table aliquip YOLO DIY butcher kickstarter ullamco heirloom. Cillum next level salvia occupy lomo in activated charcoal, non laboris locavore food truck consequat do. Mustache veniam mumblecore health goth swag XOXO jean shorts af ut authentic offal. Ipsum trust fund aliquip irony bitters mumblecore direct trade. Bushwick blog small batch, blue bottle pariatur try-hard nisi glossier raw denim voluptate velit ugh cupidatat hammock hashtag.",

    teacherNumber: 'LB7737373',
    isAdmin: 'true',
    isTeacher: 'true',
    isStudent: 'false',
  },
  {
    name: 'Marshall Munhu',
    loginName: 'MarMunhu',
    email: 'marshall@mail.com',
    profilePic: '/resourses/dummyPerson.png',
    password: bcryptjs.hashSync('123456', 10),
    about:
      'Fetch provides a generic definition of Request and Response objects (and other things involved with network requests). This will allow them to be used wherever they are needed in the future, whether it’s for service workers, Cache API, and other similar things that handle or modify requests and responses, or any kind of use case that might require you to generate your responses programmatically (that is, the use of computer program or personal programming instructions)',

    teacherNumber: 'LB7737373',
    coursesTaught: [
      {
        courseName: 'Python',
        courseImage: '/resourses/python.png',
        teacher: 'Steve Rogers',
        teacherImg: '/resourses/dummyPerson.png',
        teacherIntro:
          'Steve has sold more than 1,000,000 of his online business & self improvement courses in 12 languages in 196 countries and his courses have been profiled in Business Insider, NBC, Inc, Forbes, CNN, Entrepreneur & on other business news websites. Chris is the author of the #1 best selling online business course called "An Entire MBA in 1 Course®” & many other courses.',
        overview:
          'Microsoft Excel for Beginner and Intermediate Users: Become Proficient with the world’s #1 productivity software.Accounting, Financial Statements, and Financial Ratios: Making Sense of Debits and Credits, Profit and Loss statements, Balance Sheets, Liquidity, Solvency, Profitability, and Growth Financial Ratios Finance Basics: Interest Rates, Financial Math Calculations, Loan Calculations, Time Value of Money, Present and Future Value of Cash Flows Finance Basics: Interest Rates, Financial Math Calculations, Loan Calculations, Time Value of Money, Present and Future Value of Cash Flows Finance Basics: Interest Rates, Financial Math Calculations, Loan Calculations, Time Value of Money, Present and Future Value of Cash Flows',
        school: '21',
        level: '1',
        courseNum: 'BJ101081',
        category: ['programming', 'design'],
        maxCapacity: '200',
        enrolled: '123',
        lectures: '10',
        quiz: 'Yes',
        startingWeek: '1',
        endingWeek: '17',
        exam: 'Yes',
        language: 'Chinese',
        assingments: 'Yes',
      },
    ],
    isAdmin: 'true',
    isTeacher: 'true',
    isStudent: 'false',
    enrolledCourses: [
      {
        courseName: 'Intro. To China',
        courseImage: '/resourses/introToChina.png',
        teacher: 'Steve Rogers',
        teacherImg: '/resourses/dummyPerson.png',
        teacherIntro:
          'Steve has sold more than 1,000,000 of his online business & self improvement courses in 12 languages in 196 countries and his courses have been profiled in Business Insider, NBC, Inc, Forbes, CNN, Entrepreneur & on other business news websites. Chris is the author of the #1 best selling online business course called "An Entire MBA in 1 Course®” & many other courses.',
        overview:
          'Microsoft Excel for Beginner and Intermediate Users: Become Proficient with the world’s #1 productivity software.Accounting, Financial Statements, and Financial Ratios: Making Sense of Debits and Credits, Profit and Loss statements, Balance Sheets, Liquidity, Solvency, Profitability, and Growth Financial Ratios Finance Basics: Interest Rates, Financial Math Calculations, Loan Calculations, Time Value of Money, Present and Future Value of Cash Flows Finance Basics: Interest Rates, Financial Math Calculations, Loan Calculations, Time Value of Money, Present and Future Value of Cash Flows Finance Basics: Interest Rates, Financial Math Calculations, Loan Calculations, Time Value of Money, Present and Future Value of Cash Flows',
        school: '25',
        level: '1',
        courseNum: 'BJ101081',
        category: ['humanities'],
        maxCapacity: '200',
        enrolled: '123',
        lectures: '10',
        quiz: 'Yes',
        startingWeek: '1',
        endingWeek: '17',
        exam: 'Yes',
        language: 'Chinese',
        assingments: 'Yes',
      },
      {
        courseName: 'Physics',

        courseImage: '/resourses/physics.png',
        teacher: 'Steve Rogers',
        teacherImg: '/resourses/dummyPerson.png',
        teacherIntro:
          'Steve has sold more than 1,000,000 of his online business & self improvement courses in 12 languages in 196 countries and his courses have been profiled in Business Insider, NBC, Inc, Forbes, CNN, Entrepreneur & on other business news websites. Chris is the author of the #1 best selling online business course called "An Entire MBA in 1 Course®” & many other courses.',
        overview:
          'Microsoft Excel for Beginner and Intermediate Users: Become Proficient with the world’s #1 productivity software.Accounting, Financial Statements, and Financial Ratios: Making Sense of Debits and Credits, Profit and Loss statements, Balance Sheets, Liquidity, Solvency, Profitability, and Growth Financial Ratios Finance Basics: Interest Rates, Financial Math Calculations, Loan Calculations, Time Value of Money, Present and Future Value of Cash Flows Finance Basics: Interest Rates, Financial Math Calculations, Loan Calculations, Time Value of Money, Present and Future Value of Cash Flows Finance Basics: Interest Rates, Financial Math Calculations, Loan Calculations, Time Value of Money, Present and Future Value of Cash Flows',
        school: '8',
        level: '2',
        courseNum: 'BJ201082',
        category: ['Business'],
        maxCapacity: '200',
        enrolled: '200',
        lectures: '10',
        quiz: 'Yes',
        startingWeek: '1',
        endingWeek: '17',
        exam: 'Yes',
        language: 'Chinese',
        assingments: 'Yes',
      },
      {
        courseName: 'Python',
        courseImage: '/resourses/python.png',
        teacher: 'Steve Rogers',
        teacherImg: '/resourses/dummyPerson.png',
        teacherIntro:
          'Steve has sold more than 1,000,000 of his online business & self improvement courses in 12 languages in 196 countries and his courses have been profiled in Business Insider, NBC, Inc, Forbes, CNN, Entrepreneur & on other business news websites. Chris is the author of the #1 best selling online business course called "An Entire MBA in 1 Course®” & many other courses.',
        overview:
          'Microsoft Excel for Beginner and Intermediate Users: Become Proficient with the world’s #1 productivity software.Accounting, Financial Statements, and Financial Ratios: Making Sense of Debits and Credits, Profit and Loss statements, Balance Sheets, Liquidity, Solvency, Profitability, and Growth Financial Ratios Finance Basics: Interest Rates, Financial Math Calculations, Loan Calculations, Time Value of Money, Present and Future Value of Cash Flows Finance Basics: Interest Rates, Financial Math Calculations, Loan Calculations, Time Value of Money, Present and Future Value of Cash Flows Finance Basics: Interest Rates, Financial Math Calculations, Loan Calculations, Time Value of Money, Present and Future Value of Cash Flows',
        school: '21',
        level: '1',
        courseNum: 'BJ101081',
        category: ['programming', 'design'],
        maxCapacity: '200',
        enrolled: '123',
        lectures: '10',
        quiz: 'Yes',
        startingWeek: '1',
        endingWeek: '17',
        exam: 'Yes',
        language: 'Chinese',
        assingments: 'Yes',
      },
    ],
  },
  {
    name: 'Steve Rogers',
    loginName: 'rogers',
    profilePic: '/resourses/dummyPerson.png',
    password: bcryptjs.hashSync('123456', 10),
    email: 'stave@mail.com',
    about: 'it is i',
    isAdmin: 'false',
    isTeacher: 'false',
    isStudent: 'true',
    enrolledCourses: [
      {
        courseName: 'Python',
        courseImage: '/resourses/python.png',
        teacher: 'Steve Rogers',
        teacherImg: '/resourses/dummyPerson.png',
        teacherIntro:
          'Steve has sold more than 1,000,000 of his online business & self improvement courses in 12 languages in 196 countries and his courses have been profiled in Business Insider, NBC, Inc, Forbes, CNN, Entrepreneur & on other business news websites. Chris is the author of the #1 best selling online business course called "An Entire MBA in 1 Course®” & many other courses.',
        overview:
          'Microsoft Excel for Beginner and Intermediate Users: Become Proficient with the world’s #1 productivity software.Accounting, Financial Statements, and Financial Ratios: Making Sense of Debits and Credits, Profit and Loss statements, Balance Sheets, Liquidity, Solvency, Profitability, and Growth Financial Ratios Finance Basics: Interest Rates, Financial Math Calculations, Loan Calculations, Time Value of Money, Present and Future Value of Cash Flows Finance Basics: Interest Rates, Financial Math Calculations, Loan Calculations, Time Value of Money, Present and Future Value of Cash Flows Finance Basics: Interest Rates, Financial Math Calculations, Loan Calculations, Time Value of Money, Present and Future Value of Cash Flows',
        school: '21',
        level: '1',
        courseNum: 'BJ101081',
        category: ['programming', 'design'],
        maxCapacity: '200',
        enrolled: '123',
        lectures: '10',
        quiz: 'Yes',
        startingWeek: '1',
        endingWeek: '17',
        exam: 'Yes',
        language: 'Chinese',
        assingments: 'Yes',
      },
    ],
    studentNumber: '7737373',
  },
  {
    name: 'Natasha Romanoof',
    loginName: 'natty',
    profilePic: '/resourses/dummyPerson.png',
    email: 'natty@mail.com',
    password: bcryptjs.hashSync('123456', 10),
    about:
      "I'm baby farm-to-table aliquip YOLO DIY butcher kickstarter ullamco heirloom. Cillum next level salvia occupy lomo in activated charcoal, non laboris locavore food truck consequat do. Mustache veniam mumblecore health goth swag XOXO jean shorts af ut authentic offal. Ipsum trust fund aliquip irony bitters mumblecore direct trade. Bushwick blog small batch, blue bottle pariatur try-hard nisi glossier raw denim voluptate velit ugh cupidatat hammock hashtag.",
    enrolledCourses: [],
    studentNumber: '7767373',
    isAdmin: 'false',
    isTeacher: 'false',
    isStudent: 'true',
  },
  {
    name: 'Tony Stark',
    loginName: 'tony',
    email: 'tony@mail.com',
    profilePic: '/resourses/dummyPerson.png',
    password: bcryptjs.hashSync('123456', 10),
    about: 'it is i',
    enrolledCourses: [],
    studentNumber: '7637373',
    isAdmin: 'false',
    isTeacher: 'false',
    isStudent: 'true',
  },
];

export default teachers;
