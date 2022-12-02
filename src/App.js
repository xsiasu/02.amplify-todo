import { Amplify, graphqlOperation } from "aws-amplify";

import Home from "./pages/Home";
import Login from "./pages/Login";

import awsExports from "./aws-exports";
import { withAuthenticator, Button, Heading } from "@aws-amplify/ui-react";
Amplify.configure(awsExports);
const App = ({ user }) => {
  return (
    <div>
      {user && (
        <>
          <Home />
        </>
      )}
    </div>
  );
};

export default withAuthenticator(App);
