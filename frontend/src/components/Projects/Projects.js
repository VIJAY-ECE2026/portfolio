import React, { useState, useContext, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { DarkModeContext } from "../../common/DarkModeContext";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Pi1 from '../../assets/Proimg/Pi1.png';
import Pi2 from '../../assets/Proimg/Pi2.png';

 

const projectData = [
  {
    name: "Ecommerce Website",
    image: Pi1,
 
    liveDemo: "https://e-commerce-1-texe.onrender.com",
    github: "https://github.com/VIJAY-ECE2026/e-commerce",
    description: "This project is a modern e-commerce application built using the MERN stack (MongoDB, Express.js, React.js, and Node.js). It provides a fully functional e-commerce platform with essential features such as authentication, product management, shopping cart, and order processing.",
    skills: ["React.js","Express.js", "Node.js", "MongoDB","Responsive Design"],
    features: [ "Fully responsive design optimized for all devices", "Sidebar navigation menu for easy access to categories","Interactive pop-ups for sign-in, promotions, and product details","Product categories including Electronics, Clothing, Furniture, and more","Advanced product filtering and real-time search functionality","Admin dashboard to add, edit, and delete products and sale banners","Shopping cart with quantity updates and session storage","Secure checkout process with QR-based UPI payments"]
  },
  {
    name: "Job Genie",
    image: Pi2,
  
    liveDemo: "https://job-genie2025.vercel.app/",
    github: "https://github.com/VIJAY-ECE2026/Job-Genie",
    description: "About Job_genie is a modern job portal web application designed to bridge the gap between job seekers and recruiters. Built with **ShadCN UI** for a sleek and intuitive interface, it integrates **Clerk** for seamless and secure authentication and **Supabase** as a robust backend database solution",
    skills: ["React JS", "Node.js", "Express", "Supabase", "ShadCN UI", "TailwindCSS."],
    features: ["Responsive and optimized frontend", "Fast performance with modern technologies", "Browse, filter, and view detailed job information in real-time", "Efficient backend with Supabase", "Save and manage favorite job "]
  },
 
];

const ProjectPopup = ({ project, onClose, darkMode }) => {
  const popupRef = useRef(null);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 min-h-screen">
      <div
        ref={popupRef}
        className={`p-6 rounded-lg max-w-lg w-full relative overflow-y-auto custom-scrollbar animate-popup-slide-in ${
          darkMode
            ? "bg-gray-800 text-gray-100"
            : "bg-white text-gray-800"
        }`}
        style={{
          maxHeight: "80%",
          boxShadow: "0 6px 12px rgba(0, 0, 0, 0.3)",
        }}
      >
        <button
          className={`absolute top-2 right-0 text-4xl font-bold transition duration-200 ${
            darkMode ? "text-gray-300 hover:text-red-400" : "text-gray-500 hover:text-red-500"
          }`}
          onClick={onClose}
        >
          &times;
        </button>
        
        <div className="flex flex-row gap-4 mb-4">
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className={`px-4 py-2 rounded-lg shadow transition-transform duration-300 transform hover:scale-105 no-underline ${
              darkMode
                ? "bg-slate-500 hover:bg-slate-600 text-white"
                : "bg-blue-600 hover:bg-blue-700 text-white"
            }`}
          >
            Live Demo
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className={`px-4 py-2 rounded-lg shadow transition-transform duration-300 transform hover:scale-105 no-underline ${
              darkMode
                ? "bg-gray-600 hover:bg-gray-700 text-gray-100"
                : "bg-gray-800 hover:bg-gray-900 text-white"
            }`}
          >
            GitHub
          </a>
        </div>
        <h3 className="text-xl font-semibold mb-2">Project Overview</h3>
        <div>
          <h4 className="text-lg font-medium mb-1">Description</h4>
          <p className="mb-3 text-justify">{project.description}</p>
          <h4 className="text-lg font-medium mb-1">Skills Used</h4>
          <ul className="list-disc pl-5 mb-3 text-justify">
            {project.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
          <h4 className="text-lg font-medium mb-1">Key Features</h4>
          <ul className="list-disc pl-5">
            {project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
      <style>{`
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: ${darkMode ? "#6c63ff #3a3a3a" : "#6c63ff #f0f0f0"};
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(45deg, #6c63ff, #8561f9);
          border-radius: 10px;
          border: 2px solid ${darkMode ? "#3a3a3a" : "#f0f0f0"};
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(45deg, #6c63ff, #4739e6);
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: ${darkMode ? "#3a3a3a" : "#f0f0f0"};
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
};

const Projects = () => {
  const { darkMode } = useContext(DarkModeContext);
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div
      className={`min-h-screen animate-fade-in py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
        darkMode 
          ? "bg-gradient-to-br from-black-950 via-black-900 to-slate-950 text-slate-100" 
          : "bg-gradient-to-br from-slate-50 via-white to-slate-50 text-slate-900"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <h1
          className={`text-4xl sm:text-5xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r ${
            darkMode 
              ? "from-indigo-400 via-purple-400 to-pink-400" 
              : "from-indigo-600 via-purple-600 to-pink-600"
          }`}
        >
          Featured Projects
        </h1>
        <p className={`text-center mb-12 max-w-2xl mx-auto ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
          Explore my latest work and projects that showcase my skills in web development and design
        </p>

        <Swiper
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          navigation
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination]}
          className="!pb-12"
        >
          {projectData.map((project, index) => (
            <SwiperSlide key={index}>
              <div
                className={`group cursor-pointer rounded-xl overflow-hidden shadow-lg transition-all duration-300 transform hover:scale-[1.02] hover:-translate-y-1 ${
                  darkMode
                    ? "bg-slate-800/50 hover:bg-slate-800 ring-1 ring-slate-700/50"
                    : "bg-white hover:bg-slate-50 ring-1 ring-slate-200"
                }`}
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden aspect-[16/9]">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 ${
                    darkMode 
                      ? "bg-gradient-to-t from-slate-900/90 to-transparent" 
                      : "bg-gradient-to-t from-slate-900/75 to-transparent"
                  }`} />
                </div>
                <div className="p-6">
                  <h3 className={`text-xl font-semibold mb-2 ${
                    darkMode ? "text-white" : "text-slate-900"
                  }`}>
                    {project.name}
                  </h3>
                  <p className={`line-clamp-3 text-sm ${
                    darkMode ? "text-slate-300" : "text-slate-600"
                  }`}>
                    {project.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {selectedProject && (
        <ProjectPopup
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          darkMode={darkMode}
        />
      )}

      <style>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: ${darkMode ? '#6366f1' : '#4f46e5'};
          opacity: 0;
          transition: all 0.3s;
        }
        
        .swiper:hover .swiper-button-next,
        .swiper:hover .swiper-button-prev {
          opacity: 1;
        }
        
        .swiper-pagination-bullet {
          background: ${darkMode ? '#6366f1' : '#4f46e5'};
        }
        
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: ${darkMode ? '#4f46e5 #1e293b' : '#4f46e5 #f1f5f9'};
        }
        
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: ${darkMode ? '#4f46e5' : '#4f46e5'};
          border-radius: 8px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: ${darkMode ? '#1e293b' : '#f1f5f9'};
          border-radius: 8px;
        }
        
        @keyframes popup-slide-in {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(10px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        
        .animate-popup-slide-in {
          animation: popup-slide-in 0.2s ease-out;
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};
export default Projects;