import "../styles/globals.css";
import { ClerkProvider } from "@clerk/clerk-react";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const clerkFrontendApi = process.env.NEXT_PUBLIC_CLERK_FRONTEND_API;

  return (
    <ClerkProvider
      frontendApi={clerkFrontendApi}
      navigate={(to) => router.push(to)}
    >
      <Component {...pageProps} />
    </ClerkProvider>
  );
}

export default MyApp;
