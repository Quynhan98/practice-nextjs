import { Heading } from '@components/title';
import photoManagement from '@assets/images/photo-management.svg';

export const ManagementSection = (): JSX.Element => {
  return (
    <section className="container-management row">
      <div className=" main-content col-sm-12 col-md-6">
        <p className="fw-bold main-sub-content management">Effortless Validation for</p>
        <Heading tag="h2" extraClass="fw-bold mt-2">
          Management
        </Heading>
        <p className="main-content__description text-start mt-4">
          The Myspace page defines the individual, his or her characteristics, traits, personal
          choices and the overall personality of the person.
        </p>
        <p className="fw-bold main-sub-content mt-4">Accessory makers</p>
        <p className="main-content__description text-start">
          While most people enjoy casino gambling, sports betting, lottery and bingo playing for the
          fun
        </p>
        <p className="fw-bold main-sub-content mt-4">Accessory makers</p>
        <p className="main-content__description text-start">
          If you are looking for a new way to promote your business that won’t cost you more money,
        </p>
      </div>
      <div className="management-image col-sm-12 col-md-6">
        <img className="img-fluid" src={photoManagement} alt="management image" />
      </div>
    </section>
  );
};
