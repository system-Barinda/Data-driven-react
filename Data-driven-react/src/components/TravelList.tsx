import travels from "../data/travels";
import TravelCard from "./TravelCard";

export default function TravelList() {
  return (
    <div className="travel-list ">
      {travels.map((travel) => (
        <TravelCard key={travel.id} travel={travel} />
      ))}
    </div>
  );
}
