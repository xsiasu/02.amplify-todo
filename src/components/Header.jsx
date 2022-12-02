import React from "react";
import { withAuthenticator, Heading, Button } from "@aws-amplify/ui-react";
const Header = ({ signOut, user }) => {
  return (
    <div>
      <Heading level={1}>{user.attributes.email}</Heading>
      <Heading level={1}>{user.attributes.phone_number}</Heading>
      <Button onClick={signOut}>Sign out</Button>
    </div>
  );
};

export default withAuthenticator(Header);
