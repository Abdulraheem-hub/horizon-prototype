'use client'

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface MobileMenuProps {
  children: React.ReactNode;
}

/**
 * MobileMenu Component
 * 
 * Creates a responsive hamburger menu that slides in from the left on mobile devices.
 * Features:
 * - Hamburger/X icon toggle
 * - Side drawer that slides in from the left
 * - Backdrop overlay when menu is open
 * - Automatic close when clicking outside
 * - Accessible keyboard support
 */
export function MobileMenu({ children }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  /**
   * Toggle the mobile menu open/closed state
   */
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  /**
   * Close menu when clicking outside or pressing Escape
   */
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      // Close if clicking on backdrop (not on the drawer itself)
      if (target.closest('#mobile-menu-backdrop') && !target.closest('#mobile-menu-drawer')) {
        setIsOpen(false);
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
      document.addEventListener('keydown', handleEscapeKey);
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <>
      {/* Mobile menu button - visible only on mobile */}
      <div className="md:hidden">
        <button 
          type="button" 
          className="text-gray-600 hover:text-[#71C9CE] focus:outline-none focus:text-[#71C9CE] p-2 rounded-md transition-colors duration-200"
          id="mobile-menu-button"
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              // X icon when menu is open
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              // Hamburger icon when menu is closed
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      
      {/* Mobile Navigation Drawer - slides in from left */}
      <div 
        className={cn(
          "fixed inset-0 z-50 md:hidden transition-opacity duration-300",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        id="mobile-menu-backdrop"
      >
        {/* Backdrop overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        
        {/* Slide-in drawer */}
        <div 
          className={cn(
            "relative w-80 max-w-sm h-full bg-white shadow-xl transition-transform duration-300 ease-in-out",
            isOpen ? "translate-x-0" : "-translate-x-full"
          )}
          id="mobile-menu-drawer"
        >
          {/* Drawer header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Menu</h2>
            <button
              onClick={toggleMenu}
              className="p-2 text-gray-500 hover:text-gray-700 rounded-md transition-colors duration-200"
              aria-label="Close menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {/* Drawer content with vertical spacing */}
          <div className="p-4 space-y-4">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}