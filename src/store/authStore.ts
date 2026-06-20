import { create } from 'zustand';

interface AuthState {
 user: any | null;
 outlet: any | null;
 setUser: (user:any)=>void;
 setOutlet: (outlet:any)=>void;
}

export const useAuthStore = create<AuthState>((set)=>({
 user:null,
 outlet:null,
 setUser:(user)=>set({user}),
 setOutlet:(outlet)=>set({outlet})
}));
