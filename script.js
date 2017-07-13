  $(document).ready(function () {
    console.log('hello')

// var answers = {
//   a:'True',
//   b:'False',
//   c:'True'
// }
function quizresult() {
   //variables with global implications
   var totalQuestions = 3
   var correctAnswers = 0
   var alertText;
   var i;
   var a1 = $("input[name='q1']")
   for(i = 0; i < a1.length; i++) {
      if(a1[i].checked) {
         if(a1[i].value === 'true') {
            correctAnswers++
            break
         }
      }
   }
   if(correctAnswers === totalQuestions) {
       alertText = "Congratulations! You got all the questions right!"
    }
    else {
       alertText = "You got " + correctAnswers + " out of " + totalQuestions + " correct!"
    }
    alert(alertText)
 }
})
  //   var myQuestions = [ {
  //
  // question: 'The longest distance swam underwater in one breath is 200metres. (6th November 2008)',
  // answer: {
  //   a:'True',
  //   b:'False'
  // },
  // correctAnswer :'a'
  // },
  //
  // {
  // question: 'The record for most needles inserted into the head is 15,000. (11th June 2013)',
  // answer: {
  // a:'False' ,
  // b:'True',
  // },
  // correctAnswer: 'a'
  // },
  // {
  // question:'The world’s longest legs belong to a Russian lady and measure 132cm (51.9 inches) (8th July 2003)',
  // answer: {
  // a:'True',
  // b:'False'
  // },
  // correctAnswer:'a'
  // },
  // {
  // question:'The record for the fastest time to solve a Rubik’s Cube one-handed is 37 seconds. (26th April 2014)',
  // answer:{
  // a:'True',
  // b:'False',
  // },
  // correctAnswer: 'b'
  // },
  // {
  //   question:'6 cows, 9 chickens and 12 humans have 66 legs',
  // answer: {
  //   a:'False',
  //   b:'True'
  // },
  // correctAnswer: 'b'
  // }
  // ]
  // var quizContainer = $('#questions')
  // var scoreContainer = $('output')
  // var submitButton = $('button')
  // function generateQuestions(questions, quizContainer) {
  //   var output =[]
  //   for (let i = 0; i < questions.length; i++) {
  //     var showQuestuion = 0
  // showQuestuion += myQuestions.questions
  //   }
  //   return showQuestuion
