//used for styling the layout of the auth sign-up/in pages
const ClerkLayout = ({ children }: {
  children: React.ReactNode;
}) => {
  return (
    <div className="h-full flex items-center justify-center">
      {children}
    </div>
  );
};

export default ClerkLayout;