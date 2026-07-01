import React, { useState } from 'react';

const DesignUploader = () => {
  const [files, setFiles] = useState([]);
  const [error, setError] = useState('');

  const handleFileChange = (e) => {
    setError('');
    const selectedFiles = Array.from(e.target.files);
    
    let newImages = files.filter(f => f.type.startsWith('image/'));
    let hasVideo = files.some(f => f.type.startsWith('video/'));
    
    let toAdd = [];
    
    for (let file of selectedFiles) {
      if (file.type.startsWith('image/')) {
        if (newImages.length + toAdd.filter(f => f.type.startsWith('image/')).length >= 4) {
          setError('Maximum 4 images allowed.');
          continue;
        }
        toAdd.push(file);
      } else if (file.type.startsWith('video/')) {
        if (hasVideo || toAdd.some(f => f.type.startsWith('video/'))) {
          setError('Maximum 1 video allowed.');
          continue;
        }
        toAdd.push(file);
        hasVideo = true;
      }
    }
    
    setFiles(prev => [...prev, ...toAdd]);
  };

  const removeFile = (index) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm mb-8">
      <h3 className="text-lg font-bold text-gray-900 mb-2">Upload Your Design</h3>
      <p className="text-sm text-gray-500 mb-4">Max 4 images (JPG, PNG) and 1 video (MP4).</p>
      
      <div className="flex items-center justify-center w-full mb-4">
        <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors">
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg className="w-8 h-8 mb-3 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
            </svg>
            <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
          </div>
          <input id="dropzone-file" type="file" className="hidden" multiple accept="image/*,video/mp4" onChange={handleFileChange} />
        </label>
      </div>

      {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

      {files.length > 0 && (
        <div className="grid grid-cols-5 gap-3">
          {files.map((file, index) => {
            const isVideo = file.type.startsWith('video/');
            const url = URL.createObjectURL(file);
            return (
              <div key={index} className="relative group rounded-lg overflow-hidden border border-gray-200 aspect-square">
                {isVideo ? (
                  <video src={url} className="w-full h-full object-cover" />
                ) : (
                  <img src={url} alt={`upload-${index}`} className="w-full h-full object-cover" />
                )}
                
                {isVideo && (
                  <div className="absolute top-1 left-1 bg-black/60 px-1.5 py-0.5 rounded text-[10px] text-white font-bold">
                    VIDEO
                  </div>
                )}
                
                <button 
                  onClick={() => removeFile(index)}
                  className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600"
                  aria-label="Remove file"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default DesignUploader;
