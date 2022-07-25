document.getElementById('toggle-dark-mode').addEventListener('click', async () => {
  const isDarkMode = await window.darkMode.toggle()
  document.getElementById('theme-source').innerHTML = isDarkMode ? 'Dark' : 'Light'
})

document.getElementById('reset-to-system').addEventListener('click', async () => {
  await window.darkMode.system()
  document.getElementById('theme-source').innerHTML = 'System'
})


function showNotif(){
  const NOTIFICATION_TITLE = 'Test Electron Processed'
  const NOTIFICATION_BODY = 'Notification from the Renderer process'
  const CLICK_MESSAGE = 'Notification clicked'
  
  new Notification(NOTIFICATION_TITLE, { body: NOTIFICATION_BODY }).onclick = () => {
    document.getElementById('output').innerText = CLICK_MESSAGE
  }
}

showNotif()