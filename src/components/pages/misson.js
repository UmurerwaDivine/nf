import React, { useEffect } from "react";
import "./mission.css";
import Aos from "aos";
import "aos/dist/aos.css";
const Mission = (props) => {
  const { id } = props;

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <React.Fragment>
      <div ClassName="container-fluid" id={id}>
        <div className="row texts">
          <div className="col-sm-6 page" data-aos="fade-left">
            <h5>VISION</h5>
            <p>
              <strong> Our vision </strong>is to make sure every child attains
              the right
              <br />
              to survival, protection, development and participation.
            </p>
            <p id="par">
              We envision a community where everyone has access to good quality,
              <br />
              nutritious food, understands the consequences of hunger and poor
              nutrition.
            </p>
            <p>
              We also aim to work to an environment which no child’s life
              <br />
              is torn apart by war since armed conflict is a reality for
              millions <br />
              of children today in the{" "}
              <strong>Democratic Republic of Congo.</strong>
            </p>
            <p id="par">
              We’re committed to supporting these children to overcome their
              experiences,
              <br />
              and have a real chance at a better future. Children and young
              people have
              <br />
              the right to grow up free from fear and violence, to develop to
              their full
              <br />
              potential and contribute to a peaceful future for themselves and
              for their communities.
            </p>
          </div>
          <div className="col-sm-6 page" data-aos="fade-right">
            <h5>MISSION</h5>
            <p>
              To inspire breakthroughs in the way the{" "}
              <strong>Democratic Republic of Congo.</strong> <br />
              treats children and to achieve immediate and lasting change in
              their lives.
            </p>
            <p id="par">
              To help children create a future of hope for themselves,
              <br />
              for their families, and communities by helping them to develop{" "}
              <br />
              the skills and resources to overcome poverty and injustice.
            </p>
            <p id="par">
              To help eliminate hunger and improve the health
              <br />
              and well-being of our community through access to healthy
              <br />
              and nutritious foods,education and advocacy.
            </p>
          </div>
        </div>
        <div data-aos="fade-up" className="texts strat" style={{}}>
          <h5>STRATEGY</h5>
          <p>
            Child and Youth Care Organization was founded on the belief <br />
            that every child has the potential to change his or her own life and
            that of the world at large.
            <br />
            This belief remains at the heart of the organization today. <br />
            And it underpins everything we say and do - as reflected in our
            strategy <strong>‘what we believe, what we’ll do.’</strong>
          </p>
          <p id="para">
            Child and Youth Care organization works exclusively to improve the
            resilience and
            <br />
            wellbeing of children living with violence and armed conflict.
            <br />
            We empower children in everything we do. We work to unleash <br />
            their inner strength through our creative and engaging approach.
            <br />
            We deliver vital child protection, education and psychosocial
            support.
          </p>
          <p id="para">
            We’ll work with children to create an environment where they don’t
            just survive, but thrive.
            <br />
            So they can realize their full potential and go on to change the
            world.
          </p>
          <p id="para">
            The threats faced by millions of children – poverty, conflict,
            hunger – are daunting.
            <br />
            But in a world of unprecedented wealth and potential, we have both a
            remarkable opportunity
            <br />
            and a responsibility to transform children’s chances – and the
            future we all share.
          </p>
          <p>
            Together we can ensure that every child survives, learns and thrive.
            <br />
            And so they can realize their full potential build a better world.
            <br />
            <strong>Our strategy</strong> shows how, together, we can help make
            that promise a reality.
          </p>
        </div>
      </div>
      <div className="contain">
        <div className="donate">
          <div className="replace">
            <button className="button-donate">DONATE NOW</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Mission;
