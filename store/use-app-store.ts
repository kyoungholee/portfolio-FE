import { create } from "zustand"
import { persist } from "zustand/middleware"

interface AppState {
  // Theme
  theme: "light" | "dark"
  setTheme: (theme: "light" | "dark") => void
  toggleTheme: () => void

  // Selected project for modal
  selectedProjectId: string | null
  setSelectedProjectId: (id: string | null) => void

  // Mobile menu
  isMobileMenuOpen: boolean
  setMobileMenuOpen: (open: boolean) => void
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      // Theme
      theme: "dark",
      setTheme: (theme) => set({ theme }),
      toggleTheme: () =>
        set((state) => ({
          theme: state.theme === "dark" ? "light" : "dark",
        })),

      // Selected project
      selectedProjectId: null,
      setSelectedProjectId: (id) => set({ selectedProjectId: id }),

      // Mobile menu
      isMobileMenuOpen: false,
      setMobileMenuOpen: (open) => set({ isMobileMenuOpen: open }),
    }),
    {
      name: "portfolio-store",
      partialize: (state) => ({ theme: state.theme }),
    }
  )
)
