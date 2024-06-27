import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Card from "./components/Card";

function App() {
  return (
    <>
      <Navbar />

      <div className="cards">
        <Card title="card1" description="card1 desc" />
        <Card />
        <Card />
        <Card />
      </div>

      <Footer />
    </>
  );
}

export default App;
