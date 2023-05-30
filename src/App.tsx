import { ToastContainer } from "react-toastify";
import { UserContextProvider } from "./contexts/UserContexts";
import { AuthProvider } from "./providers/AuthProvider";
import { RoutesMain } from "./routes";
import { GlobalStyle } from "./styles/GlobalStyles";
import "react-toastify/dist/ReactToastify.css";
import { ContactContextProvider } from "./contexts/ContactContexts";

function App() {
  return (
    <>
      <GlobalStyle />
      <UserContextProvider>
        <AuthProvider>
          <ContactContextProvider>
            <RoutesMain />
          </ContactContextProvider>
        </AuthProvider>
      </UserContextProvider>
      <ToastContainer />
    </>
  );
}

export default App;
