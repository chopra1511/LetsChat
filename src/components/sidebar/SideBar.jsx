import classes from "./SideBar.module.css";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import IconButton from "@mui/material/IconButton";


const SideBar = () => {
  return (
    <div className={classes.sidebar}>
      <div className={classes.header}>
        <div className={classes.profile__picture}>
          <h1>RC</h1>
          <span></span>
        </div>
        <div className={classes.user__info}>
          <h1>Rahul Chopra</h1>
          <h4>Frontend Developer</h4>
        </div>
      </div>
      <div className={classes.container}>
        <div className={classes.conversation}>
          <h1>Conversations</h1>
          <IconButton>
            <AddCircleOutlineRoundedIcon />
          </IconButton>
        </div>
        <div className={classes.chats}>
          <div className={classes.chat}>
            <p>#</p>
            <h3>Poland Office</h3>
          </div>
          <div className={classes.chat}>
            <p>#</p>
            <h3>Introductions</h3>
          </div>
          <div className={classes.chat}>
            <p>#</p>
            <h3>India Office</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
