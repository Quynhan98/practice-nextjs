import { Button } from '@components/common/button';
import photoExperience from '@assets/images/photo-experience.svg';
import playIcon from '@assets/images/icon-triangle.svg';
import { Heading } from '@components/common/title';
import './work-section.css';

export const WorkSection = (): JSX.Element => {
  return (
    <section className="container-work row">
      <div className="work-content__box col-sm-12 col-md-6">
        <div className="main-content">
          <Heading tag="h2">Work at the speed of thought</Heading>
          <p className="main-content__description">
            Tools, tutorials, design and innovation experts, all in one place! The most intuitive
            way to imagine your next user experience.
          </p>
          <div className="main-content__link">
            <Button color="secondary" type="button" extraClass="btn btn-secondary btn-work">
              Get started
            </Button>
            <a className="work__link" href="#">
              <img src={playIcon} className="work__icon" alt="icon play" />
              Watch the Video
            </a>
          </div>
        </div>
      </div>
      <div className="work-image col-sm-12 col-md-6">
        <img src={photoExperience} className="img-fluid" alt="user experience image" />
      </div>
    </section>
  );
};
