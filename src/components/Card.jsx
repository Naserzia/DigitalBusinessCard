import Main from "./Main-Content";
import Profile from "./Profile";
import Footer from "./Footer";

export default function Card() {
  return (
    <div className="card-container">
      <Profile />
      <Main />
      <Footer />
    </div>
  );
}
