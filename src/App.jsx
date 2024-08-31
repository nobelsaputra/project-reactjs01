import { useState } from "react";

function App() {
  const [showText, setShowText] = useState(false);

  const handleClick = () => {
    setShowText(!showText);
  };

  return (
    <div className="text-center mt-10">
      <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded" onClick={handleClick}>
        Tampilkan Teks
      </button>
      {showText && <p className="mt-5 text-lg">Ini adalah teks yang ditampilkan!</p>}
    </div>
  );
}

export default App;
