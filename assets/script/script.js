let display1 = document.querySelector('#form-display1')
let display2 = document.querySelector('#form-display2')
let display3 = document.querySelector('#form-display3')
let display4 = document.querySelector('#form-display4')
let tyDisplay = document.querySelector('#thankyoudisplay')

let stepDisplay1 = document.querySelector('#step1')
let stepDisplay2 = document.querySelector('#step2')
let stepDisplay3 = document.querySelector('#step3')
let stepDisplay4 = document.querySelector('#step4')

let nxtBtn1 = document.querySelector('#nxtbutton1')
let nxtBtn2 = document.querySelector('#nxtbutton2')
let nxtBtn3 = document.querySelector('#nxtbutton3')
let changeBtn = document.querySelector('.change')
let confirmBtn = document.querySelector('#confirmbutton')

let backBtn1 = document.querySelector('#backbutton1')
let backBtn2 = document.querySelector('#backbutton2')
let backBtn3 = document.querySelector('#backbutton3')

let outputSummary = document.querySelector('#outputsummary')
let totaldisplay = document.querySelector('#totaldisplay')
let planDisplay = document.querySelector('.plan')

let planBoxes = document.querySelectorAll('.box')

// STEP 1 - PERSONAL INFO - FIELD VALIDATION
nxtBtn1.addEventListener('click', (e) => {
  e.preventDefault()
  let hasError = false

  let inputName = document.querySelector('#name')
  let inputEmail = document.querySelector('#email')
  let inputPhonenumber = document.querySelector('#phonenumber')

  let nameVal = inputName.value
  let emailVal = inputEmail.value
  let phoneVal = inputPhonenumber.value

  if (!nameVal) {
    hasError = true
    let errorMsg = inputName.nextSibling.parentElement
    errorMsg.classList.add('input-error')
  } else {
    let errorMsg = inputName.nextSibling.parentElement
    errorMsg.classList.remove('input-error')
  }

  if (!phoneVal || isNaN(phoneVal)) {
    hasError = true
    let errorMsg = inputPhonenumber.nextSibling.parentElement
    errorMsg.classList.add('input-error')
  } else {
    let errorMsg = inputPhonenumber.nextSibling.parentElement
    errorMsg.classList.remove('input-error')
  }

  if (!emailVal) {
    hasError = true
    let errorMsg = inputEmail.nextSibling.parentElement
    errorMsg.classList.add('input-error')
  } else {
    let errorMsg = inputEmail.nextSibling.parentElement
    errorMsg.classList.remove('input-error')
  }

  if (!hasError) {
    display1.classList.remove('form-active')
    stepDisplay1.classList.remove('active')
    display2.classList.add('form-active')
    stepDisplay2.classList.add('active')
  }

})

// STEP 2 - SELECT YOUR PLAN

backBtn1.addEventListener('click', (e) => {
  e.preventDefault()
  display2.classList.remove('form-active')
  stepDisplay2.classList.remove('active')
  display1.classList.add('form-active')
  stepDisplay1.classList.add('active')
})

let planPrice = ''
let planName = ''
let plandisplayText = planDisplay.lastElementChild
let plandisplayName = planDisplay.firstElementChild.firstElementChild
planBoxes.forEach(function (box) {
  box.addEventListener('click', (e) => {
    planBoxes.forEach(function(item) {
      item.classList.remove('box-active')
  
      if(e.target.innerHTML == item.innerHTML) {
        item.classList.add('box-active') 
        planPrice = item.getAttribute("data-value")
        plandisplayText.innerHTML = `+$${planPrice}/mo`
        planName = item.getAttribute("data-plan")
        plandisplayName.innerHTML = planName
        
      }  
    })
  })
})

nxtBtn2.addEventListener('click', (e) => {
  e.preventDefault()
  console.log(parseInt(planPrice), planName)

  if (planName === '') {
    let span = document.querySelector('.span-error')
    span.style.opacity = '100'
  } else {
    display2.classList.remove('form-active')
    stepDisplay2.classList.remove('active')
    display3.classList.add('form-active')
    stepDisplay3.classList.add('active')
  }
})

// STEP 3 - ADD-ONS

backBtn2.addEventListener('click', (e) => {
  e.preventDefault()
  let span = document.querySelector('.span-error')
  span.style.opacity = '0'
  display3.classList.remove('form-active')
  stepDisplay3.classList.remove('active')
  display2.classList.add('form-active')
  stepDisplay2.classList.add('active')
})

nxtBtn3.addEventListener('click', (e) => {
  e.preventDefault()

  //get checkbox value
  outputSummary.innerHTML = ''
  outputTotal = 0
  let valueOutput = ''
  let markedCheckbox = document.getElementsByName('cb');  
  for (let checkbox of markedCheckbox) {
    if (checkbox.checked) {
      let textOutput = checkbox.nextSibling.nextSibling.children[0].innerHTML
      valueOutput = parseInt(checkbox.value)
      outputTotal += valueOutput

      outputSummary.innerHTML += `
        <div>
          <p>${textOutput}</p>
          <span>+$${valueOutput}/mo</span>
        </div>
      `  
    }

    let totalAmount = Number(planPrice) + outputTotal
    totaldisplay.innerHTML = `+${totalAmount}/mon`
  }

  display3.classList.remove('form-active')
  stepDisplay3.classList.remove('active')
  display4.classList.add('form-active')
  stepDisplay4.classList.add('active')

})

// STEP 4 - SUMMARY

changeBtn.addEventListener('click', ()=> {

  display4.classList.remove('form-active')
  stepDisplay4.classList.remove('active')
  display2.classList.add('form-active')
  stepDisplay2.classList.add('active')

  outputSummary. innerHTML = ''
  totaldisplay.innerHTML = ''
})

backBtn3.addEventListener('click', (e) => {
  e.preventDefault()
  outputSummary. innerHTML = ''
  totaldisplay.innerHTML = ''

  display4.classList.remove('form-active')
  stepDisplay4.classList.remove('active')
  display3.classList.add('form-active')
  stepDisplay3.classList.add('active')
})

confirmBtn.addEventListener('click', (e) => {
  e.preventDefault()
  display4.classList.remove('form-active')
  tyDisplay.classList.remove('hidden')
})