import { Chart, Footer, Header } from "./components";

import "./App.css";

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-col flex-1">
        <Chart />
      </main>
      <Footer />
    </div>
  );
};

export default App;
