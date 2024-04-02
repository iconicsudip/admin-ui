import { MutationCache, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { IconContext } from "react-icons";
import { Provider } from "react-redux";
import { store } from "./store";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: false,
    },
  },
  mutationCache: new MutationCache({
    onError: (error) => {
      console.log(error);
    },
  }),
});

function App({ children }: { children: React.ReactNode }) {

  return (
    <IconContext.Provider
      value={{
        style: {
          verticalAlign: "middle",
          width: 20,
          height: 20,
          strokeWidth: 2,
          color: "#94a3b8",
        },
      }}
    >
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
        <IconContext.Provider
          value={{ style: { verticalAlign: "middle" } }}
        >
          {children}
        </IconContext.Provider>
        </Provider>
      </QueryClientProvider>
    </IconContext.Provider>
  )
}

export default App
