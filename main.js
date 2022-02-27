

const emojiContainer = document.getElementById("emoji-container")
const pushBtn = document.getElementById("push-btn")
const unshiftBtn = document.getElementById("unshift-btn")
const popBtn = document.getElementById("pop-btn")
const shiftBtn = document.getElementById("shift-btn")
const emojiInput = document.getElementById("emoji-input")

const myEmojis = ["😈", "🖤", "🐱‍👤"]




function renderEmoji(){
    emojiContainer.innerHTML = ""
    for(let i = 0; i < myEmojis.length; i++ ){

        emojiContainer.innerHTML += `<span>${myEmojis[i]}</span>` 
    
    
    }


}
renderEmoji()

unshiftBtn.addEventListener("click", function(){  

    if(emojiInput.value){

        myEmojis.unshift(emojiInput.value)

        emojiInput.value = ""
        
        renderEmoji()
    }

})

pushBtn.addEventListener("click", function(){
    
    if(emojiInput.value){

        myEmojis.push(emojiInput.value)

        emojiInput.value = ""

        renderEmoji()
    }
    



})


popBtn.addEventListener("click", function(){
    
        myEmojis.pop()
        renderEmoji()


})



shiftBtn.addEventListener("click", function(){
    
    myEmojis.shift()
    renderEmoji()


})



