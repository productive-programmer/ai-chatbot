Checkout my productivity course at: https://www.productiveprogrammer.com

IMPORTANT UPDATE: The SESSION_TOKEN solution no longer works (since the time I recorded my video). But, you can modify this code to use your username and password as a login, more details on how to do that along with the latest authentication strategies can be located here: https://github.com/transitive-bullshit/chatgpt-api 

Original Video Tutorial: https://youtu.be/dhg-ASSKnDM

Note: Please feel free to contribute any pull requests to expand this command line tool and I will merge them in to keep this repository relevant. Thank you!

![AI Chatbot Demo](media/demo.gif)

# AI Chatbot in Your Terminal

## Install

```bash
git clone https://github.com/productive-programmer/ai-chatbot.git
```
or
```bash
git clone git@github.com:productive-programmer/ai-chatbot.git
```

then

```bash
cd ai-chatbot
npm install
```

**This package requires a valid session token from ChatGPT to access it's unofficial REST API.**

To get a session token:

1. Go to https://chat.openai.com/chat and log in or sign up.
2. Open dev tools.
3. Open `Application` > `Cookies`.
   ![ChatGPT cookies](./media/session-token.png)
4. Copy the value for `__Secure-next-auth.session-token` and save it to your environment.
```bash
export SESSION_TOKEN="<YOUR TOKEN HERE>"
```

## Run Code
```bash
npx tsx src/demo.ts
```
