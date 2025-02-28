import React, { useState, useContext, useEffect } from "react";
import { DarkModeContext } from "../../common/DarkModeContext";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from 'swiper/modules';
import T from '../../assets/Certificates/mongodb.png';


const certificates = [
  {
    id: 1,
    image: T,
    name: "MongoDB Associate Developer",
    details:
      "This certificate validates proficiency in building applications using MongoDB, demonstrating expertise in data modeling, CRUD operations, indexing, and aggregation.",
  },
  // Add more certificates as needed
];

const Certificates = () => {
  const { darkMode } = useContext(DarkModeContext);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const openPopup = (certificate) => {
    setSelectedCertificate(certificate);
    document.body.style.overflow = "hidden";
  };

  const closePopup = () => {
    setSelectedCertificate(null);
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        closePopup();
      }
    };

    if (selectedCertificate) {
      document.addEventListener("keydown", handleEscapeKey);
    }

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [selectedCertificate]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const popup = document.querySelector(".popup-container");
      if (popup && !popup.contains(event.target)) {
        closePopup();
      }
    };

    if (selectedCertificate) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [selectedCertificate]);

  return (
    <div
      className={`min-h-screen p-10 transition-colors duration-500 ${
        darkMode
          ? "bg-gradient-to-r from-gray-900 to-black text-gray-100"
          : "bg-gradient-to-r from-blue-100 to-gray-200 text-gray-800"
      } flex flex-col items-center`}
    >
      <h1
        className={`text-5xl font-extrabold mb-8 text-center drop-shadow-lg ${
          darkMode ? "text-blue-400" : "text-blue-600"
        }`}
      >
        My Certifications
      </h1>

      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        navigation
        modules={[Navigation]}
        className="w-full max-w-6xl"
      >
        {certificates.map((certificate) => (
          <SwiperSlide key={certificate.id}>
            <div
              className={`w-full h-72 flex flex-col justify-between items-center rounded-lg shadow-lg transform transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl p-5 cursor-pointer ${
                darkMode
                  ? "bg-gray-800 bg-opacity-60 backdrop-blur-md hover:shadow-gray-700"
                  : "bg-white bg-opacity-60 backdrop-blur-lg hover:shadow-xl"
              }`}
              onClick={() => openPopup(certificate)}
            >
              <img
                src={certificate.image}
                alt={certificate.name}
                className="w-full h-36 object-cover rounded-md mb-4 shadow-md"
              />
              <h3
                className={`text-xl font-semibold text-center ${
                  darkMode ? "text-blue-300" : "text-blue-800"
                }`}
              >
                {certificate.name}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {selectedCertificate && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 animate-fade-in">
          <div
            className={`w-11/12 md:w-2/3 lg:w-1/2 max-h-[85vh] rounded-xl shadow-2xl overflow-y-auto custom-scrollbar relative popup-container transition-transform transform scale-95 animate-popup ${
              darkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"
            }`}
          >
            <button
              className="absolute top-4 right-4 text-5xl text-red-500 hover:text-red-600 transition-transform transform hover:scale-110"
              onClick={closePopup}
            >
              &times;
            </button>
            <img
              src={selectedCertificate.image}
              alt={selectedCertificate.name}
              className="w-full max-h-[40vh] object-cover rounded-t-xl shadow-md"
            />
            <div className="p-6">
              <h2 className="text-3xl font-bold mb-4 text-center text-blue-500">{selectedCertificate.name}</h2>
              <p className="leading-relaxed text-justify">{selectedCertificate.details}</p>
            </div>
          </div>
        </div>
      )}

      <style>
        {`
          .custom-scrollbar::-webkit-scrollbar {
            width: 8px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: linear-gradient(to bottom, #2779fb, #5714f4);
            border-radius: 10px;
          }
          .custom-scrollbar::-webkit-scrollbar-track {
            background: ${darkMode ? "#3a3a3a" : "#f1f1f1"};
          }

          .swiper-button-next,
          .swiper-button-prev {
            color: ${darkMode ? "rgba(255, 255, 255, 0.6)" : "rgba(0, 0, 0, 0.6)"};
            transition: opacity 0.3s;
            opacity: 0.5;
          }
          .swiper-button-next:hover,
          .swiper-button-prev:hover {
            opacity: 1;
          }

          @keyframes fade-in {
            from { opacity: 0; transform: scale(0.9); }
            to { opacity: 1; transform: scale(1); }
          }
          
          .animate-fade-in {
            animation: fade-in 0.3s ease-out;
          }

          @keyframes popup {
            from { transform: scale(0.8); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
          }
          
          .animate-popup {
            animation: popup 0.3s ease-out;
          }
        `}
      </style>
    </div>
  );

};

export default Certificates;