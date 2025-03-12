import React, { useState, useRef } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Download, Maximize2, Minimize2 } from 'lucide-react';

// Set up the PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

interface PDFViewerProps {
  url: string;
  title?: string;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ url, title }) => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [scale, setScale] = useState<number>(1);
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const containerRef = useRef<HTMLDivElement>(null);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setLoading(false);
  };

  const handlePrevPage = () => {
    setPageNumber((prevPageNumber) => Math.max(prevPageNumber - 1, 1));
  };

  const handleNextPage = () => {
    if (numPages) {
      setPageNumber((prevPageNumber) => Math.min(prevPageNumber + 1, numPages));
    }
  };

  const handleZoomIn = () => {
    setScale((prevScale) => Math.min(prevScale + 0.2, 3));
  };

  const handleZoomOut = () => {
    setScale((prevScale) => Math.max(prevScale - 0.2, 0.6));
  };

  const toggleFullScreen = () => {
    if (!isFullScreen) {
      if (containerRef.current?.requestFullscreen) {
        containerRef.current.requestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
    setIsFullScreen(!isFullScreen);
  };

  const downloadPDF = () => {
    const link = document.createElement('a');
    link.href = url;
    link.download = title || 'document.pdf';
    link.click();
  };

  return (
    <div 
      ref={containerRef}
      className="w-full flex flex-col bg-white rounded-lg shadow-lg overflow-hidden"
    >
      {/* Header with title and controls */}
      <div className="px-4 py-3 bg-gray-50 border-b border-gray-200 flex items-center justify-between">
        <h2 className="text-lg font-medium text-gray-800 truncate">
          {title || 'PDF Document'}
        </h2>
        <div className="flex items-center space-x-2">
          <button 
            onClick={handleZoomOut}
            className="p-1.5 rounded-full hover:bg-gray-200 transition-colors"
            aria-label="Zoom out"
          >
            <ZoomOut className="w-5 h-5 text-gray-600" />
          </button>
          <button 
            onClick={handleZoomIn}
            className="p-1.5 rounded-full hover:bg-gray-200 transition-colors"
            aria-label="Zoom in"
          >
            <ZoomIn className="w-5 h-5 text-gray-600" />
          </button>
          <button 
            onClick={downloadPDF}
            className="p-1.5 rounded-full hover:bg-gray-200 transition-colors"
            aria-label="Download PDF"
          >
            <Download className="w-5 h-5 text-gray-600" />
          </button>
          <button 
            onClick={toggleFullScreen}
            className="p-1.5 rounded-full hover:bg-gray-200 transition-colors"
            aria-label="Toggle fullscreen"
          >
            {isFullScreen ? (
              <Minimize2 className="w-5 h-5 text-gray-600" />
            ) : (
              <Maximize2 className="w-5 h-5 text-gray-600" />
            )}
          </button>
        </div>
      </div>

      {/* PDF Document */}
      <div className="flex-1 overflow-auto bg-gray-100 flex justify-center p-4">
        {loading && (
          <div className="flex items-center justify-center h-64">
            <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
        <Document
          file={url}
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={() => setLoading(false)}
          loading={
            <div className="flex items-center justify-center h-64">
              <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
          }
          className="max-w-full"
        >
          <Page 
            pageNumber={pageNumber} 
            scale={scale}
            className="shadow-lg"
            renderTextLayer={false}
            renderAnnotationLayer={false}
          />
        </Document>
      </div>

      {/* Footer with pagination */}
      <div className="px-4 py-3 bg-gray-50 border-t border-gray-200 flex items-center justify-between">
        <div className="text-sm text-gray-500">
          {numPages ? `Page ${pageNumber} of ${numPages}` : 'Loading...'}
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={handlePrevPage}
            disabled={pageNumber <= 1}
            className={`p-1.5 rounded-full ${pageNumber <= 1 ? 'text-gray-300' : 'text-gray-600 hover:bg-gray-200'} transition-colors`}
            aria-label="Previous page"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNextPage}
            disabled={numPages !== null && pageNumber >= numPages}
            className={`p-1.5 rounded-full ${numPages !== null && pageNumber >= numPages ? 'text-gray-300' : 'text-gray-600 hover:bg-gray-200'} transition-colors`}
            aria-label="Next page"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PDFViewer;