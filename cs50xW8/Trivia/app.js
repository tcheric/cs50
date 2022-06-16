var clicked = 0

function handlep1(id) {
  if (!clicked) {
    const nodeList = document.querySelectorAll("button.p1")
    var color
    var correct = 0
    for (node of nodeList) {
      if (id === "1" && node.id === id) {
        color = "green"
        correct = 1
      } else if (id !== "1" && node.id === id) {
      color = "red"
      } else if (node.id !== id) {
      color = "grey"
      }
      node.style.backgroundColor = color
    }
    clicked = 1
    const p1mark = document.getElementById("p1mark")
    p1mark.textContent = correct ? "Correct!" : "Incorrect."
    p1mark.style.visibility = "visible"
  }
}

function handlep2() {
  var correct = 0
  const input = document.querySelector("input")
  console.log(input)
  if (input.value === "Switzerland" || input.value === "switzerland") {
    console.log(input.value)
    input.style.backgroundColor = "green"
    correct = 1
  } else {
    console.log(input.value)
    input.style.backgroundColor = "red"
  }
  const p2mark = document.getElementById("p2mark")
  p2mark.textContent = correct ? "Correct!" : "Incorrect."
  p2mark.style.visibility = "visible"
}