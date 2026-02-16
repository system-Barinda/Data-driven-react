export default function TravelCard({ travel }) {
  return (
    <div className="travel-card">
      <img
        src={travel.image}
        alt={travel.title}
        className="travel-card-img"
      />

      <div className="travel-card-content">
        <span className="travel-card-country">📍 {travel.country}</span>
        <h2 className="travel-card-title">{travel.title}</h2>
        <p className="travel-card-date">{travel.date}</p>
        <p className="travel-card-desc">{travel.description}</p>
      </div>
    </div>
  );
}
