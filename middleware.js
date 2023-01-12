import { NextResponse } from "next/server";
import Cookies from "js-cookie";

export default function middleware(req) {
  let verify = Cookies.get("tokenUser");
  let url = req.url;
  console.log(verify, url);
  if (!verify && url.includes("/dashboard")) {
    return NextResponse.redirect("http://localhost:3000/");
    
  }
}
