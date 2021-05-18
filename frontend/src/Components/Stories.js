import React from "react";

const Stories = () => {
  const [state, setState] = React.useState([
    { id: 1, image: "https://lh3.googleusercontent.com/proxy/ZgBlX7v1YSElUOSmo48GHMqb6svx33rDI-8rCK7GQnrUkaFdj8kFhKrZIGF5vEwADxfuDptROU6aqbUzMjhMOVefvCDPQ5XMwXTHQKgB_S21ENgLvH0fLg", name: "rahul32" },
    { id: 2, image: "https://lh3.googleusercontent.com/proxy/ZgBlX7v1YSElUOSmo48GHMqb6svx33rDI-8rCK7GQnrUkaFdj8kFhKrZIGF5vEwADxfuDptROU6aqbUzMjhMOVefvCDPQ5XMwXTHQKgB_S21ENgLvH0fLg", name: "amit32" },
    { id: 3, image: "https://lh3.googleusercontent.com/proxy/ZgBlX7v1YSElUOSmo48GHMqb6svx33rDI-8rCK7GQnrUkaFdj8kFhKrZIGF5vEwADxfuDptROU6aqbUzMjhMOVefvCDPQ5XMwXTHQKgB_S21ENgLvH0fLg", name: "babbar42" },
    { id: 4, image: "https://lh3.googleusercontent.com/proxy/ZgBlX7v1YSElUOSmo48GHMqb6svx33rDI-8rCK7GQnrUkaFdj8kFhKrZIGF5vEwADxfuDptROU6aqbUzMjhMOVefvCDPQ5XMwXTHQKgB_S21ENgLvH0fLg", name: "ahmed2" },
    { id: 5, image: "https://lh3.googleusercontent.com/proxy/ZgBlX7v1YSElUOSmo48GHMqb6svx33rDI-8rCK7GQnrUkaFdj8kFhKrZIGF5vEwADxfuDptROU6aqbUzMjhMOVefvCDPQ5XMwXTHQKgB_S21ENgLvH0fLg", name: "saru432" },
    { id: 6, image: "https://lh3.googleusercontent.com/proxy/ZgBlX7v1YSElUOSmo48GHMqb6svx33rDI-8rCK7GQnrUkaFdj8kFhKrZIGF5vEwADxfuDptROU6aqbUzMjhMOVefvCDPQ5XMwXTHQKgB_S21ENgLvH0fLg", name: "adi5" },
    { id: 7, image: "https://lh3.googleusercontent.com/proxy/ZgBlX7v1YSElUOSmo48GHMqb6svx33rDI-8rCK7GQnrUkaFdj8kFhKrZIGF5vEwADxfuDptROU6aqbUzMjhMOVefvCDPQ5XMwXTHQKgB_S21ENgLvH0fLg", name: "aditya4" },
    { id: 8, image: "https://lh3.googleusercontent.com/proxy/ZgBlX7v1YSElUOSmo48GHMqb6svx33rDI-8rCK7GQnrUkaFdj8kFhKrZIGF5vEwADxfuDptROU6aqbUzMjhMOVefvCDPQ5XMwXTHQKgB_S21ENgLvH0fLg", name: "athiya4" },
    { id: 9, image: "https://lh3.googleusercontent.com/proxy/ZgBlX7v1YSElUOSmo48GHMqb6svx33rDI-8rCK7GQnrUkaFdj8kFhKrZIGF5vEwADxfuDptROU6aqbUzMjhMOVefvCDPQ5XMwXTHQKgB_S21ENgLvH0fLg", name: "amal4" },
  ]);
  return (
    <div className="stories">
      {state.map((user) => (
        <div className="stories__info" key={user.id}>
          <div className="stories__img">
            <span>
              <img src={user.image} alt="user" />
            </span>
          </div>
          <div className="stories__name">{user.name}</div>
        </div>
      ))}
    </div>
  );
};

export default Stories;
