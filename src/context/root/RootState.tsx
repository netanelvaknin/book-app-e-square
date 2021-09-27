import { ReactNode, createContext, useState } from 'react';

interface IRootContext {
  loading: boolean;
  setLoading: (loading: boolean) => void;
  handleSetLoading: (status: boolean, delay?: number) => void;
}

export const RootContext = createContext<IRootContext | undefined>(undefined);

export const RootState = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState<boolean>(false);

  const handleSetLoading = (status: boolean, delay?: number) => {
    setTimeout(() => {
      setLoading(status);
    }, delay || 0);
  };

  return (
    <RootContext.Provider value={{ loading, setLoading, handleSetLoading }}>
      {children}
    </RootContext.Provider>
  );
};

export default RootState;
