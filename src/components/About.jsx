import image1 from "../assets/about1.jpg";

const About = () => {
  return (
    <section className="about-card">
      <div className="about-text">
        <h1>About Us</h1>
        <p>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the Semantics, a large
          language ocean.
        </p>
        <ul>
          <li>
            <span className="tick">&#10004;</span> Separated they live
          </li>
          <li>
            <span className="tick">&#10004;</span> Bookmarksgrove right at the
            coast
          </li>
          <li>
            <span className="tick">&#10004;</span> large language ocean
          </li>
        </ul>
        <div>
          <span>
            <button className="abt-btn">Admission</button>
          </span>
          <span>
            <button className="abt-btn">Learn More</button>
          </span>
        </div>
      </div>

      <div>
        <img src={image1} alt="" />
      </div>
      <div className="empty1"></div>
    </section>
  );
};

export default About;
