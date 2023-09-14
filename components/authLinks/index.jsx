"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React, { useState } from "react";

const AuthLinks = () => {
  const { status } = useSession();

  const [open, setOpen] = useState(false);

  console.log(status);
  return (
    <>
      {status === "unauthenticated" ? (
        <Link className="hidden md:block" href="/login">
          Login
        </Link>
      ) : (
        <>
          <Link className="hidden md:block" href="/write">
            Write
          </Link>
          <span
            onClick={() => signOut()}
            className="hidden cursor-pointer md:block"
          >
            Logout
          </span>
        </>
      )}
      <div
        className={`flex h-5 cursor-pointer items-center justify-center gap-x-1 transition-all md:hidden ${
          open ? "rotate-45" : ""
        }`}
        onClick={() => setOpen(!open)}
      >
        <div
          className={`h-full w-1 bg-red-400 transition-all ${
            open ? "translate-x-2 rotate-90" : ""
          }`}
        ></div>
        <div className="h-full w-1 bg-red-400"></div>
        <div
          className={`h-full w-1 bg-red-400 transition-all ${
            open ? "-translate-x-2 rotate-90" : ""
          }`}
        ></div>
      </div>
      <div
        className={`${
          open ? "left-0 opacity-100" : "-left-full opacity-0"
        } absolute top-20 flex h-[calc(100%-80px)] w-full flex-col items-center justify-center gap-y-10 bg-slate-200 text-4xl transition-all dark:bg-slate-900 md:hidden`}
      >
        <Link href="/">Homepage</Link>
        <Link href="/">Contact</Link>
        <Link href="/">About</Link>
        {status === "unauthenticated" ? (
          <Link href="/login">Login</Link>
        ) : (
          <>
            <Link href="/write">Write</Link>
            <span onClick={() => signOut()} className="cursor-pointer">
              Logout
            </span>
          </>
        )}
      </div>
    </>
  );
};

export default AuthLinks;
