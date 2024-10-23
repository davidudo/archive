// NAVIGATION BAR

const menu_icon = document.getElementById('menu-toggle')
const nav_menu = document.getElementById('nav-menu')

menu_icon.addEventListener("click", (e) => {
  nav_menu.classList.toggle("show")

  if (nav_menu.classList.contains("show")) {
    menu_icon.src = "images/icon-cancel.svg"
  } else {
    menu_icon.src = "images/icon-menu.svg"
  }
})


// EMAIL VERIFICATION 

// const user_input_1 = document.getElementById('email1')
// const user_input_2 = document.getElementById('email2')
// const get_started_btn_1 = document.getElementById('get_started_btn_1')
// const get_started_btn_2 = document.getElementById('get_started_btn_2')
// const message_tag = document.getElementById('message')

// function verifyEmail(input, button) {
//   button.addEventListener("click", (e) => {
//     const input_value = (input.value).trim()
//     const input_length = input_value.length
//     const at_sign_position = input_value.indexOf("@")
//     const dot_com_position = input_value.indexOf(".com")

//     const hasAtSign = input_value.includes("@")
//     const hasDotCom = input_value.includes(".com", (input_length - 4))
//     const atSignIsBeforeDotCom = (at_sign_position < dot_com_position)

//     const emailAddressIsCorrect = (
//       hasAtSign &&
//       hasDotCom &&
//       atSignIsBeforeDotCom
//     )


//     if (!emailAddressIsCorrect) {
//       message.classList.add('show')
//       message_tag.innerHTML = 'Please check your email address'
//     } else {
//       message.classList.remove('show')
//     }

//   })
// }

// verifyEmail(user_input_1, get_started_btn_1)
// verifyEmail(user_input_2, get_started_btn_2)
