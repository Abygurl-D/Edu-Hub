import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
const Features = () => {
  return (
    <section id="f-card">
      <div className="box">
      <div className="green">
      <div className="box-text">
        {/* <span><FontAwesomeIcon icon={faBook} /></span> */}
        <h3>Learn</h3>
        <p>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </p>
      </div>
      </div>
      <div className="orange">
      <div className="box-text">
      <i class="fa-solid fa-car"></i>
        <h3>Play</h3>
        <p>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </p>
      </div>
      </div>
      <div className="blue">
      <div className="box-text">
      <i class="fa-solid fa-bowl-food"></i>
        <h3>Meal</h3>
        <p>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </p>
      </div>
      </div>
      </div>

      
    </section>
  );
};

export default Features;
