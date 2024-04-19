import ChatBox from "../chatbox/ChatBox";
import SideBar from "../sidebar/SideBar";
import classes from "./LetsChat.module.css";

const LetsChat = () => {
  return (
    <div className={classes.lets__chat}>
      <div className={classes.sidebar}>
        <SideBar />
      </div>
      <div className={classes.chatbox}>
        <ChatBox />
      </div>
    </div>
  );
};

export default LetsChat;
