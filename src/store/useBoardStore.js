import { create } from 'zustand';

export const useBoardStore = create((set) => ({
  utilities: [],
  posts: [],
  
  setUtilities: (data) => set({ utilities: data }),
  setPosts: (data) => set({ posts: data }),
  
  // Real-time update for a single utility
  updateUtility: (updated) => set((state) => ({
    utilities: state.utilities.map((u) => u.id === updated.id ? updated : u)
  })),
  
  // Add new post from socket
  addPost: (newPost) => set((state) => ({
    posts: [newPost, ...state.posts]
  })),
}));