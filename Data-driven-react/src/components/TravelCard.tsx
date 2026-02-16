import "./Travel.css";

export default function TravelCard({ travel }) {
  return (
    <div className="card">
      <img src={travel.image} alt={travel.title} className="card-img" />

      <div className="card-content">
        <span className="card-country">📍 {travel.country}</span>
        <h2>{travel.title}</h2>
        <p className="card-date">{travel.date}</p>
        <p className="card-desc">{travel.description}</p>
      </div>
    </div>
  );
}
