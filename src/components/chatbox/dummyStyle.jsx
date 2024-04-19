export default {
  control: {
    backgroundColor: "#fff",
    fontSize: 18,
    fontWeight: "normal",
    padding: 20,
    width: "70vw",
  },

  //   "&multiLine": {
  //     control: {
  //       fontFamily: "monospace",
  //       minHeight: 63,
  //     },
  //     highlighter: {
  //       padding: 9,
  //       border: "1px solid transparent",
  //     },
  //     input: {
  //       padding: 9,
  //       border: "1px solid silver",
  //     },
  //   },

  "&singleLine": {
    display: "inline-block",

    highlighter: {
      padding: 1,
      border: "2px inset transparent",
    },
    input: {
      padding: "10px 15px",
      border: "none",
      outline: "none",
      borderRadius: "20px",
      fontFamily: "Poppins",
    },
  },

  suggestions: {
    list: {
      backgroundColor: "white",
      border: "1px solid rgba(0,0,0,0.15)",
      borderRadius: "20px",
      padding: "20px",
      fontSize: 14,
      fontFamily: "Quicksand",
      fontWeight: 600,
      position: "absolute",
      bottom: 30,
      left: 60,
    },
    item: {
      padding: "10px 15px",
      // borderBottom: "1px solid rgba(0,0,0,0.15)",
      "&focused": {
        backgroundColor: "#cee4e5",
        borderRadius: 8,
      },
    },
  },
};
