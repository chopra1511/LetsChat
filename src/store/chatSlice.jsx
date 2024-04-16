import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  messages: [
    {
      id: 1,
      name: "Rahul",
      text: "Welcome to Team Chat, Send a message now to start interacting with other users in the app.",
      time: new Date().toLocaleTimeString(),
      likes: 99,
    },
  ],
  user_list: [
    {
      id: 0,
      display: "@Alan",
      name: "Alan",
    },
    {
      id: 1,
      display: "@Bob",
      name: "Bob",
    },
    {
      id: 2,
      display: "@Carol",
      name: "Carol",
    },
    {
      id: 3,
      display: "@Dean",
      name: "Dean",
    },
    {
      id: 4,
      display: "@Elin",
      name: "Elin",
    },
  ],
  likes: 0,
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    addText(state, action) {
      const newMessage = action.payload;
          state.messages.push({
              id: newMessage.id,
              name: newMessage.name,
              text: newMessage.text,
            time: newMessage.time,
            likes: newMessage.likes
          });
          console.log(newMessage);
    },
    addLike(state, action) {
      let id = action.payload;
      state.messages.map((message) => {
        if (message.id === id) {
          message.likes++;
        }
      })
    }
  },
});

const store = configureStore({
  reducer: {
    chat: chatSlice.reducer,
  },
});

export const chatActions = chatSlice.actions;
export default store;
