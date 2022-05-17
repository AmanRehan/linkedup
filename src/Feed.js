import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import CreateIcon from "@mui/icons-material/Create";
import EventNoteIcon from "@mui/icons-material/EventNote";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

import "./Feed.css";
import { db } from "./firebase";
import InputOption from "./InputOption";
import Post from "./Post";

/* 
	Firebase v9 (Modular docs)
	https://firebase.google.com/docs/firestore/manage-data/add-data#add_a_document
*/

function Feed() {
  const user = useSelector(selectUser);
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  const fetchPosts = () => {
    // Firestore collection, onSnapshot v9 (Use modular approach, do not use namespaced)
    // To use namespaced imports, use firebase sdk v9
    onSnapshot(
      collection(db, "posts"),
      orderBy("timestamp", "desc"),
      (snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
    );
    setInput("");
  };

  useEffect(() => fetchPosts(), []);

  const sendPost = async (e) => {
    e.preventDefault();

    const addObject = {
      name: user.displayName, //Before -> name : "Aman Rehan"
      description: user.email, //Before -> description : "This is a test"
      message: input,
      photoUrl: user.photoUrl || "", //Before -> photoUrl : ""
      timeStamp: serverTimestamp(),
    };
    // Add object to firestore (v9 Modular Syntax)
    const docRef = await addDoc(collection(db, "posts"), addObject);
    console.table(docRef);
    if (docRef.id) {
      fetchPosts();
    }

    // Firebase SDK v8 syntax
    // db.collection("posts").add({
    // 	name: "Aman Rehan",
    // 	description: "This is a post",
    // 	message: input,
    // 	photoUrl: "",
    // 	timeStamp: firebase.fireStore.FieldValue.serverTimeStamp(),
    // });
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form action="">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={ImageIcon} title="Photo" color="blue" />
          <InputOption Icon={SubscriptionsIcon} title="Video" color="green" />
          <InputOption Icon={EventNoteIcon} title="Event" color="orange " />
          <InputOption
            Icon={CalendarViewDayIcon}
            title="Write Article"
            color="gray"
          />
        </div>
      </div>
      {/* Post */}
      {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
        <Post
          key={id}
          name={name}
          description={description}
          message={message}
          photoUrl={photoUrl}
        />
      ))}
      {/* <Post name="Aman Rehan" description="Test" message="Wow This worked"/> */}
    </div>
  );
}

export default Feed;
