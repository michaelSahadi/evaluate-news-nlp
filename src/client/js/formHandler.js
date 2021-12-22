// function handleSubmit(event) {
//     event.preventDefault()

//     // check what text was put into the form field
//     let formText = document.getElementById('name').value
//     Client.checkForName(formText)

//     console.log("::: Form Submitted :::")
//     fetch('http://localhost:81/test')
//         .then(res => res.json())
//         .then(function (res) {
//             document.getElementById('results').innerHTML = res.message
//         })
// }

// export { handleSubmit }

import { checkForURL } from "./textChecker"

function handleSubmit(event) {
  event.preventDefault()

  // check form field entry
  const formText = document.getElementById('text').value;

  if (formText==='') {
    alert('Please enter URL')
  }
  else if (checkForURL(formText)) {
    fetch('http://localhost:8081/test', {
      method: 'POST',
      body: JSON.stringify({ formText }),
      headers: {
          'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(result => {
      console.log('Result:', result);
      // Update UI
      document.getElementById('score').innerHTML = result.score_tag
      document.getElementById('agreement').innerHTML = result.agreement
      document.getElementById('subjectivity').innerHTML = result.subjectivity
      document.getElementById('confidence').innerHTML = result.confidence
      document.getElementById('irony').innerHTML = result.irony
    })
  }
  else {
    alert("It's not a valid URL!")
  }

  console.log("::: Form Submitted :::")

}

export { handleSubmit }

