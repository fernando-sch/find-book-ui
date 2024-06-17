import { BooksProvider } from "./contexts/BooksContext";
import { AppRoutes } from "./routes";

const App = () => {
  return (
    <BooksProvider>
      <AppRoutes />
    </BooksProvider>
  );
};

export default App;
