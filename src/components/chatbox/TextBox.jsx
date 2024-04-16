import { useRef } from "react";
import classes from "./TextBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { chatActions } from "../../store/chatSlice";
// import { Mention, MentionsInput } from "react-mentions";

const TextBox = () => {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.chat.user_list);
  const user = name.map((name) => name.name)
  const randomName = user[Math.floor(Math.random() * user.length)];
  const textRef = useRef("");

  const formHandler = (e) => {
    e.preventDefault();

    dispatch(
      chatActions.addText({
        id: Math.random().toString(),
        name: randomName,
        text: textRef.current.value,
        time: new Date().toLocaleTimeString(),
        likes: 0,
      })
    );
      
      textRef.current.value = "";
  };


  return (
    <div>
      <form className={classes.container} onSubmit={formHandler}>
        <input
          type="text"
          className={classes.input}
          placeholder="Enter your message here..."
          ref={textRef}
          required
        />
        {/* <MentionsInput
          singleLine
          a11ySuggestionsListLabel={"Mentioned users"}
          className={classes.input}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        >
          <Mention data={name} trigger="@"/>
        </MentionsInput> */}
      </form>
    </div>
  );
};

export default TextBox;
