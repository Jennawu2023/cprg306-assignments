"use client";


import { useUserAuth } from "../_utils/auth-context";

export default function Page() {
    const { user } = useUserAuth();

    if (!user) {
        return (
            <main>
                <h1>Week 9</h1>
                <p>You must be logged in.</p>
            </main>
        );}

  return (
    <main>
      <h1>Secure Page</h1>
      <p>Hi Welcome!</p>
    </main>
  );
  
}
 


