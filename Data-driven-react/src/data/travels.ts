import { travelType } from "../Datatype.type/travelType";
import eventDovid from "../assets/eventDovid.jpg";
import nana from "../assets/nana.jpg"
import pexel from "../assets/pexel.jpg"
const travels:travelType[] = [
  {
    id: 1,
    country: "Japan",
    title: "Mount Fuji",
    date: "12 Jan, 2023 - 24 Jan, 2023",
    description:
      "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters.",
    image:
      eventDovid,
  },
  {
    id: 2,
    country: "Australia",
    title: "Sydney Opera House",
    date: "27 May, 2023",
    description:
      "The Sydney Opera House is a multi-venue performing arts centre.",
    image:nana,
  },
  {
    id: 3,
    country: "Norway",
    title: "Geirangerfjord",
    date: "01 Oct, 2024 - 10 Nov, 2024",
    description:
      "Geirangerfjord is a fjord in the Sunnmøre region of Norway.",
    image:pexel,
  },
];

export default travels;
