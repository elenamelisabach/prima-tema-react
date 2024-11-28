import "./Header.css";

function Logo() {
  return (
    <div className="logo">
      <img
        className="logo-img"
        src="https://www.clipartmax.com/png/full/198-1989161_sports-car-logo-car-logo-orange-png.png"
        alt="logo"
      />
    </div>
  );
}

function Title({ title }) {
  return <span className="title">{title}</span>;
}

function Header() {
  return (
    <header className="header">
      <Logo />
      <Title title="Rent-a-Car" />
    </header>
  );
}

export default Header;
