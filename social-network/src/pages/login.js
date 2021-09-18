import { Link } from "react-router-dom";
import { firebaseApp } from "../api/firebase";
import { LoginForm, AuthTemplate } from "../components";

const onSubmit = (email, password) => {
  return firebaseApp.auth().signInWithEmailAndPassword(email, password);
};

export function Login() {
  return (
    <AuthTemplate link={<Link to="sign-up">Have no account? Sign Up</Link>}>
      <LoginForm
        title="Signing In"
        submitButton="Sign In"
        onSubmit={onSubmit}
      />
    </AuthTemplate>
  );
}
