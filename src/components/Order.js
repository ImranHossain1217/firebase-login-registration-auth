import React from "react";

const Order = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-3/4 mx-auto mt-10">
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://media.istockphoto.com/photos/blue-mens-jeans-denim-pants-on-orange-background-contrast-saturated-picture-id915923400?b=1&k=20&m=915923400&s=170667a&w=0&h=Z7BxDihlpsZKJPNfEiagtnlwbPeHQcWiFvKb_-73nM4="
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Twill Pant for man ...!!</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://img.freepik.com/free-photo/one-white-sneaker-shoe-isolated-white_93675-134695.jpg?w=2000"
            alt=""
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes..!!</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://wayssay.com/wp-content/uploads/2021/06/photo-1528795259021-d8c86e14354c.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Ultra-modern smartphones that run on Android 10 operating system
          </h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
