import React, { useState } from "react";
import "./styles.css";

// Object
var emojiDictionary = {
  "🤣": "Rolling on the Floor Laughing",
  "😂": "Face with Tears of Joy",
  "😊": "Smiling Face with Smiling Eyes",
  "🥰": "Smiling Face with Hearts",
  "😋": "Face Savoring Food",
  "🤗": "Smiling Face with Open Hands",
  "😐": "Neutral Face",
  "😑": "Expressionless Face",
  "😏": "Smirking Face",
  "😒": "Unamused Face",
  "🤥": "Lying Face",
  "😔": "Pensive Face",
  "😕": "Confused Face",
  "😟": "Worried Face",
  "😨": "Fearful Face",
  "😰": "Anxious Face with Sweat",
  "😥": "Sad but Relieved Face",
  "🤏": "Pinching Hand",
  "✌️": "Victory Hand",
  "🤟": "Love-You Gesture",
  "🤙": "Call Me Hand",
  "✊": "Raised Fist",
  "👊": "Oncoming Fist",
  "👐": "Open Hands"
};

// Converting an object to array of keys
var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("......................");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "Sorry, This emoji is not there in our Database.";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Emoji Interpreter</h1>
      <input
        placeholder="🔍 Search Your Emoji"
        onChange={emojiInputHandler}
      ></input>
      <div className="style">Meaning: {meaning} </div>
      <ul>
        {emojisWeKnow.map(function (emoji) {
          return (
            <ol
              key={emoji}
              onClick={() => emojiClickHandler(emoji)}
              style={{
                display: "inline",
                fontSize: "2rem",
                padding: "0.5rem",
                cursor: "pointer"
              }}
            >
              {emoji}
            </ol>
          );
        })}
      </ul>
    </div>
  );
}
