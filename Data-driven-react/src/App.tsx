import Navbar from "./components/Navbar";
import TravelCard from "./components/TravelCard";
import travels from "./data/travels";

export default function App() {
  return (
    <>
      <Navbar />
      <main className="px-10 py-8 max-w-xl mx-auto">
        {travels.map((travel) => (
          <TravelCard key={travel.id} travel={travel} />
        ))}
      </main>
    </>
  );
}
