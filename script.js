  $(document).ready(function () {
    var totalQuestions = [
        {question: "the name of the network of computers from which the Internet has emerged is Arpanet",
        answer:"true"},
      {  question:"The longest distance swam underwater in one breath is 200metres. (6th November 2008)",
        answer:"true"},
        {question:"Google launched on the web in 2009",
        answer:"false"}
      ]
    var showQ = $('p')
    var result =$('button')
    var correctAnswers = 0
    function quizResult() {
    var userInput = $('input')
    for (let i = 0; i < totalQuestions[i].length; i++) {
      showQ.text(totalQuestions[i].question)
      if (userInput === totalQuestions[i].answer) {
        correctAnswers++
      }
      if (correctAnswers === totalQuestions) {
        alertText1 = 'Congratulations! You got all the questions right!'
        alert(alertText1)
      } else {
        alertText = 'You got ' + correctAnswers + ' out of ' + totalQuestions + ' correct!'
        alert(alertText)
      }
    }
  }
    // var totalQuestions = 3
    // var totalAnswers = 6
    // var correctAnswers = 0
    // var result = $('button')
    // var i
    // var alertText1
    // var alertText
    // var q1Answers = $("input[name='q1']")
    // var q2Answers = $("input[name='q2']")
    // var q3Answers = $("input[name='q3']")
    //
    // function quizResult () {
    //   for (i = 0; i < 2; i++) {
    //     if (q1Answers[i].checked && q1Answers[i].value === 'true') {
    //       correctAnswers++
    //     }
    //     if (q2Answers[i].checked && q2Answers[i].value === 'true') {
    //       correctAnswers++
    //     }
    //     if (q3Answers[i].checked && q3Answers[i].value === 'false') {
    //       correctAnswers++
    //     }
    //     }
        // if (correctAnswers === totalQuestions) {
        //   alertText1 = 'Congratulations! You got all the questions right!'
        //   alert(alertText1)
        // } else {
        //   alertText = 'You got ' + correctAnswers + ' out of ' + totalQuestions + ' correct!'
        //   alert(alertText)
    //     }
    //
    // }
    //
    //
    // function newRound ()
    // {
    //   window.open('index.html ','_self')
    // }
    // result.on('click', quizResult)
    // result.on('click', newRound)
  }

  )
