import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

type Theme = 'light' | 'dark';
type AnimationPreference = 'reduced' | 'full';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  animationPreference: AnimationPreference;
  toggleAnimationPreference: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem('theme');
    return (savedTheme === 'dark' || 
           (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) 
           ? 'dark' : 'light';
  });

  const [animationPreference, setAnimationPreference] = useState<AnimationPreference>(() => {
    const savedPref = localStorage.getItem('animation-preference');
    return (savedPref === 'reduced' || 
           (!savedPref && window.matchMedia('(prefers-reduced-motion: reduce)').matches))
           ? 'reduced' : 'full';
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('animation-preference', animationPreference);
  }, [animationPreference]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  const toggleAnimationPreference = () => {
    setAnimationPreference(prev => prev === 'full' ? 'reduced' : 'full');
  };

  return (
    <ThemeContext.Provider value={{ 
      theme, 
      toggleTheme, 
      animationPreference, 
      toggleAnimationPreference 
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};