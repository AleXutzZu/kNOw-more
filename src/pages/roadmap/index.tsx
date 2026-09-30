import React, { useState } from 'react';
import {
  ArrowLeft,
  Check,
  Download,
  ExternalLink,
  Eye,
  Maximize2,
  Minimize2,
  RotateCcw,
  ZoomIn,
  ZoomOut,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import roadmapImg from '../../assets/roadmap.jpeg';

export const RoadmapPage: React.FC = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [downloading, setDownloading] = useState(false);

  const toggleFullscreen = () => {
    setIsFullscreen((prev) => !prev);
    setZoomLevel(1);
  };

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.25, 2.5));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.25, 0.5));
  const handleResetZoom = () => setZoomLevel(1);

  const handleDownload = () => {
    setDownloading(true);
    const link = document.createElement('a');
    link.href = roadmapImg;
    link.download = 'kNOw-MORE-decision-roadmap.jpeg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => setDownloading(false), 2000);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-2 border-b border-surface-border">
        <div className="space-y-1">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-text-main tracking-tight">
            Decision roadmap guide
          </h1>
          <p className="text-xs sm:text-sm text-text-muted">
            High-resolution visual blueprint for fast, offline decisions.
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex items-center flex-wrap gap-2.5">
          <button
            type="button"
            onClick={toggleFullscreen}
            className="px-3.5 py-2 rounded-xl bg-surface-base hover:bg-surface-hover text-text-main text-xs font-semibold border border-surface-border flex items-center space-x-1.5 transition-all cursor-pointer shadow-xs"
            title={isFullscreen ? 'Exit full screen' : 'View full screen'}
          >
            {isFullscreen ? (
              <>
                <Minimize2 className="w-4 h-4 text-primary" />
                <span>Exit full screen</span>
              </>
            ) : (
              <>
                <Maximize2 className="w-4 h-4 text-primary" />
                <span>Full screen</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={handleDownload}
            className="px-4 py-2 rounded-xl bg-linear-to-r from-primary to-primary-dark hover:from-primary/90 hover:to-primary-dark/90 text-white text-xs font-bold shadow-md shadow-primary/25 flex items-center space-x-2 transition-all cursor-pointer"
          >
            {downloading ? (
              <>
                <Check className="w-4 h-4 text-accent" />
                <span>Downloaded!</span>
              </>
            ) : (
              <>
                <Download className="w-4 h-4" />
                <span>Download guide</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Cost-effective highlight note */}
      <div className="bg-surface-base border border-surface-border rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-text-muted">
        <div className="flex items-center space-x-2">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span>
            <strong>Free &amp; accessible:</strong> Keep this full flowchart printed at your desk or saved on your phone for quick reference before saying yes.
          </span>
        </div>
        <div className="flex items-center space-x-3 text-primary font-semibold shrink-0">
          <Link to="/decision-tree" className="hover:underline flex items-center space-x-1">
            <span>Try the interactive decision tree</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Standard viewer container */}
      <div className="relative rounded-2xl overflow-hidden border border-surface-border bg-surface-base shadow-inner group">
        {/* Floating zoom controls */}
        <div className="absolute top-4 right-4 z-20 flex items-center space-x-1.5 p-1.5 rounded-xl bg-card-bg/90 backdrop-blur-md border border-surface-border shadow-md">
          <button
            type="button"
            onClick={handleZoomOut}
            aria-label="Zoom out"
            className="p-1.5 rounded-lg hover:bg-surface-hover text-text-main transition-colors cursor-pointer"
            title="Zoom out"
          >
            <ZoomOut className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={handleResetZoom}
            className="px-2 py-1 text-[11px] font-bold text-text-muted hover:text-text-main transition-colors cursor-pointer"
            title="Reset zoom"
          >
            {Math.round(zoomLevel * 100)}%
          </button>
          <button
            type="button"
            onClick={handleZoomIn}
            aria-label="Zoom in"
            className="p-1.5 rounded-lg hover:bg-surface-hover text-text-main transition-colors cursor-pointer"
            title="Zoom in"
          >
            <ZoomIn className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={toggleFullscreen}
            aria-label="Full screen"
            className="p-1.5 rounded-lg hover:bg-surface-hover text-text-main transition-colors cursor-pointer ml-1 border-l border-surface-border pl-2"
            title="Full screen view"
          >
            <Eye className="w-4 h-4 text-primary" />
          </button>
        </div>

        {/* Scrollable image canvas: align-top ensures top of roadmap is always immediately visible */}
        <div className="w-full max-h-[75vh] overflow-auto p-4 flex flex-col items-center justify-start bg-canvas-to/60">
          <div
            style={{ transform: `scale(${zoomLevel})`, transformOrigin: 'top center' }}
            className="transition-transform duration-200 ease-out my-2"
          >
            <img
              src={roadmapImg}
              alt="kNOw MORE decision roadmap guide"
              className="w-full max-w-5xl h-auto rounded-xl shadow-lg object-contain select-none block"
            />
          </div>
        </div>
      </div>

      {/* Fullscreen Overlay Modal */}
      {isFullscreen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col animate-fade-in">
          {/* Fullscreen top toolbar (sticky at the very top) */}
          <div className="shrink-0 flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-white/15 bg-black/60 backdrop-blur-md text-white z-30">
            <div className="flex items-center space-x-3">
              <button
                type="button"
                onClick={toggleFullscreen}
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
                title="Exit full screen (or press Esc)"
              >
                <ArrowLeft className="w-5 h-5 text-white" />
              </button>
              <div>
                <h3 className="text-base font-bold text-white leading-tight">
                  Decision roadmap guide
                </h3>
                <p className="text-xs text-white/70">Full screen viewer</p>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1 p-1 rounded-xl bg-white/10">
                <button
                  type="button"
                  onClick={handleZoomOut}
                  className="p-1.5 rounded-lg hover:bg-white/20 text-white transition-colors cursor-pointer"
                  title="Zoom out"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={handleResetZoom}
                  className="px-2 py-0.5 text-xs font-semibold text-white/80 hover:text-white transition-colors flex items-center space-x-1"
                  title="Reset to 100%"
                >
                  <span>{Math.round(zoomLevel * 100)}%</span>
                  <RotateCcw className="w-3 h-3 text-white/60" />
                </button>
                <button
                  type="button"
                  onClick={handleZoomIn}
                  className="p-1.5 rounded-lg hover:bg-white/20 text-white transition-colors cursor-pointer"
                  title="Zoom in"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
              </div>

              <button
                type="button"
                onClick={handleDownload}
                className="px-3.5 py-2 rounded-xl bg-primary hover:bg-primary/90 text-white font-semibold text-xs flex items-center space-x-1.5 transition-colors cursor-pointer shadow-md"
              >
                <Download className="w-4 h-4" />
                <span className="hidden sm:inline">Download</span>
              </button>

              <button
                type="button"
                onClick={toggleFullscreen}
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                title="Exit full screen"
              >
                <Minimize2 className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Fullscreen image scrollable container: flex-col items-center justify-start with transformOrigin 'top center' ensures top is anchored at y=0 and never cut off */}
          <div className="grow overflow-auto p-4 sm:p-6 flex flex-col items-center justify-start">
            <div
              style={{
                transform: `scale(${zoomLevel})`,
                transformOrigin: 'top center',
              }}
              className="transition-transform duration-200 ease-out my-2 max-w-5xl w-full"
            >
              <img
                src={roadmapImg}
                alt="kNOw MORE decision roadmap guide fullscreen"
                className="w-full h-auto object-contain rounded-xl shadow-2xl block mx-auto"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RoadmapPage;
