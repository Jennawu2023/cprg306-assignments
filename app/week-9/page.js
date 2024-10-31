"use client";


import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";


export default function Page() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    const login = async () => {
        await gitHubSignIn();
    };
 
    const logout = async () => {
        await firebaseSignOut();
    };
 
    return (
       <main>
            <h1>Week 92</h1>
            {user ? (
                <div>
                    <p>Welcome, {user.displayName} ({user.email})</p>
                    <div>
                       <Link href="/week-9/shopping-list">Go to My Shopping List</Link>
                    </div>
                    <button onClick={logout}>Logout</button>
                </div>
            ) : (
                <div>
                    <button onClick={login}>Login</button>
                </div>
                
            )}
        </main>
    );
}
