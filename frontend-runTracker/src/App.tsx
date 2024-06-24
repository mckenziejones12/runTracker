import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ActivityTable } from "./components/ActivityTable";

const App = () => {
  return (
    <>
      <header>
        <Header
          title="Run Tracker"
          description="Keep track of your run workouts and see your progress!"
        />
      </header>
      <main>
        <ActivityTable
          dateHeader="Date"
          milesHeader="Miles"
          paceHeader="Pace"
          HRHeader="HR"
          calHeader="Total Cals"
          date="May 1, 2024"
          miles={5}
          pace="9:40"
          HR={160}
          cal={500}
        />
      </main>
      <footer>
        <Footer title="McKenzie Jones &copy; 2024" />
      </footer>
    </>
  );
};

export default App;
