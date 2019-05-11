const corrrectAnswers = ['B', 'A', 'A', 'A', 'B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

form.addEventListener('submit', e => {
  //wont refresh page
  e.preventDefault();

  let score = 0;
  //form.q1.value will get the checked radio-input
  const userAnswers = [form.q1.value, form.q2.value, form.q3.value,form.q4.value, form.q5.value];

  //compare user answers with correct answers
  userAnswers.forEach((answer, index) => {
    if (answer === corrrectAnswers[index]) {
      score += 20;
    }
  });

  //show result on page
  scrollTo(0, 0);

  result.classList.remove('d-none');

  let output = 0;
  //This method is fired all the time like render in reactjs
  const timer = setInterval(() => { 
    result.querySelector('span').textContent = `${output}%`;
    if (output === score) {
      clearInterval(timer);
    } else {
      output++;
    }
  }, 7)

});

