// Define the HeaderProps interface with a title property
interface HeaderProps {
  title: string;
}

// Define the Header functional component
const Header = ({ title }: HeaderProps) => {
  // Render the Header component
  return (
    <header style={{ backgroundColor: "#0070f3", color: "#fff", padding: "10px 20px" }}>
      <h1>{title}</h1>
    </header>
  );
};

// Export the Header component as the default export
export default Header;
