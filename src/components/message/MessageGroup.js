import React from "react";
import Message from "./Message";
import "./MessageGroup.css";
function MessageGroup(props) {
    const localeDate = new Date(props.title).toLocaleDateString(undefined, {
        weekday: "long",
        month: "long",
        day: "numeric",
    });
    return (
        <>
        <div className="divider__container">
            <div className="divider">
            <button className="divider_label">{localeDate}</button>
            <div></div>
            </div>
        </div>
        <>
            {props.messages.map((message) => (
                <Message
                    uid={message?.sender.uid}
                    name={message.sender?.name}
                    avatar={message.sender?.avatar}
                    message={message?.text}
                    timestamp={message?.sentAt}
                    key={message?.id}
                />
            ))}
        </>
        </>
    );
}

export default MessageGroup;
