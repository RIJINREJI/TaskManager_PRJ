interface HeaderProps {
    title: string;
  }
  
  const Header = ({ title }: HeaderProps) => {
    return (
      <header style={{ backgroundColor: "#0070f3", color: "#fff", padding: "10px 20px" }}>
        <h1>{title}</h1>
      </header>
    );
  };
  
  export default Header;
  