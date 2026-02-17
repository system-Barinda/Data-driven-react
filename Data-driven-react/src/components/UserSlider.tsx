import React, { useEffect, useState } from "react";
import { User } from "../Datatype.type/User";

const UserSlider: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) =>
        prev === users.length - 1 ? 0 : prev + 1
      );
    }, 10000);

    return () => clearInterval(interval);
  }, [users]);

  return (
    <div className="w-full max-w-xl overflow-hidden">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${activeIndex * 100}%)`,
        }}
      >
        {users.map((user) => (
          <div
            key={user.id}
            className="w-full flex-shrink-0 p-6 bg-white rounded-lg shadow-lg mx-2"
          >
            <h2 className="text-xl font-bold mb-2 text-indigo-600">
              {user.name}
            </h2>

            <p className="text-gray-700">
              📧 <span className="font-medium">{user.email}</span>
            </p>

            <p className="text-gray-700">
              🏢 <span className="font-medium">{user.company.name}</span>
            </p>

            <p className="text-gray-700">
              🌍 {user.address.city}, {user.address.street}
            </p>

            <p className="text-gray-700">
              📞 {user.phone}
            </p>

            <p className="text-gray-700">
              🌐 {user.website}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserSlider;
