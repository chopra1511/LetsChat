import { useRef, useState } from "react";
import classes from "./TextBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { chatActions } from "../../store/chatSlice";
import { Mention, MentionsInput } from "react-mentions";
import IconButton from "@mui/material/IconButton";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import "./TextBoxStyles.css";
import Picker from "emoji-picker-react";

const TextBox = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const name = useSelector((state) => state.chat.user_list);
  const emoji = useSelector((state) => state.chat.showEmoji);
  const user = name.map((name) => name.name);
  const randomName = user[Math.floor(Math.random() * user.length)];

  const handleChange = (event, newValue, newPlainTextValue, mentions) => {
    console.log("newVAlue:", newValue);
    console.log("newPlainTextValue:", newPlainTextValue);
    console.log("mentions:", mentions);
    setValue(newPlainTextValue);
  };

  const formHandler = (e, newPlainTextValue) => {
    e.preventDefault();
    console.log(newPlainTextValue);
      dispatch(
        chatActions.addText({
          id: Math.random().toString(),
          name: randomName,
          text: value,
          time: new Date().toLocaleTimeString(),
          likes: 0,
        })
      );

    // textRef.current.value = "";
    setValue(" ");
  };

  const toggleEmojiPicker = () => {
    dispatch(chatActions.toggleEmoji());
  };

  const onEmojiClick = (event) => {
    console.log(event.emoji);
    setValue((prevInput) => prevInput + event.emoji);
    toggleEmojiPicker();
  };

  return (
    <div>
      <form className={classes.container} onSubmit={formHandler}>
        <MentionsInput
          value={value}
          onChange={handleChange}
          markup="@{{__type__||__id__||__display__}}"
          placeholder="Type anything, use the @ symbol to tag other users."
          className="mentions"
          singleLine
          required
        >
          <Mention
            type="user"
            trigger="@"
            data={name}
            className="mentions__mention"
          />
        </MentionsInput>
        <div className={classes.buttonContainer}>
          <IconButton className={classes.emoji} onClick={toggleEmojiPicker}>
            <TagFacesIcon fontSize="large" color="action" />
          </IconButton>
          {emoji && (
            <div className={classes.emojipicker}>
              <Picker onEmojiClick={onEmojiClick} autoFocusSearch={false} width={"100%"} />
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default TextBox;
