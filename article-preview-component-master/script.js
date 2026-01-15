let shareBtn = document.querySelector('.btn')
let shareToast = document.querySelector('.share-toast')

shareBtn.addEventListener('click',(e)=>{
    e.stopPropagation()
    shareToast.classList.toggle("active")
})
document.addEventListener('click',()=>{
    shareToast.classList.remove("active")
})