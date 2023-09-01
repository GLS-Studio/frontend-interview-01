"use client";
import awsconfig from "./aws-exports";
import { Amplify, Auth } from "aws-amplify";
import type { WithAuthenticatorProps } from "@aws-amplify/ui-react";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { useEffect, useState } from "react";
import { initAmplify } from "./services/initialization";
import List from "./components/List";
import Add from "./components/Add";

initAmplify();

function Main({ signOut, user }: WithAuthenticatorProps) {
  const [items, setItems] = useState<string[]>([]);
  return (
    <>
      <List items={items} />
      <Add setItems={setItems as any} />
      <button onClick={signOut}>Sign out</button>
    </>
  );
}

export default withAuthenticator(Main, {
  hideSignUp: true,
  loginMechanisms: ["email"],
});
