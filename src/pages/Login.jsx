import { Amplify, graphqlOperation } from "aws-amplify";
import { withAuthenticator, Heading } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import awsExports from "../aws-exports";
Amplify.configure(awsExports);

function Login() {
  return (
    <div>
      <img src="" />
      <Heading>Hello</Heading>
    </div>
  );
}

export default withAuthenticator(Login);
