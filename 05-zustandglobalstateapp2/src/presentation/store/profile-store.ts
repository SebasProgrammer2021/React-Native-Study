import { create } from "zustand";

export interface ProfileState {
    name: string;
    email: string;

    changeProfile: (name: string, email: string) => void;
}

export const useProfielStore = create<ProfileState>()(
    (set, get) => ({
        name: "Sebas Doe",
        email: "sebas@gmail.com",
        changeProfile: (name: string, email: string) => {
            set({ name, email })
        }
    })
)