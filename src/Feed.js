import React, { useEffect, useState } from 'react'
import './Feed.css'
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import InputOption from './InputOption';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from './Post';
import { db } from './firebase';
import firebase from './firebase';


function Feed() {
    const [input, setInput] = useState("");
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts").onSnapshot((snapshot) => 
            setPosts(
                snapshot.docs.map((doc) =>({
                    id: doc.id,
                    data: doc.data(),
                }))
            )
        );
    }, []);

    const sendPost = e => {
        e.preventDefault();

        db.collection("posts").add({
            name: "Aman Rehan",
            description: "This is a post",
            message: input, 
            photoUrl: "",
            timeStamp: firebase.fireStore.FieldValue.serverTimeStamp(),
        });
    }

    return (
    <div className="feed">
        <div className="feed__inputContainer">
            <div className="feed__input">
                <CreateIcon />
                <form action="">
                    <input value={input} onChange={e => setInput(e.target.value)} type="text" />
                    <button onClick={sendPost} type="submit">Send</button>
                </form>
            </div>
            <div className="feed__inputOptions">
                <InputOption Icon={ImageIcon} title="Photo" color="blue"/>
                <InputOption Icon={SubscriptionsIcon} title="Video" color="green"/>
                <InputOption Icon={EventNoteIcon} title="Event" color="orange "/>
                <InputOption Icon={CalendarViewDayIcon} title="Write Article" color="gray"/>
            </div>
        </div>
        {/* Post */}
        {posts.map(({id, data: {name, description, message, photoUrl } }) =>(
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
  )
}

export default Feed