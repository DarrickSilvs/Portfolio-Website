import resumePdf from '../assets/DARRICK_SILVESTER_RESUME.pdf';
const Resume: React.FC = () => {
    const handleViewAndDownload = () => {
        // Open resume in new tab
        window.open(resumePdf, "_blank");
      
        // Trigger a background download
        const link = document.createElement("a");
        link.href = resumePdf;
        link.download = "DARRICK_SILVESTER_RESUME.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="h-full flex items-center justify-center">
            <button
                onClick={handleViewAndDownload}
                className="px-6 py-3 border border-green-500 text-green-500 hover:bg-green-500 hover:text-black transition-colors text-sm sm:text-base"
            >
                View & Download Resume
            </button>
        </div>
    )
}

export default Resume;