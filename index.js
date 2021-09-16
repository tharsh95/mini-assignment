function isPalindrome(string) {
    let len = string.length
    for (let i = 0; i < len / 2; i++) {
        if (string.charAt(i) != string.charAt(len - i - 1))
            return false
    }
    return true
}
let val = ""
// console.log(isPalindrome(1331))

function handleChange(e) {
    val = e.toLowerCase()
}
let btn =document.getElementById("btn")
let para =document.getElementById("para")
btn.addEventListener("click",()=>{
if(isPalindrome(val)){
    para.innerHTML= "Yes its a palindrome"
    
}
else
para.innerHTML= "No its not a palindrome"

})
