// app/contact/page.js
"use client";

import { Suspense } from "react";
import ContactPage from "./ContactPage";

export default function ContactPageWrapper() {
  return (
    <Suspense fallback={<div>Loading contact page...</div>}>
      <ContactPage/>
    </Suspense>
  );
}
