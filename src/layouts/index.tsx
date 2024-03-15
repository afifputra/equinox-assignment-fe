import NavigationBar from "../components/NavigationBar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layouts: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="d-flex flex-column h-screen">
      <NavigationBar />
      <main className="container flex-grow-1">{children}</main>
    </div>
  );
};

export default Layouts;
