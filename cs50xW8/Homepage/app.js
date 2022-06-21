/**
 * Scroll top navbar show/hide:
 * 1. Removes event listener that called this function
 * 2. Calls if statement 20 times
 * 3. Adds another similar event listener 
 */
const onScroll = (event) => {
  document.removeEventListener("scroll", onScroll)
  let iterations = 0
  let intervalID = setInterval(() => {
    iterations++
    if ( window.scrollY === 0 ) {
      document.documentElement.setAttribute("scroll-top", "true")
    } else {
      document.documentElement.setAttribute("scroll-top", "false")
    }
    if (iterations === 20) {
      clearInterval(intervalID)
      document.addEventListener("scroll", onScroll)
    }
  }, 250)
}

// 1st call
document.addEventListener("scroll", onScroll)

// Form submit popup:
var form = document.getElementById("a2form");
form.addEventListener('submit', e => {
  e.preventDefault()
})

const showMsgConfirm = () => {
  // show popup
  const popup = document.getElementById("form-popup")
  popup.style.visibility = "visible"
  popup.classList.add("show")
  setTimeout(() => popup.classList.add("go"), 1500)

  // clear form
  setTimeout(() => {
    const elemlist = document.querySelectorAll("input")
    for (let input of elemlist) {
      input.value = ""
    }
    var textarea = document.querySelector("textarea")
    textarea.value = ""
  }, 2000)

  setTimeout(() => {
    popup.style.visibility = "hidden"
    popup.classList.remove("show")
    popup.classList.remove("go")
  }, 2500)
}