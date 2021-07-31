import "./message.scss";
export function Message({ messages }) {


  return (
    <div className="messages">
      {messages.map((message, id) => (
        <div className="messages__box" key={id}>
          <p className="messages__box-head">{message.author}:</p>
          <p className="messages__box-text">{message.value} </p>
        </div>
      ))}
    </div>
  );
}
