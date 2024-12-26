import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Header */}
      <header className="flex justify-between items-center p-4 bg-gray-800">
        <h1 className="text-2xl font-bold">ART OF BETTING</h1>
        <nav className="flex space-x-4">
          <button className="bg-yellow-500 px-4 py-2 rounded hover:bg-yellow-600">LEARN MORE</button>
        </nav>
      </header>

      {/* Main Section */}
      <main className="p-4">
        <section className="flex flex-col md:flex-row items-center md:space-x-6">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-4xl font-bold mb-4">Bet Smart, Win Strategically</h2>
            <button className="bg-yellow-500 px-6 py-3 rounded text-lg hover:bg-yellow-600">
              Learn More
            </button>
          </div>
          <div className="flex-1">
            <img
              src="images/art_of_betting.png"
              alt="Stadium"
              className="rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* Cards Section */}
        <section className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
          {cardData.map((card, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg shadow-lg ${card.bgColor} text-center`}
            >
              <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
              <p className="text-lg mb-4">{card.value}</p>
              <button className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700">
                Learn More
              </button>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}

const cardData = [
  { title: "FREE BETS", value: "Check our predictions", bgColor: "bg-blue-500" },
  { title: "VIP", value: "Join our profitable community", bgColor: "bg-yellow-500" },
  { title: "STATISTICS", value: "Check our tipsters numbers", bgColor: "bg-gray-700" },
  { title: "ALGORITHM", value: "Predictions from our smart algorithm", bgColor: "bg-red-500" },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
