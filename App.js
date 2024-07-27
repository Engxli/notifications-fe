// import "./gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MainNavigation from "./src/navigations/MainNavigation";

export default function App() {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <NavigationContainer>
        <MainNavigation />
      </NavigationContainer>
    </QueryClientProvider>
  );
}
