// page.tsx
import { Suspense } from "react";
import BookAppointmentClient from "./BookAppointmentClient/BookAppointmentClient";

export default function Page() {
  return (
    <Suspense fallback={<div className="text-center mt-5">Loading...</div>}>
      <BookAppointmentClient />
    </Suspense>
  );
}
