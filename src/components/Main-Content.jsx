export default function Main() {
  return (
    <section className="card">
      <div className="name">
        <h1 className="heading">Naser Zia Neiazi</h1>
        <p className="title">Full-Stack Developer</p>
        <p className="website">www.naserzia.com</p>
      </div>
      <div className="btn-container">
        <a href="#" className=" btn btn-primary">
          <img src="/icon-email.svg" alt="Email Icon" />
          Email
        </a>
        <a href="#" className=" btn btn-secondary">
          <img src="/icon-linkedIn.png" alt="LinkedIn Icon" />
          linkedIn
        </a>
      </div>
      <div className="about">
        <h2 className="section-heading">About</h2>
        <p className="section-info">
          I am a frontend developer with a particular interest in making things
          simple and automating daily tasks. I try to keep up with security and
          best practices, and am always looking for new things to learn.
        </p>
      </div>
      <div className="interests">
        <h2 className="section-heading">Interests</h2>
        <p className="section-info">
          Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
          Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
        </p>
      </div>
    </section>
  );
}
