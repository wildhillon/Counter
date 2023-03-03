let count = 0

function changeCount() {
    count++
    document.querySelector(".number").innerHTML = count
}
function countDecrease() {
    count--
    document.querySelector(".number").innerHTML = count
}

document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowUp") {
      changeCount()
    } else if (event.key === "ArrowDown") {
      countDecrease()
      }
    }
  )
