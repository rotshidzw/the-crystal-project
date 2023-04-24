import React from "react";

const products = [
  {
    name: "SWEATSHIRT",
    price: "$85.00",
    imageUrl: "https://static.wixstatic.com/media/84770f_c50fc42bd36b484e8aa0c8143dce4eee~mv2.jpg/v1/fill/w_376,h_376,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/84770f_c50fc42bd36b484e8aa0c8143dce4eee~mv2.jpg",
  },
  {
    name: "POSTER",
    price: "$85.00",
    imageUrl: "https://static.wixstatic.com/media/84770f_c8fbb3ec00f74e1499730ea069fc8a57~mv2.jpg/v1/fill/w_376,h_376,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/84770f_c8fbb3ec00f74e1499730ea069fc8a57~mv2.jpg",
  },
  {
    name: "THE CRYSTAL PROJECT VINYL",
    price: "$85.00",
    imageUrl: "https://static.wixstatic.com/media/c22c23_e4d2c14db3ad468e9df16fa90e610b34~mv2.jpg/v1/fill/w_376,h_376,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c22c23_e4d2c14db3ad468e9df16fa90e610b34~mv2.jpg",
  },
  {
    name: "CAP HAT",
    price: "$85.00",
    imageUrl: "https://static.wixstatic.com/media/c22c23_0dbf9c73942946e0ade8d00c6a1ab483~mv2.jpg/v1/fill/w_376,h_376,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c22c23_0dbf9c73942946e0ade8d00c6a1ab483~mv2.jpg",
  },
  {
    name: "PINK SWEATSHIRT",
    price: "$85.00",
    imageUrl: "https://static.wixstatic.com/media/84770f_c50fc42bd36b484e8aa0c8143dce4eee~mv2.jpg/v1/fill/w_376,h_376,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/84770f_c50fc42bd36b484e8aa0c8143dce4eee~mv2.jpg",
  },
  {
    name: "PHONE CASE",
    price: "$85.00",
    imageUrl: "https://static.wixstatic.com/media/c22c23_ed52ee9d67c04816ba572fb4f904bedd~mv2.jpg/v1/fill/w_376,h_376,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c22c23_ed52ee9d67c04816ba572fb4f904bedd~mv2.jpg",
  },
  {
    name: "BEANIE",
    price: "$85.00",
    imageUrl: "https://static.wixstatic.com/media/c22c23_1d91580fe04a47c08a933f5c394e64e9~mv2.jpg/v1/fill/w_376,h_376,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c22c23_1d91580fe04a47c08a933f5c394e64e9~mv2.jpg",
  },
  {
    name: "THE CRYSTAL PROJECT CD EDITION",
    price: "$85.00",
    imageUrl: "https://static.wixstatic.com/media/c22c23_1d9da3cbf6be467ca2e5bd25b7ad2961~mv2.jpg/v1/fill/w_376,h_376,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c22c23_1d9da3cbf6be467ca2e5bd25b7ad2961~mv2.jpg",
  },
  {
    name: "PANNY PACK",
    price: "$85.00",
    imageUrl: "https://static.wixstatic.com/media/c22c23_ef44449a6e6946c9baf0782b22fa0822~mv2.jpg/v1/fill/w_376,h_376,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c22c23_ef44449a6e6946c9baf0782b22fa0822~mv2.jpg",
  },
];

const Grid = () => {
  return (
    <>
    <div className="flex flex-col justify-center items-center  bg-black">
  <h1 className="text-4xl  md:text-6xl   font-bold text-white py-16 mb-8">MERCH</h1>
  <p className="text-white text-center text-2xl  py-16 px-20">
    I&apos;m a paragraph. Click here to add your own text and edit me.<br /> I’m a great
    place for you to tell a story and let your users know a little more about
    you.
  </p>
</div>

    <div className="flex flex-wrap justify-center">
      {products.map((product) => (
        <div
          key={product.name}
          className="w-full md:w-1/2 lg:w-1/3 p-4 md:p-2 lg:p-4"
        >
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <img src={product.imageUrl} alt={product.name} />
            <div className="px-4 py-2">
              <h2 className="text-lg font-bold mb-2">{product.name}</h2>
              <p className="text-gray-600">{product.price}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
    <div className="flex flex-col justify-center items-center py-10  bg-black">
  <p className="text-white text-center text-2xl px-20">
            FOR BOOKING REQUIREMENTS<br />
            INFO@MYSITE.COM   |   PHONE: 123-456-7890
  </p>
</div>
    </>
  );
};

export default Grid;
