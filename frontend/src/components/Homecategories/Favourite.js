import React from "react";

// images
import eth from "../../assets/images/coin/coin-6.jpg";
import arbeth from "../../assets/images/coin/coin-7.jpg";
import wbtc from "../../assets/images/coin/coin-8.jpg";
import arb from "../../assets/images/coin/coin-3.jpg";
import weth from "../../assets/images/coin/coin-9.jpg";
import matic from "../../assets/images/coin/coin-10.jpg";

const Favourite = () => {
  const coins = [
    {
      id: 1,
      name: "ETH",
      marketCap: "$360,6M",
      price: "$1.878,80",
      change: "-1,62%",
      image: eth,
      trend: "decrease",
    },
    {
      id: 2,
      name: "arb_ETH",
      marketCap: "$132,18M",
      price: "$1.878,80",
      change: "+1,62%",
      image: arbeth,
      trend: "increase",
    },
    {
      id: 3,
      name: "WBTC",
      marketCap: "$50,56M",
      price: "$30.001,96",
      change: "-1,64%",
      image: wbtc,
      trend: "decrease",
    },
    {
      id: 4,
      name: "ARB",
      marketCap: "$31,55M",
      price: "$1,11",
      change: "+3,71%",
      image: arb,
      trend: "increase",
    },
    {
      id: 5,
      name: "WETH",
      marketCap: "$24,34M",
      price: "$1.878,56",
      change: "-1,62%",
      image: weth,
      trend: "decrease",
    },
    {
      id: 6,
      name: "MATIC",
      marketCap: "$19,36M",
      price: "$0,666",
      change: "-4,42%",
      image: matic,
      trend: "decrease",
    },
  ];

  return (
    <div>
      <div className="d-flex justify-content-between">
        <span>Name</span>
        <p className="d-flex gap-8">
          <span>Last price</span>
          <span>Change</span>
        </p>
      </div>
      <ul className="mt-16">
        {coins.map((coin) => (
          <li key={coin.id} className="mt-16">
            <a
              href="choose-payment.html"
              className={`coin-item style-2 gap-12`}
            >
              <img src={coin.image} alt={coin.name} className="img" />
              <div className="content">
                <div className="title">
                  <p className="mb-4 text-button">{coin.name}</p>
                  <span className="text-secondary">{coin.marketCap}</span>
                </div>
                <div className="d-flex align-items-center gap-12">
                  <span className="text-small">{coin.price}</span>
                  <span className={`coin-btn ${coin.trend}`}>
                    {coin.change}
                  </span>
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Favourite;
