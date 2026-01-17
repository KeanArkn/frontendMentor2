let circles = document.querySelectorAll('.circle')
let submitBtn = document.querySelector('.btn')
let ratingDiv = document.querySelector('.rating-content')
let thanksDiv = document.querySelector('.thanks-content')
let scoreMessage = document.querySelector('.score-p')
let selectedValue = null;

submitBtn.addEventListener("click", (e) => {
    if(!selectedValue) return;
    e.stopPropagation()
    scoreMessage.textContent = `You selected ${selectedValue} out of 5`
    ratingDiv.classList.add('hidden')
    thanksDiv.classList.remove('hidden')
})

circles.forEach(circle=>{
    circle.addEventListener('click',(  )=>{
        circles.forEach(c=>c.classList.remove('selected'))
        circle.classList.add('selected')
        selectedValue = circle.dataset.value
    })
})
