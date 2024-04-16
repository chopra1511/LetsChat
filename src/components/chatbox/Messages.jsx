/* eslint-disable react/prop-types */
import classes from "./Messages.module.css";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import IconButton from "@mui/material/IconButton";
import { useSelector, useDispatch } from "react-redux";
import { chatActions } from "../../store/chatSlice";
import Stack from "@mui/material/Stack";
import Badge from "@mui/material/Badge";
import { useEffect, useRef } from "react";

const Messages = ({ message }) => {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [message]);

  
  const dispatch = useDispatch();
  
  const likeHandler = (id) => {
    console.log(id);
    dispatch(chatActions.addLike(id));
  }

  const firstLetter = message.name.charAt(0).toUpperCase();
  console.log(firstLetter);

  return (
    <>
      <div className={classes.container}>
        <div className={classes.info}>
          <h1>{firstLetter}</h1>
          <h4>{message.name}</h4>
          <p>{message.time}</p>
          <span>
            <IconButton onClick={() => likeHandler(message.id)}>
              <Stack
                spacing={4}
                direction="row"
                sx={{ color: "action.active" }}
              >
                <Badge color="primary" badgeContent={message.likes}>
                  {message.likes <= 0 ? (
                    <FavoriteBorderRoundedIcon />
                  ) : (
                    <FavoriteRoundedIcon sx={{ color: "red" }} />
                  )}
                </Badge>
              </Stack>
            </IconButton>
          </span>
        </div>
        <div className={classes.text}>
          <p>{message.text}</p>
        </div>
        <div ref={messagesEndRef} />
      </div>
    </>
  );
};

export default Messages;
