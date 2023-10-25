# How to Build a Team Messenger Site With React (Slack-demo)

This repo is a fork of [slack-clone](https://github.com/Daltonic/slack-clone)

## The slack-demo project is to add more flashy features to make it more user-friendly

- Better User Interface
- Rewrite friend list in channel (has display bug before rewrite)
- The chat box UI has been optimized: Group messages by date
- Enhenced rich text editor for communication
- Optimized the input text editor
- Now, the users are able to send emojis :D
- Users is able to expand/collapse channel list and DM list
- Allow users update their avatar from the local device
- Input text editor now have multiple formating tools
- User Avatar has the status of the current user 
- User can send pictures/emojis among the text
- Now, the users can mention others in the chat
- Website deployment

## This section shows most of updated features With React (Slack-demo):

## Technology

This demo project uses:

- React
- Node v16.14.2
- CometChat Pro 3.0.10
- Firebase
- Material Icons
- Emoji-picker-react
- Slatejs


## Todo list

- [x] rewrite friend list in channel section
- [x] optimize chatbox UI group messages by date
- [ ] enhence rich text editor
- [ ] update message input box to support emoji，markdown and attachments
- [ ] enable users to expand/collapse channel list and DM list
- [ ] enable user to upload their avatar
- [ ] enable formatting tools 
- [ ] enable user status icon
- [ ] enable emojis and pictures among the text input
- [ ] enable users tom mention others
- [ ] website deployment
- [ ] enable users to create a new chat from the clicking on sidebar button
- [ ] refactor the code to use redux
- [ ] refactor the code to use docker
- [ ] refactor the code to use typescript

## Running the demo

To run the demo follow these steps:

1. [Head to CometChat Pro and create an account](https://app.cometchat.com/signup)
2. From the [dashboard](https://app.cometchat.com/apps), add a new app called **"slack-clone"**
3. Select this newly added app from the list.
4. From the Quick Start copy the **APP_ID, APP_REGION and AUTH_KEY**. These will be used later.
5. Also copy the **REST_API_KEY** from the API & Auth Key tab.
6. Navigate to the Users tab, and delete all the default users and groups leaving it clean **(very important)**.
7. Download the repository [here](https://github.com/TheCrowd/slack-clone.git) or by running `git clone https://github.com/TheCrowd/slack-clone.git` and open it in a code editor.
8. [Head to Firebase and create a new project](https://console.firebase.google.com)
9. Create a file called **app.config.js** in the **src** folder of your project.
10. Import and inject your secret keys in the **app.config.js** file containing your CometChat and Firebase in this manner.

```js
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "xxx-xxx-xxx-xxx-xxx-xxx-xxx-xxx",
  authDomain: "xxx-xxx-xxx-xxx-xxx-xxx-xxx",
  databaseURL: "xxx-xxx-xxx-xxx-xxx-xxx-xxx-xxx-xxx",
  projectId: "xxx-xxx-xxx",
  storageBucket: "xxx-xxx-xxx-xxx-xxx",
  messagingSenderId: "xxx-xxx-xxx",
  appId: "xxx-xxx-xxx-xxx-xxx-xxx-xxx-xxx",
  measurementId: "xxx-xxx-xxx",
};

const cometChat = {
  APP_ID: "xxx-xxx-xxx",
  AUTH_KEY: "xxx-xxx-xxx-xxx-xxx-xxx-xxx-xxx",
  REST_KEY: "xxx-xxx-xxx-xxx-xxx-xxx-xxx-xxx",
  APP_REGION: "xx",
};

export { firebaseConfig, cometChat };
```

11. Make sure to exclude **app.config.js** in your gitIgnore file from being exposed online.
12. Run the following command to install the app.

```sh
    npm install
    npm start
```
