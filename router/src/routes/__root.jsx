import * as React from "react";
import { Outlet, createRootRoute, Link } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { Suspense } from "react";
import { ClipLoader } from "react-spinners";

export const Route = createRootRoute({
  component: RootComponent,
  defaultPreload: "intent",
});

function RootComponent() {
  return (
    <React.Fragment>
      <nav>
        <Link to="/">Home</Link> | <Link to="/play">Play</Link> |{" "}
        <Link to="/Products">Products</Link>
      </nav>
      <Suspense fallback={<ClipLoader color="#3498db" size={40} />}>
        <Outlet />
      </Suspense>
      <TanStackRouterDevtools />
    </React.Fragment>
  );
}
