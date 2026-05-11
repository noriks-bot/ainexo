'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface FunnelState {
  currentPage: number;
  quizStep: number;
  quizAnswers: Record<number, string | string[]>;
  email: string;
  name: string;
  userType: string;
  discount: number;
  selectedPlan: string;
}

interface FunnelContextType extends FunnelState {
  setCurrentPage: (page: number) => void;
  setQuizStep: (step: number) => void;
  setQuizAnswer: (question: number, answer: string | string[]) => void;
  setEmail: (email: string) => void;
  setName: (name: string) => void;
  setUserType: (type: string) => void;
  setDiscount: (discount: number) => void;
  setSelectedPlan: (plan: string) => void;
  nextPage: () => void;
  prevPage: () => void;
}

const FunnelContext = createContext<FunnelContextType | undefined>(undefined);

export function FunnelProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<FunnelState>({
    currentPage: 1,
    quizStep: 1,
    quizAnswers: {},
    email: '',
    name: '',
    userType: '',
    discount: 50,
    selectedPlan: 'week4',
  });

  const setCurrentPage = (page: number) => setState(prev => ({ ...prev, currentPage: page }));
  const setQuizStep = (step: number) => {
    window.scrollTo(0, 0);
    setState(prev => ({ ...prev, quizStep: step }));
  };
  const setQuizAnswer = (question: number, answer: string | string[]) =>
    setState(prev => ({ ...prev, quizAnswers: { ...prev.quizAnswers, [question]: answer } }));
  const setEmail = (email: string) => setState(prev => ({ ...prev, email }));
  const setName = (name: string) => setState(prev => ({ ...prev, name }));
  const setUserType = (type: string) => setState(prev => ({ ...prev, userType: type }));
  const setDiscount = (discount: number) => setState(prev => ({ ...prev, discount }));
  const setSelectedPlan = (plan: string) => setState(prev => ({ ...prev, selectedPlan: plan }));
  const nextPage = () => {
    window.scrollTo(0, 0);
    setState(prev => ({ ...prev, currentPage: prev.currentPage + 1 }));
  };
  const prevPage = () => {
    window.scrollTo(0, 0);
    setState(prev => ({ ...prev, currentPage: Math.max(1, prev.currentPage - 1) }));
  };

  return (
    <FunnelContext.Provider value={{
      ...state,
      setCurrentPage, setQuizStep, setQuizAnswer,
      setEmail, setName, setUserType, setDiscount, setSelectedPlan,
      nextPage, prevPage,
    }}>
      {children}
    </FunnelContext.Provider>
  );
}

export function useFunnel() {
  const context = useContext(FunnelContext);
  if (!context) throw new Error('useFunnel must be used within FunnelProvider');
  return context;
}
