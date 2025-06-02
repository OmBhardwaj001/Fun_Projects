import { createFileRoute } from "@tanstack/react-router";
import React, { Suspense } from "react";
import { ClipLoader } from "react-spinners";
export const Route = createFileRoute("/play")({
  component: RouteComponent,
});

// const Play = React.lazy(()=> import('../components/Play'))

const Play = React.lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(import("../components/Play"));
      }, 5000);
    })
);

function RouteComponent() {
  return (
    <div>
      <h1>lets play here</h1>
      <Suspense fallback={<ClipLoader color="#3498db" size={40} />}>
        <Play />
      </Suspense>
    </div>
  );
}
