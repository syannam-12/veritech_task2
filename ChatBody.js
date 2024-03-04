import React, { Component } from "react";
import "./chatBody.css";
import ChatList from "./ChatList.js";
import ChatContent from "./ChatContent.js";
import UserProfile from "./UserProfile.js";

export default class ChatBody extends Component {
  render() {
    return (
      <div className="main__chatbody">
        <ChatList />
        <ChatContent />
        <UserProfile />
      </div>
    );
  }
}