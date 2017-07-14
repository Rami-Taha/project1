  $(document).ready(function () {
    var totalQuestions = 3
    var correctAnswers = 0
    var result = $('button')
    var i
    var alertText
    function quizResult() {
   for(i = 0; i < answerContainer.length; i++) {
     var q1Answers = $("input[name='q1']")
      if(q1Answers[i].checked && q1Answers[i].value === 'True') {
        correctAnswers++
        break
      }
      if(q2Answers[i].checked && q2Answers[i].value === 'False') {
        var q2Answers = $("input[name='q2']")
        correctAnswers ++
        break
      }
      if(q3Answers[i].checked && q3Answers[i].value === 'True') {
        var q3Answers = $("input[name='q3']")
        correctAnswers++
        break
      }
      var answerContainer = q1Answers + q2Answers + q3Answers
      if(correctAnswers === totalQuestions) {
          alertText = "Congratulations! You got all the questions right!"
       }
       else {
          alertText = "You got " + correctAnswers + " out of " + totalQuestions + " correct!"
          alert(alertText)

       }
   }
    }
// result.on('click', quizResult())
 }
  )
