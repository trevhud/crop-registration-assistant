import { callAssistant } from '../../../services/openai'
import { cleanInput } from '../../../lib/utils'


export async function POST(req) {
    console.log('request recieved...', req)

    const form = await req.formData()
    
    const transcription = cleanInput(form.get('data'))

    /**
     * Simple form validation
     */
    if(!transcription) {
        return new Response('Bad Request', {
            status: 400,
        })
    }

    console.log('using assistant api...')

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

    const message = items.map(item => item.text).join(' ')
    let data = {}

    try {

        const structuredOutput = await callAssistant(message)
    
        data = structuredOutput

        console.log(data)

    } catch(error) {

        console.log(error.name, error.message)

    } finally {

        /**
         * Sample output
         */
        //const data = "WEBVTT\n\n00:00:00.000 --> 00:00:04.000\nThe party is starting now hurry up, let's go.\n00:00:04.000 --> 00:00:07.000\nHold this one, okay, do not drop it."

        return new Response(JSON.stringify({ 
            data,
        }), {
            status: 200,
        })

    }
    
}