export default function TravelCard({ travel }) {
  return (
    <div className="flex gap-5 py-6 border-b border-gray-200">
      {/* Image */}
      <img
        src={travel.image}
        alt={travel.title}
        className="w-[125px] h-[170px] rounded-lg object-cover"
      />

      {/* Content */}
      <div className="max-w-md">
        {/* Location */}
        <div className="flex items-center gap-2 text-xs uppercase tracking-wider">
          <span className="text-red-500">📍</span>
          <span className="font-medium text-gray-800">
            {travel.country}
          </span>
          <a
            href={travel.mapLink}
            target="_blank"
            rel="noreferrer"
            className="normal-case tracking-normal text-gray-400 underline"
          >
            View on Google Maps
          </a>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-900 mt-2">
          {travel.title}
        </h2>

        {/* Date */}
        <p className="text-xs font-bold text-gray-800 mt-2">
          {travel.date}
        </p>

        {/* Description */}
        <p className="text-sm text-gray-700 leading-relaxed mt-2">
          {travel.description}
        </p>
      </div>
    </div>
  );
}
