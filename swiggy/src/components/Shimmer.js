const Shimmer = () => {
    return (
      <div className="flex flex-wrap justify-center  m-4">
        {[...Array(12)].map((_, index) => (
          <div
            key={index}
            className="shimmer-card bg-gray-300 m-4 p-4 w-44 h-56 rounded-lg animate-pulse"
          ></div>
        ))}
      </div>
    );
  };
  
  export default Shimmer;
  