import MagicButton from "@/components/MagicButton";
import { FaDownload } from "react-icons/fa6";

export default function ResumePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4 py-10">
      <div className="backdrop-blur-2xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-10 w-full max-w-4xl">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            My Resume
          </h1>
          <p className="text-gray-300 text-lg">
            View or download my resume below. Updated and ready to impress!
          </p>
        </div>

        {/* Download Button */}
        <div className="flex justify-center mb-8">
          <a
            href="https://drive.google.com/uc?export=download&id=1e7xsfbbRu_h7bZ82dAs13PbazoMV5FgD"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MagicButton
              title="Download Resume"
              icon={
                <FaDownload className="group-hover:translate-x-1 transition-transform duration-300" />
              }
              position="right"
            />
          </a>
        </div>

        {/* Resume Preview */}
        <div className="rounded-xl overflow-hidden shadow-lg border border-white/20 hover:shadow-2xl transition-shadow duration-300">
          <iframe
            src="https://drive.google.com/file/d/1e7xsfbbRu_h7bZ82dAs13PbazoMV5FgD/preview"
            width="100%"
            height="600px"
            allow="autoplay"
            className="w-full"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
