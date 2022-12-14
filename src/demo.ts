import { ChatGPTAPI } from 'chatgpt'

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

console.log(`AI Loaded..`);
function promptHuman() {
    console.log(`To exit ai chatbot type "exit" or "q"\n`);
    readline.question(`What would you would like to ask your AI overlords? `, question => {
    
        if (["exit", "q"].includes(question.toLowerCase())) {
            console.log(`Exiting..`)
            readline.close()
            process.exit()
        }

        askAI(question)
    });
}

// Example questions to ask: 
// "Write a python version of bubble sort. Do not include example usage."
// "Create me a page in bootstrap with a header and three content cards below it."
async function askAI(question) {
    console.log(`The AI is Researching: "${question}"...\n`)
    console.log(`This may take a minute..\n\n`)

    // sessionToken is required (from https://chat.openai.com/chat); see README.md for details
    const api = new ChatGPTAPI({ sessionToken: process.env.SESSION_TOKEN })

    // ensure the API is properly authenticated
    await api.ensureAuth()

    // send a message and wait for the response
    const response = await api.sendMessage(question)

    // AI's response is a markdown-formatted string
    console.log(response)

    // see if the human wants to ask another question
    promptHuman()
}

// Accepts command line input(question) otherwise prompts human to ask a question
const args = process.argv.slice(2)
const command_line_question = args.join(' ')
if (command_line_question) {
    askAI(command_line_question)
} else {
    promptHuman()
}

