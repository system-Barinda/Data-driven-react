import Navbar from "./components/Navbar";
import TravelCard from "./components/TravelCard";
import travels from "./data/travels";
import UserSlider from "./components/UserSlider";

const App: React.FC = () => {
  return (
    <>
      {/* <Navbar />
      <main className="px-10 py-8 max-w-xl mx-auto">
        {travels.map((travel) => (
          <TravelCard key={travel.id} travel={travel} />
        ))}
      </main> */}

      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
        <UserSlider />
      </div>
    </>
  );
};
export default App;

