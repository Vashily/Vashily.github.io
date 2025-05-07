var myQuestions = [
    {
      question: "Kapankah hari kemerdekaan Indonesia?",
      answers: {
        a: '17 Agustus 1945',
        b: '17 Agustus 1946',
        c: '17 Agustus 1947',
        d: '17 Agustus 1948',
        e: '17 Agustus 1949',
      },
      correctAnswer: 'a'
    },
    {
      question: "Kapankah Kota Palopo menjadi Daerah Otonom?",
      answers: {
        a: '12 April 2002',
        b: '10 April 2002',
        c: '13 April 2002',
        d: '11 April 2002',
        e: '14 April 2002',
      },
      correctAnswer: 'b'
    },
    {
        question: "Siapa Kepala Sekolah SMAN 1 Palopo saat ini?",
        answers: {
          a: 'Pak Syukur',
          b: 'Pak Syahrul',
          c: 'Pak Gilang',
          d: 'Pak Arif',
          e: 'Pak Rahman',
        },
        correctAnswer: 'a'
      },
      {
        question: "Dari foto tersebut, peta dari kota mana yang ditunjukkan?",
        answers: {
          a: 'Peta Kalimantan',
          b: 'Peta Sulawesi Selatan',
          c: 'Peta Palopo',
          d: 'Peta Makassar',
          e: 'Peta Mamuju',
        },
        correctAnswer: 'c'
      },
      {
        question: "Apa Masjid Tertua di Palopo?",
        answers: {
          a: 'Masjid Agung Palopo',
          b: 'Masjid Jami Palopo',
          c: 'Masjid Raya Palopo',
          d: 'Masjid Palopo',
          e: 'Masjid Agung',
        },
        correctAnswer: 'b'
      }
  ];
  
  var quizContainer = document.getElementById('quiz');
  var resultsContainer = document.getElementById('results');
  var submitButton = document.getElementById('submit');
  
  generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);
  
  function generateQuiz(questions, quizContainer, resultsContainer, submitButton){
  
    function showQuestions(questions, quizContainer){
      var output = [];
      var answers;
  
      for(var i=0; i<questions.length; i++){
        
        answers = [];
  
        for(letter in questions[i].answers){
  
          answers.push(
            '<label>'
              + '<input type="radio" name="question'+i+'" value="'+letter+'">'
              + questions[i].answers[letter]
            + '</label><br>'
          );
        }
  
        output.push(
          '<div class="question">' + questions[i].question + '</div>'
          + '<div class="answers">' + answers.join('') + '</div>'
        );
      }
  
      quizContainer.innerHTML = output.join('');
    }
  
  
    function showResults(questions, quizContainer, resultsContainer){
      
      var answerContainers = quizContainer.querySelectorAll('.answers');
      
      var userAnswer = '';
      var numCorrect = 0;
      
      for(var i=0; i<questions.length; i++){
  
        userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
        
        if(userAnswer===questions[i].correctAnswer){
          numCorrect++;
          
          answerContainers[i].style.color = 'lightgreen';
        }
        else{
          answerContainers[i].style.color = 'red';
        }
      }
  
      resultsContainer.innerHTML = numCorrect + ' jawaban soal benar ' + ' dari ' + questions.length + ' soal';
    }
  
    showQuestions(questions, quizContainer);
    
    submitButton.onclick = function(){
      showResults(questions, quizContainer, resultsContainer);
    }
  
  }
  