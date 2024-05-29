import instagramLogo from "../../../server/public/assets/images/InstagramLogo.svg.png";
import facebookLogo from "../../../server/public/assets/images/facebookLogo.svg.png";
import wildCodeSchoolLogo from "../../../server/public/assets/images/wildCodeSchoolLogoEntire.png";

function Footer() {
  return (
    <footer>
      <div className="links">
        <div className="link">
          <a
            href="https://instagram.com/wildcodeschoolofficial?igshid=MzRlODBiNWFlZA=="
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            {/* <i
              className="fa-brands fa-instagram fa-2xl"
              style={{ color: "#464646" }}
            /> */}
            <img src={instagramLogo} alt="instagram" className="socials" />
          </a>
        </div>

        <div className="link">
          <a
            href="https://www.facebook.com/WildCodeSchool/"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
          >
            {/* <i
              className="fa-brands fa-square-facebook fa-2xl"
              style={{ color: "#464646" }}
            /> */}
            <img src={facebookLogo} alt="facebook" className="socials" />
          </a>
        </div>

        <div className="link">
          <a
            href="https://www.wildcodeschool.com/fr-FR/campus/a-distance?utm_source=google&utm_medium=cpc&utm_campaign=brand&utm_term=wild%20code%20school%20formation&utm_campaign=FR+-+campagne+marque&utm_source=adwords&utm_medium=ppc&hsa_acc=4421706736&hsa_cam=14821000047&hsa_grp=136646397004&hsa_ad=629161360522&hsa_src=g&hsa_tgt=aud-762721332217:kwd-1843089244925&hsa_kw=wild%20code%20school%20formation&hsa_mt=p&hsa_ver=3&hsa_net=adwords&gclid=Cj0KCQjw9rSoBhCiARIsAFOiplnZlCQJ9pYcOtDogbe65lclFpy9O6h0jAsmLHvzWtZzYNPlzSBJI98aAhVOEALw_wcB"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={wildCodeSchoolLogo}
              alt="logo"
              className="wildcodeschool-logo"
            />
          </a>
        </div>

        <div className="link nouscontacter">
          <a href="./contactForm.html">
            <i
              className="fa-solid fa-envelope fa-2xl"
              style={{ color: "#464646" }}
            />
            <p>Nous contacter</p>
          </a>
        </div>
      </div>

      <div className="adresse_copyright">
        <div id="adress">
          <p>4 rue Baron</p>
          <p>44000 Nantes</p>
        </div>

        <div id="copyright">
          <p>&copy; wilders 2023</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
