import Card from "./Card";
import Navbar from "./Navbar";

function Main() {
  return (
    <main className="main">
      <Navbar />
      <div className="container-card">
        {" "}
        <Card>
          <img
            className="card-img"
            src="https://file.aiquickdraw.com/imgcompressed/img/compressed_06a6d16cacd71da09d588f345b14bf61.webp"
            alt="car"
          />
          <h3>Audi</h3>
          <h2>€ 160 / d</h2>
        </Card>
        <Card>
          <img
            className="card-img"
            src="https://vehicle-images.dealerinspire.com/stock-images/chrome/6513b180e573b43fc804d8ba5e842549.png"
            alt="car"
          />
          <h3>Mercedes</h3>
          <h2>€ 280 / i</h2>
        </Card>
        <Card>
          <img
            className="card-img"
            src="https://vehicle-images.dealerinspire.com/stock-images/thumbnails/large/chrome/35b1b1358e9d7e1d2aa787e6d348ae01.png"
            alt="car"
          />
          <h3>Volkswagen</h3>
          <h2>€ 180 / d</h2>
        </Card>
        <Card>
          <img
            className="card-img"
            src="https://img.pcauto.com/model/images/touPic/my/BMW-X4_207.png"
          />
          <h3>BMW</h3>
          <h2>€ 220 / i</h2>
        </Card>
      </div>
    </main>
  );
}

export default Main;
