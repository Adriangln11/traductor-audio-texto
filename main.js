const textElement = document.getElementById('textContainer')
const btnMic = document.getElementById('mic')
const note = document.getElementById('note')

const recognition = new webkitSpeechRecognition()
recognition.lang = 'es-ES'
recognition.continuous = true
recognition.onresult = event => {
    textElement.innerText = ''
    for (const res of event.results) {
        let text = res[0].transcript
        textElement.innerText += `${text}\n`
        
    }
    
}
recognition.onsoundend = (event) => {
    note.innerText = 'Escucha detenida.'
  }
btnMic.addEventListener('click', () => {
    note.innerText = 'Escuchando...'
    recognition.start()
})