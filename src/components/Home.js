import React from "react";

const Home = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://moneymorning.com/wp-content/blogs.dir/1/files/2020/12/shopping-bags.jpg"
            className="max-w-md rounded-lg shadow-2xl"
            alt=""
          />
          <div>
            <h1 className="text-5xl font-bold">
              This Top E-Commerce Stock Is Claiming an Untapped Market
            </h1>
            <p className="py-6 text-left">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.Provident cupiditate voluptatem et in. Quaerat fugiat
              ut assumenda excepturi exercitationem quasi. In deleniti eaque aut
              repudiandae et a id nisi.Provident cupiditate voluptatem et in.
              Quaerat fugiat ut assumenda excepturi exercitationem quasi. In
              deleniti eaque aut repudiandae et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
