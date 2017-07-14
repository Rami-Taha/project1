  $(document).ready(function () {
    var totalQuestions = 3
    var correctAnswers = 0
    var result = $('button')
    var i
    var alertText
    var q1Answers = $("input[name='q1']")
    var q2Answers = $("input[name='q2']")
    var q3Answers = $("input[name='q3']")

    function quizResult () {
      for (i = 0; i < totalQuestions; i++) {
        if (q1Answers[i].checked && q1Answers[i].value === 'true') {
          correctAnswers++
        }
        if (q2Answers[i].checked && q2Answers[i].value === 'true') {
          correctAnswers++
        }
        if (q3Answers[i].checked && q3Answers[i].value === 'false') {
          correctAnswers++
        }
        if (correctAnswers === totalQuestions) {
          alertText = 'Congratulations! You got all the questions right!'
        } else {
          alertText = 'You got ' + correctAnswers + ' out of ' + totalQuestions + ' correct!'
          alert(alertText)
        }
      }
    }
    result.on('click', quizResult)
  }
  )
