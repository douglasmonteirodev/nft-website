import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

import "./step.css";

const STEP__DATA = [
  {
    title: "Setup your wallet",
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste debitis eaque sint veniam adipisci maiores.",
    icon: "ri-wallet-line",
  },
  {
    title: "Create your collection",
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste debitis eaque sint veniam adipisci maiores.",
    icon: "ri-layout-masonry-line",
  },
  {
    title: "Add your NFTs",
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste debitis eaque sint veniam adipisci maiores.",
    icon: "ri-image-line",
  },
  {
    title: "List them for sale",
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste debitis eaque sint veniam adipisci maiores.",
    icon: "ri-list-check",
  },
];

const StepSection = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg='12' className='mb-4'>
            <h3 className='step__title'>Create and sell you NFTS</h3>
          </Col>

          {STEP__DATA.map((item, index) => (
            <Col lg='3' md='4' sm='6' key={index}>
              <div className='single__step__item'>
                <span>
                  <i className={item.icon}></i>
                  <div className='step__item__content'>
                    <h5>
                      <Link to='/wallet'>{item.title}</Link>
                    </h5>
                    <p className='mb-0'>{item.desc}</p>
                  </div>
                </span>
                item
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default StepSection;
