import classes from "./ChatBox.module.css";
import PeopleRoundedIcon from "@mui/icons-material/PeopleRounded";
import IconButton from "@mui/material/IconButton";
import TextBox from "./TextBox";
import Messages from "./Messages";
import { useSelector } from "react-redux";

const ChatBox = () => {
  const messages = useSelector((state) => state.chat.messages);
  console.log(messages);
  return (
    <div className={classes.chat__box}>
      <div className={classes.header}>
        <div className={classes.left_area}>
          <h1>Introductions</h1>
          <h4>This Channel is for Company Wide Chatter</h4>
        </div>
        <div className={classes.right_area}>
          <h4>3 / 100</h4>
          <IconButton>
            <PeopleRoundedIcon fontSize="large" />
          </IconButton>
        </div>
      </div>
      <div className={classes.middle}>
        <div className={classes.messages}>
          {messages.map((message, index) => (
            <div key={index}>
              <Messages message={message} />
            </div>
          ))}
        </div>
      </div>
      <div className={classes.footer}>
        <TextBox />
      </div>
    </div>
  );
};

export default ChatBox;
