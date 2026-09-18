import React from 'react';
import { Loader2 } from 'lucide-react';

interface ToolLoadingFallbackProps {
  toolName?: string;
  description?: string;
}

export const ToolLoadingFallback: React.FC<ToolLoadingFallbackProps> = ({
  toolName = 'Generator',
  description = 'Preparing document tools, statutory tax formats, and print engines...',
}) => {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-label={`Loading ${toolName}`}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 w-full animate-fadeIn"
    >
      {/* Top Banner / Breadcrumb Skeleton */}
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 bg-white border border-slate-200/80 rounded-2xl shadow-xs">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
            <Loader2 className="w-5 h-5 animate-spin" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                Loading Application
              </span>
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 animate-ping" />
            </div>
            <h2 className="text-base sm:text-lg font-bold text-slate-800">
              {toolName}
            </h2>
          </div>
        </div>
        <div className="text-xs text-slate-500 hidden sm:block">
          {description}
        </div>
      </div>

      {/* Main 2-Column Desktop / Stacked Mobile Skeleton */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
        {/* Left Column (Form Panel Skeleton) */}
        <div className="lg:col-span-5 xl:col-span-5 bg-white border border-slate-200/80 rounded-2xl p-5 sm:p-6 shadow-xs space-y-5">
          {/* Header placeholder */}
          <div className="space-y-2 pb-4 border-b border-slate-100">
            <div className="h-5 w-40 bg-slate-200 rounded-md animate-pulse" />
            <div className="h-3 w-56 bg-slate-100 rounded-md animate-pulse" />
          </div>

          {/* Form inputs placeholders */}
          <div className="space-y-4">
            <div className="space-y-1.5">
              <div className="h-3.5 w-28 bg-slate-200 rounded animate-pulse" />
              <div className="h-10 w-full bg-slate-100 rounded-lg animate-pulse" />
            </div>
            <div className="space-y-1.5">
              <div className="h-3.5 w-32 bg-slate-200 rounded animate-pulse" />
              <div className="h-10 w-full bg-slate-100 rounded-lg animate-pulse" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <div className="h-3.5 w-20 bg-slate-200 rounded animate-pulse" />
                <div className="h-10 w-full bg-slate-100 rounded-lg animate-pulse" />
              </div>
              <div className="space-y-1.5">
                <div className="h-3.5 w-24 bg-slate-200 rounded animate-pulse" />
                <div className="h-10 w-full bg-slate-100 rounded-lg animate-pulse" />
              </div>
            </div>
            <div className="space-y-1.5">
              <div className="h-3.5 w-36 bg-slate-200 rounded animate-pulse" />
              <div className="h-20 w-full bg-slate-100 rounded-lg animate-pulse" />
            </div>
          </div>

          {/* Action button placeholder */}
          <div className="pt-2">
            <div className="h-11 w-full bg-slate-200 rounded-xl animate-pulse" />
          </div>
        </div>

        {/* Right Column (Document Preview Sheet Skeleton) */}
        <div className="lg:col-span-7 xl:col-span-7 bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 shadow-xs min-h-[500px] flex flex-col justify-between">
          <div className="space-y-6">
            {/* Top document bar */}
            <div className="flex justify-between items-center pb-4 border-b border-slate-100">
              <div className="h-6 w-48 bg-slate-200 rounded animate-pulse" />
              <div className="h-8 w-24 bg-slate-100 rounded-lg animate-pulse" />
            </div>

            {/* Document sheet simulation */}
            <div className="border border-dashed border-slate-200 rounded-xl p-6 space-y-4 bg-slate-50/50">
              <div className="h-4 w-3/4 bg-slate-200 rounded animate-pulse mx-auto" />
              <div className="h-3 w-1/2 bg-slate-100 rounded animate-pulse mx-auto" />
              <div className="pt-4 space-y-2">
                <div className="h-3 w-full bg-slate-200/70 rounded animate-pulse" />
                <div className="h-3 w-5/6 bg-slate-200/70 rounded animate-pulse" />
                <div className="h-3 w-4/6 bg-slate-200/70 rounded animate-pulse" />
              </div>
              <div className="pt-6 grid grid-cols-2 gap-4">
                <div className="h-16 bg-slate-100 rounded-lg animate-pulse" />
                <div className="h-16 bg-slate-100 rounded-lg animate-pulse" />
              </div>
            </div>
          </div>

          {/* Bottom status text */}
          <div className="pt-6 text-center">
            <p className="text-xs text-slate-400 font-medium">
              Loading interactive document engine &bull; 100% private in-browser generation
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
