document.addEventListener('DOMContentLoaded', () => {
  const userInfoForm = document.getElementById('user-info-form')
  let userName = ''
  const feedbackSection = document.getElementById('feedback')

  userInfoForm.addEventListener('submit', (e /* e for event */) => {
    e.preventDefault() /*preventing the page from reloading after form is submitted */
    userName = document.getElementById('name').value.trim() /*trim removes spaces from the string, only from the end or beginning of string. Not spaces between words. */
    feedbackSection.hidden = false
    feedbackSection.scrollIntoView({ behavior: 'smooth' })
  })

  const feedbackForm = document.getElementById('feedback-form')
  const resultsSection = document.getElementById('results')
  const resultsContent = document.getElementById('results-content')

  feedbackForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const formData = new FormData(feedbackForm)
    const userAnswers = Object.fromEntries(formData)

    let feedback = userName ? 'Thank you for your feedback \n\n' + userName : 'Thank you for your feedback! \n\n' /* Other way of doing if statement, cleaner approach */

    if (userAnswers.navigation === 'easy') {
      feedback += ' We are glad you found the site easy to navigate'
    } else if (userAnswers.navigation === 'difficult') {
      feedback += ' We will work on improving our navigation.'
    }

    if (userAnswers.readability === 'clear') {
      feedback += 'It is great to hear our content is clear and readable.'
    } else if (userAnswers.readability === 'unclear') {
      feedback += 'We will focus on making our content better.'
    }

    resultsSection.hidden = false
    resultsContent.textContent = feedback

    resultsSection.setAttribute('tabindex', '-1') /* tabindex = a way to get the browser to focus the div. Div is not possible to fucus by default */
    resultsSection.focus()
  })
})

