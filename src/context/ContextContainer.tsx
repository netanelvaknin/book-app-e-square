import RootState from './root/RootState';

export const ContextContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <RootState>{children}</RootState>;
};

export default ContextContainer;
