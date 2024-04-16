export default {
  control: {
    // backgroundColor: "#fff",
    fontSize: 18,
        fontWeight: "normal",
        padding: 20,
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
    // display: "inline-block",

    highlighter: {
      padding: 1,
      border: "2px inset transparent",
    },
    input: {
      padding: "10px 15px",
        border: "1px solid black",
       width: "70vw",
        outline: "none",
        borderRadius: "20px",
        fontFamily: "Poppins"
    },
  },

  suggestions: {
    list: {
      backgroundColor: "white",
          border: "1px solid rgba(0,0,0,0.15)",
          padding: 10,
          fontSize: 14,
          fontFamily: "Quicksand",
          fontWeight: 400,
          position: "absolute",
          bottom: 30,
      
    },
    item: {
      padding: "10px 15px",
      borderBottom: "1px solid rgba(0,0,0,0.15)",
      "&focused": {
        backgroundColor: "#cee4e5",
      },
    },
  },
};
