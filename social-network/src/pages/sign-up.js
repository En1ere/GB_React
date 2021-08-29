import { Link } from "react-router-dom";
import { firebaseApp } from "../api/firebase";
import { LoginForm, AuthTemplate } from "../components";

const onSubmit = (email, password) => {
  console.log(email, password);
  return firebaseApp.auth().createUserWithEmailAndPassword(email, password);
};

export function SignUp() {
  return (
    <AuthTemplate link={<Link to="login">Have an account? Sign In</Link>}>
      <LoginForm
        title="Signing Up"
        submitButton="Sign Up"
        onSubmit={onSubmit}
      />
    </AuthTemplate>
  );
}
