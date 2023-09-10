"use client";
import React from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
const UserLink = () => {
  const { status } = useSession();
  return (
    <div>
      {status === "authenticated" ? (
        <div>
          <Link href={"/orders"}>Orders</Link>
          <span onClick={() => signOut()}>Logout</span>
        </div>
      ) : (
        <Link href="/login">Login</Link>
      )}
    </div>
  );
};

export default UserLink;
