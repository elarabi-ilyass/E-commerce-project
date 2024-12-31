import React,{useState} from 'react'

const ImagesSide = () => {
  const [activeImage, setActiveImage] = useState(
    "https://tailwindui.com/plus/img/ecommerce-images/product-page-03-product-04.jpg"
  );

  const images = [
    {
      src: "https://tailwindui.com/plus/img/ecommerce-images/product-page-03-product-01.jpg",
      label: "Angled view",
    },
    {
      src: "https://tailwindui.com/plus/img/ecommerce-images/product-page-03-product-02.jpg",
      label: "Front view",
    },
    {
      src: "https://tailwindui.com/plus/img/ecommerce-images/product-page-03-product-03.jpg",
      label: "Back view",
    },
    {
      src: "https://tailwindui.com/plus/img/ecommerce-images/product-page-03-product-04.jpg",
      label: "Back angle open view",
    },
  ];

  return (
  <div>
    {/* Active Image */}
    <div className="mb-6">
      <img
        src={activeImage}
        alt="Active product view"
        className="w-full rounded-lg shadow-lg"
      />
    </div>

    {/* Thumbnail Images */}
    <div className="grid grid-cols-4 gap-4">
      {images.map((image, index) => (
        <button
          key={index}
          onClick={() => setActiveImage(image.src)}
          className={`border rounded-lg overflow-hidden focus:ring-2 focus:ring-indigo-500 ${
            activeImage === image.src ? "ring-2 ring-indigo-500" : ""
          }`}
        >
          <img
            src={image.src}
            alt={image.label}
            className="w-full h-24 object-cover"
          />
        </button>
      ))}
    </div>
  </div>
  )
}

export default ImagesSide
