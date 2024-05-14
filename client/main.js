import user from "./assets/user.svg"
import bot from "./assets/bot.svg"

const chatContainer = document.querySelector("#chat_container");
const form = document.querySelector("form")



async function handleSubmit(e) {
  e.preventDefault();

  // get form data
  const formData = new FormData(form).get("prompt");

  const sendData = await fetch("http://localhost:3000", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      prompt: formData
    })
  })

  if (sendData.ok) {
    const response = sendData.text()
    console.log(response);
  } else {
  }

  form.reset();
}

form.addEventListener("submit", handleSubmit)
form.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    handleSubmit(e)
  }
})

