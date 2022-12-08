Checkout my productivity course at: https://www.productiveprogrammer.com


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
