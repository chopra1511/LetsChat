import { useRef, useState } from "react";
import classes from "./TextBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { chatActions } from "../../store/chatSlice";
import { Mention, MentionsInput } from "react-mentions";
import dummyStyle from "./dummyStyle.jsx";
import demo from "./demo.jsx";

const TextBox = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const name = useSelector((state) => state.chat.user_list);
  const user = name.map((name) => name.name);
  const randomName = user[Math.floor(Math.random() * user.length)];
  //   const textRef = useRef("");

  const formHandler = (e) => {
    e.preventDefault();

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

  return (
    <div>
      <form className={classes.container} onSubmit={formHandler}>
        <MentionsInput
          singleLine
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Type a message...use @ to mention user"
          a11ySuggestionsListLabel={"Mentioned users"}
          style={dummyStyle}
          required
        >
          <Mention data={name} style={demo} />
        </MentionsInput>
      </form>
    </div>
  );
};

export default TextBox;
