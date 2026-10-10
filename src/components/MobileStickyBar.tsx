import React from 'react';
import { PageRoute } from '../types';
import { BUSINESS_INFO } from '../data/businessData';
import { Phone, FileText } from 'lucide-react';

interface MobileStickyBarProps {
  currentPath: PageRoute;
  onNavigate: (path: PageRoute) => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({
  currentPath,
  onNavigate,
}) => {
  return (
    <aside
      aria-label="Mobile quick actions"
      className="lg:hidden fixed bottom-0 left-0 right-0 z-30 bg-[#10243A]/95 backdrop-blur-md border-t border-white/10 px-3 py-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] shadow-2xl"
    >
      <div className="max-w-md mx-auto flex items-center gap-2">
        {/* Direct Call Button */}
        <a
          href={`tel:${BUSINESS_INFO.phoneRaw}`}
          className="flex-1 py-2.5 px-3 bg-[#3D8B68] hover:bg-[#2F6D52] active:bg-[#1A3755] text-white rounded-lg font-bold text-xs flex items-center justify-center gap-1.5 shadow-xs transition-colors min-h-[44px]"
          aria-label="Call Four Star General Cleaning Service at (212) 741-9400"
        >
          <Phone className="w-3.5 h-3.5 shrink-0" />
          <span className="whitespace-nowrap">Call (212) 741-9400</span>
        </a>

        {/* Request Quote Button */}
        <button
          type="button"
          onClick={() => onNavigate('/quote')}
          className={`flex-1 py-2.5 px-3 rounded-lg font-bold text-xs flex items-center justify-center gap-1.5 shadow-xs transition-colors min-h-[44px] cursor-pointer whitespace-nowrap ${
            currentPath === '/quote'
              ? 'bg-white text-[#10243A]'
              : 'bg-white/15 hover:bg-white/25 active:bg-white/10 text-white border border-white/20'
          }`}
        >
          <FileText className="w-3.5 h-3.5 shrink-0 text-[#3D8B68]" />
          <span>Get Free Quote</span>
        </button>
      </div>
    </aside>
  );
};
