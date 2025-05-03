

export default function ResumePage() {
    return (
      <div className="p-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">My Resume</h1>
  
        <p className="mb-4">You can view my resume below or download it using the button.</p>
  
        {/* Embed Google Drive PDF */}
        <div className="w-full h-[600px] mb-6">
          <iframe
            src="https://drive.google.com/file/d/1nvyYl-2AANCylAZtlq6X0Io6_lcDDNGb/preview"
            width="100%"
            height="100%"
            allow="autoplay"
            className="border rounded"
          ></iframe>
        </div>
  
        {/* Download Button */}
        <a
          href="https://drive.google.com/uc?export=download&id=1nvyYl-2AANCylAZtlq6X0Io6_lcDDNGb"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            Download Resume
          </button>
        </a>
      </div>
    );
  }
  
