import { StateCreator } from "zustand";
import { StoreState } from "..";

export type AnswerPreferencesStore = {
  answerPreferences: {
    detailLevel: number;
    formality: number;
  };
  answerPreferencesSwitches: {
    askQuestions: boolean;
  };
  setDetailLevel: (level: number) => void;
  setFormality: (formality: number) => void;
  setAskQuestions: (askQuestions: boolean) => void;
};

export const createAnswerPreferencesSlice: StateCreator<StoreState, [], [], AnswerPreferencesStore> = (set) => ({
  answerPreferences: {
    detailLevel: 5,
    formality: 5,
  },
  answerPreferencesSwitches: {
    askQuestions: false,
  },
  setDetailLevel: (level: number) => set((state: any) => ({
    answerPreferences: { ...state.answerPreferences, detailLevel: level }
  })),
  setFormality: (formality: number) => set((state: any) => ({
    answerPreferences: { ...state.answerPreferences, formality }
  })),
  setAskQuestions: (askQuestions: boolean) => set((state: any) => ({
    answerPreferencesSwitches: { ...state.answerPreferencesSwitches, askQuestions }
  })),
});