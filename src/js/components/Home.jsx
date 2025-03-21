import React from "react";
import Navbar from "./Navbar";
import Card from "./Card";
import Jumbotron from "./Jumbotron";
import Footer from "./Footer";

const Home = () => {
  const cards = [
    {
      id: 1,
      title: "Card #1",
      color: "#f8d7da",
      image: "https://images.unsplash.com/photo-1740412662676-a3b16d74ee86?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      title: "Card #2",
      color: "#d1ecf1",
      image: "https://images.unsplash.com/photo-1740765979831-2419b29c7cc1?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      title: "Card #3",
      color: "#fff3cd",
      image: "https://images.unsplash.com/photo-1740880250725-8b0d83ac9c23?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      title: "Card #4",
      color: "#d4edda",
      image: "https://images.unsplash.com/photo-1740859743702-e52ec69325c8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="container my-4">
        <Jumbotron />
        <div className="row text-center">
          {cards.map((item) => (
            <div className="col-md-3" key={item.id}>
              <Card title={item.title} image={item.image} color={item.color} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
