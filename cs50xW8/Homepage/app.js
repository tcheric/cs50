/**
 * 1. Removes event listener that called this function
 * 2. Calls if statement 20 times
 * 3. Adds another similar event listener 
 */
const onScroll = (event) => {
  document.removeEventListener("scroll", onScroll)
  let iterations = 0
  let intervalID = setInterval(() => {
    iterations++
    // console.log(iterations)
    if ( window.scrollY === 0 ) {
      document.documentElement.setAttribute("scroll-top", "true")
      // console.log("trans")
    } else {
      document.documentElement.setAttribute("scroll-top", "false")
      // console.log("solid")
    }
    if (iterations === 20) {
      clearInterval(intervalID)
      // console.log("cancelling loop...")
      document.addEventListener("scroll", onScroll)
    }
  }, 250)
}

// 1st call
document.addEventListener("scroll", onScroll)
// console.log("1st addition")