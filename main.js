let notificationNumber = document.querySelector(".notification_number .number");
let mark_as_read = document.querySelector(".mark_as_read");
let notifications = document.querySelectorAll(".notification")

mark_as_read.addEventListener("click", () => {
  notifications.forEach(not => {
    not.classList.remove("unread")
    notificationNumber.innerHTML = "0"
  })
})
notifications.forEach(not => {
  not.addEventListener("click", () => {
    if (not.classList.contains("unread")) {
      not.classList.add("read");
      not.classList.remove("unread");
    } else {
      not.classList.add("unread");
      not.classList.remove("read");
    }
    if (not.classList.contains("unread")) {
      +notificationNumber.innerHTML++
    } else {
      +notificationNumber.innerHTML--
    }
  })
})