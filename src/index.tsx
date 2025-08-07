import React from "react";
import { createRoot } from "react-dom/client";
import GlobalStyles from "./styles";
import Pages from "./pages";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const client = new QueryClient();
const root = createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <GlobalStyles />
      <Pages />
    </QueryClientProvider>
  </React.StrictMode>
);
