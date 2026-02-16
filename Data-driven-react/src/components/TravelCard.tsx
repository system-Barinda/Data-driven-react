export default function TravelCard({ travel }:any) {
  return (
    <div className="flex gap-5 py-6 border-b border-gray-200">
     
      <img
        src={travel.image}
        alt={travel.title}
        className="w-31.25 h-42.5 rounded-lg object-cover"
      />

      
      <div className="max-w-md">
       
        <div className="flex items-center gap-2 text-xs uppercase tracking-wider">
          <span className="text-red-500"></span>
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

       
        <h2 className="text-2xl font-bold text-gray-900 mt-2">
          {travel.title}
        </h2>

       
        <p className="text-xs font-bold text-gray-800 mt-2">
          {travel.date}
        </p>

    
        <p className="text-sm text-gray-700 leading-relaxed mt-2">
          {travel.description}
        </p>
      </div>
    </div>
  );
}
