const hourHand = document.querySelector(".hour-hand")
const minHand = document.querySelector(".min-hand")
const secondHand = document.querySelector(".second-hand")
const nowTime = document.querySelector(".now-time")

function setDate() {
  const time = new Date()
  const hour = time.getHours()
  const seconds = time.getSeconds()
  const mins = time.getMinutes()

  const secondsDegrees = ((seconds / 60) * 360)
  const minsDegrees = ((mins / 60) * 360)
  const hoursDegrees = ((hour / 12) * 360)

  hourHand.style.transform = `rotate(${hoursDegrees}deg)`
  minHand.style.transform = `rotate(${minsDegrees}deg)`
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`
  const localTime = time.toLocaleString()
  nowTime.innerHTML = `<span>台北時間<span><p>${localTime}</p>`

}

setInterval(setDate, 1000)