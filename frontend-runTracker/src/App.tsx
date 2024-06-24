import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

const App = () => {
  return (
    <>
      <header>
        <Header
          title="Run Tracker"
          description="Keep track of your run workouts and see your progress!"
        />
      </header>
      <main>main content</main>
      <footer>
        <Footer title="McKenzie Jones &copy; 2024" />
      </footer>
    </>
  );
};

export default App;
