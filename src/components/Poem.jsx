import React from 'react';
import poemAuthorImage from './author.png';


const PoemDisplay = () => {
  const poem = [
    "em costa tant",
    "d'entendre",
    "que algú pugui posar l'ànima sencera la sang i l'energia",
    "per algú altre",
    "sense voler",
    "res a",
    "canvi.",

    "- m'hauré d'esperar a ser mare",
    "",
    "Rupi Kaur (Llet i Mel - 2015)"
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 p-4">
      <div className="w-full max-w-md overflow-hidden shadow-lg bg-white rounded-lg">
        <img
          src={poemAuthorImage}
          alt="Poem Author"
          className="w-full h-auto"
        />
        <div className="p-6">
          <div className="space-y-2">
            {poem.map((line, index) => (
              <p key={index} className="text-gray-800 text-sm font-serif italic">
                {line}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoemDisplay;