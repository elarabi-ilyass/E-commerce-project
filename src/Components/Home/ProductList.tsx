import React from "react";

const ProductList = () => {
  const products = [
    {
      id: 1,
      name: "Earthen Bottle",
      price: "$48",
      image:
        "https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-01.jpg",
      alt: "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
    },
    {
      id: 2,
      name: "Nomad Tumbler",
      price: "$35",
      image:
        "https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-02.jpg",
      alt: "Olive drab green insulated bottle with flared screw lid and flat top.",
    },
    {
      id: 3,
      name: "Focus Paper Refill",
      price: "$89",
      image:
        "https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-03.jpg",
      alt: "Person using a pen to cross a task off a productivity paper card.",
    },
    {
      id: 4,
      name: "Machined Mechanical Pencil",
      price: "$35",
      image:
        "https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-04.jpg",
      alt: "Hand holding black machined steel mechanical pencil with brass tip and top.",
    },
    {
      id: 5,
      name: "Focus Card Tray",
      price: "$64",
      image:
        "https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-05.jpg",
      alt: "Paper card sitting upright in walnut card holder on desk.",
    },
    {
      id: 6,
      name: "Focus Multi-Pack",
      price: "$39",
      image:
        "https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-06.jpg",
      alt: "Stack of 3 small drab green cardboard paper card refill boxes with white text.",
    },
    {
      id: 7,
      name: "Brass Scissors",
      price: "$50",
      image:
        "https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-07.jpg",
      alt: "Brass scissors with geometric design, black steel finger holes, and included upright brass stand.",
    },
    {
      id: 8,
      name: "Focus Carry Pouch",
      price: "$32",
      image:
        "https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-08.jpg",
      alt: "Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.",
    },
  ];

  return (
    <div className="bg-slate-50 py-16 ">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-14">Products</h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <a key={product.id} href="#" className="group">
              <img
                src={product.image}
                alt={product.alt}
                className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-[7/8]"
              />
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">
                {product.price}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
