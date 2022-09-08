console.log('hello world')

const baseURL = 'https://swapi.dev/api/'

// Step 1: Grab HTML element
const btn = document.querySelector('#residents')



// Step 2: Write the function
const buttonClick = (event) => {
    console.log('Button Clicked')
}


// Step 3: Combine step 1 and 2
btn.addEventListener('click', buttonClick)

axios.get(`${baseURL}/`)
