import { Message } from "./components/Message";
import "./styles/app.scss";

let messageFrom = "Alex";
let messageText = "Hello World!";

export function App() {
  return (
    <div>
      <header className="header__app">
        <h1>Welcome</h1>
      </header>
      <main>
        <Message messageText={messageText} messageFrom={messageFrom} />
      </main>
    </div>
  );
}
