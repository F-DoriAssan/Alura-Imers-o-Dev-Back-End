import Header from "@/components/header-dashboard";

const Layout = ({ children }) => {
  return (
    <div className="w-full flex items-center justify-center flex-col">
      <Header />
      {children}
    </div>
  );
};

export default Layout;
