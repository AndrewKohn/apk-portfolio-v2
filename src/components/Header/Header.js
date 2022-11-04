import classes from './Header.module.css';
import CheckMark from '../../assets/svg/CheckMark';
import GitHubIcon from '../../assets/svg/GitHubIcon';
import LinkedInIcon from '../../assets/svg/LinkedInIcon';
import HeroBG from '../../assets/svg/section-bg/HeroBG';
import BlobBG from '../../assets/svg/section-bg/BlobBG';

const Header = props => {
  return (
    <div className={classes[`hero-container`]}>
      <HeroBG class={classes[`hero-bg`]} />
      <BlobBG class={classes[`blob-bg`]} />

      <div className={classes[`hero-wrapper`]}>
        <div className={classes[`header-container`]}>
          <h1 className={classes[`primary-header`]}>
            Andrew <br />
            <span>Kohn</span>
          </h1>
          <ul className={classes[`socials-list`]}>
            <li>
              <a href="#" className={classes[`socials-link`]}>
                <LinkedInIcon class={classes.icon} />
              </a>
            </li>
            <li>
              <a href="#" className={classes[`socials-link`]}>
                <GitHubIcon class={classes.icon} />
              </a>
            </li>
          </ul>
        </div>

        <ul className={classes[`description-list`]}>
          <li>
            <CheckMark class={classes.checkmark} />
            <span>
              Front-end <strong>JavaScript/React Developer</strong>
            </span>
          </li>
          <li>
            <CheckMark class={classes.checkmark} />
            <span>
              Back-end <strong>Java Developer</strong>
            </span>
          </li>
          <li>
            <CheckMark class={classes.checkmark} />
            <span>
              A <strong>Detailed-oriented Self-Starter</strong>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
