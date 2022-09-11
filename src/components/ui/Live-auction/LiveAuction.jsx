import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

import NftCard from "../Nft-card/NftCard";
import { NFT__DATA } from "../../../assets/data/data";

import "./live-auction.css";

const LiveAuction = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg='12'>
            <div
              className='live__auction__top d-flex align-items-center 
            justify-content-between'
            >
              <h3>Live Auction</h3>
              <span>
                <Link to='/market'>Explore More</Link>
              </span>
            </div>
          </Col>

          {NFT__DATA.slice(0, 4).map((item) => (
            <Col lg='3' key={item.id} md='4' sm='6' className='mb-4'>
              <NftCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default LiveAuction;
