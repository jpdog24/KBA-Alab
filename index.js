// The provided course information.
const CourseInfo = {
  id: 451,
  name: "Introduction to JavaScript",
};

//============================================================================
//============================================================================

// The provided assignment group.
const AssignmentGroup = {
  id: 12345,
  name: "Fundamentals of JavaScript",
  course_id: 451,
  group_weight: 25,
  assignments: [
    {
      id: 1,
      name: "Declare a Variable",
      due_at: "2023-01-25",
      points_possible: 50,
    },
    {
      id: 2,
      name: "Write a Function",
      due_at: "2023-02-27",
      points_possible: 150,
    },
    {
      id: 3,
      name: "Code the World",
      due_at: "3156-11-15",
      points_possible: 500,
    },
  ],

  // ===================================================================================
  // ===================================================================================
};

// The provided learner submission data.
const LearnerSubmissions = [
  {
    learner_id: 125,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-25",
      score: 47,
    },
  },
  {
    learner_id: 125,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-02-12",
      score: 150,
    },
  },
  {
    learner_id: 125,
    assignment_id: 3,
    submission: {
      submitted_at: "2023-01-25",
      score: 400,
    },
  },
  {
    learner_id: 132,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-24",
      score: 39,
    },
  },
  {
    learner_id: 132,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-03-07",
      score: 140,
    },
  },
];

//==================================================================================
//==================================================================================
//==================================================================================
//==================================================================================





//Total Points Possible for both Leaners

const pp =
  AssignmentGroup.assignments[0].points_possible +
  AssignmentGroup.assignments[1].points_possible +
  AssignmentGroup.assignments[2].points_possible;

//Total Score for Learner 1

const learner1score =
  LearnerSubmissions[0].submission.score +
  LearnerSubmissions[1].submission.score +
  LearnerSubmissions[2].submission.score;

//AVG FOR LEARNER 1:

const avg = Math.round((learner1score) / (pp) *100) + `%`

//Assignment ID for Learner 1

const assignid = [
  LearnerSubmissions[0].assignment_id,
  LearnerSubmissions[1].assignment_id,
  LearnerSubmissions[2].assignment_id,
];


//AVERAGE FOR ASSIGN ID 1 FOR LEARNER 1

const grades1= (LearnerSubmissions[0].submission.score) / (AssignmentGroup.assignments[0].points_possible) *100 + `%`


//AVERAGE FOR ASSIGN ID 2 FOR LEARNER 1
const grades2 =(LearnerSubmissions[1].submission.score) / (AssignmentGroup.assignments[1].points_possible) *100 + `%`



//AVERAGE FOR ASSIGN ID 3 FOR LEARNER 2

const grades3 = (LearnerSubmissions[2].submission.score) / (AssignmentGroup.assignments[2].points_possible) *100 + `%`






//Total SCORE for Leaner 2

const learner2score =
LearnerSubmissions[3].submission.score +
LearnerSubmissions[4].submission.score;


//Average for Learner 2
const avg2= Math.round((learner2score) / (pp) * 100)+ `%`



//AVERAGE FOR ASSIGN ID 1 FOR LEARNER 2

const grades4 = LearnerSubmissions[3].submission.score / AssignmentGroup.assignments[0].points_possible * 100 + `%`



//AVERAGE FOR ASSIGN ID 2 FOR LEARNER 2

const grades5 = Math.round((LearnerSubmissions[4].submission.score) / (AssignmentGroup.assignments[1].points_possible)*100)+ `%`








//FUNCTION===============
function getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions) {
  const result = [
    {
      id: 125,
      avg: avg,
      Assignment1: grades1,
      Assignment2: grades2,
      Assignment3: grades3
    },
  ];
  console.log(result);


  const result2 = [{
    id:135,
    avg:avg2,
    Assignment1:grades4,
    Assignment2:grades5,
    Assignment3:0
  }];
  console.log(result2);
  
}

const results = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

console.log(results);
