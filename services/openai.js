import OpenAI from 'openai'

const openai = new OpenAI({
    apiKey: process.env.OPENAI_APIKEY,
    maxRetries: 4,
    timeout: 60 * 1000 // 60s
})

export async function whisper({
    mode = 'transcriptions',
    file,
    model = 'whisper-1',
    prompt = '',
    response_format = 'json',
    temperature = 0,
    language = 'en',
}) {

    const options = {
        file,
        model,
        prompt,
        response_format,
        temperature,
        language,
    }

    try {

        const response = mode === 'translations' ? await openai.audio.translations.create(options) : await openai.audio.transcriptions.create(options)
        
        return response

    } catch(error) {
        
        console.log(error.name, error.message)

        throw error
        
    }

}

// need to break this out into its own API call

export async function callAssistant(message) {
    try {
        // send a message to my openai assistant, assistant asst_umqBgIuYRHut3vDQDZC9ts7y
        const thread = await openai.beta.threads.create();

        const threadMessage = await openai.beta.threads.messages.create(thread.id, {
            role: "user",
            content: message
          });

        const run = await openai.beta.threads.runs.create(thread.id, {
            assistant_id: "asst_umqBgIuYRHut3vDQDZC9ts7y",
          });
        
        while (run.status != "completed") {
            const asstRun = await openai.beta.threads.runs.retrieve(thread.id, run.id);

            console.log(`Run status: ${asstRun.status}`)
      
          if (asstRun.status == "completed") {
              console.log("\n")
              break
          }
        }

        const messages = await openai.beta.threads.messages.list(thread.id, {run_id: run.id});

        const data = messages.data[0];
        
        const value = data.content[0].text.value;
      
        const jsonResponse = JSON.parse(value);

        return jsonResponse

    } catch(error) {

        console.log(error.name, error.message)

        throw error
        
    }

}