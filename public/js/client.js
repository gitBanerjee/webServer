
console.log('Client side javascript is on')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit',(e) => {
    e.preventDefault()

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    fetch('/weather?address='+search.value).then((response) => {
        response.json().then((data) => {
            if(data.error){
                messageOne.textContent = data.error
            }else{
                messageOne.textContent = data.location
                messageTwo.textContent = 'The temperature in '+data.location+' is currently '+data.forecast.temp+'°C'+
                '. It feels like '+data.forecast.feelslike+'°C and the weather is mostly '+data.forecast.weat_desc+' throughout the day.'
            }
        })
    })
})



