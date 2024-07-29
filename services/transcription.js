export async function transcriptionToMessage(transcription) {

  let items = []
  let index = -1
  let flag = false

  const tokens = transcription.split("\n")

  for (let i = 0; i < tokens.length; i++) {
      const s = tokens[i].trim()
      if(s.indexOf(':') > 0 && s.indexOf('-->') > 0) {
          index++
          items.push({ timestamp: s, text: '' })
          flag = true
      } else if(flag) {
          items[index].text = s
          flag = false
      }
  }

  return items;
}