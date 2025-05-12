const Resume: React.FC = () => {
    const handleViewAndDownload = () => {
        // Open resume in new tab
        window.open("/DARRICK_SILVESTER_RESUME.pdf", "_blank");
      
        // Trigger a background download
        const link = document.createElement("a");
        link.href = "/DARRICK_SILVESTER_RESUME.pdf";
        link.download = "DARRICK_SILVESTER_RESUME.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <button
            onClick={handleViewAndDownload}
            className="mt-4 inline-block px-4 py-2 border border-green-500 text-green-500 hover:bg-green-500 hover:text-black transition-colors"
        >
            View & Download Resume
        </button>
    )
}

export default Resume;