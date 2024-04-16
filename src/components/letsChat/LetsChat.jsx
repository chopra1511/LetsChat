import ChatBox from "../chatbox/ChatBox";
import SideBar from "../sidebar/SideBar";
import classes from "./LetsChat.module.css";

const LetsChat = () => {
  return (
    <div className={classes.lets__chat}>
      <div className={classes.sidebar}>
              <SideBar />
              {/* <h1>This is the side bar</h1> */}
      </div>
      <div className={classes.chatbox}>
              <ChatBox />
              {/* <h2>Hello, I'm a chatbot! How can I help you today?</h2> */}
      </div>
    </div>
  );
};

export default LetsChat;
