import "../styles/message.scss";

export function Message(props) {
  return (
    <div className="message__box">
      <p className="message__box-head">{props.messageFrom}:</p>
      <p className="message__box-text"> {props.messageText}</p>
    </div>
  );
}
