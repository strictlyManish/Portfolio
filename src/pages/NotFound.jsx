function NotFound() {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="p-10 bg-gray-900/60 backdrop-blur-lg rounded-2xl shadow-2xl flex flex-col items-center text-center animate-fadeIn">
        
        {/* Big 404 */}
        <h1 className="text-8xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
          404
        </h1>

        {/* Subheading */}
        <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
        <p className="text-gray-400 mb-8 max-w-md">
          Sorry, the page you are looking for doesn’t exist or has been moved.
        </p>

        {/* Home Button */}
        <a
          href="/"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-xl shadow-lg transition transform hover:scale-105"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
}

export default NotFound;
