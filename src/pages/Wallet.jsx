import React from "react";

import CommonSection from "../components/ui/Common-section/CommonSection";

import { Container, Row, Col } from "reactstrap";

import "../styles/wallet.css";

const Wallet = () => {
  const wallet__data = [
    {
      title: "Bitcoin",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, aliquam id. Qui incidunt ad tempore nostrum quam accusantium esse aliquid.",
      icon: "ri-bit-coin-line",
    },
    {
      title: "Coinbase",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, aliquam id. Qui incidunt ad tempore nostrum quam accusantium esse aliquid.",
      icon: "ri-coin-line",
    },
    {
      title: "Metamask",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, aliquam id. Qui incidunt ad tempore nostrum quam accusantium esse aliquid.",
      icon: "ri-copper-coin-line",
    },
    {
      title: "Authereum",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, aliquam id. Qui incidunt ad tempore nostrum quam accusantium esse aliquid.",
      icon: "ri-money-cny-circle-line",
    },
  ];
  return (
    <>
      <CommonSection title='Wallet' />
      <section>
        <Container>
          <Row>
            <Col lg='12' className='mb-5 text-center'>
              <div className='w-50 m-auto'>
                <h3 className='text-light'>Connect your wallet</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maiores, aliquam id. Qui incidunt ad tempore nostrum quam
                  accusantium esse aliquid.
                </p>
              </div>
            </Col>

            {wallet__data.map((item, index) => (
              <Col lg='3' className='mb-4' key={index}>
                <div className='wallet__item'>
                  <span>
                    <i className={item.icon}></i>
                  </span>
                  <h5>{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Wallet;
