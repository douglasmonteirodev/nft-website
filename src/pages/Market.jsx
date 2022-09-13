import React from "react";

import CommonSection from "../components/ui/Common-section/CommonSection";
import NftCard from "../components/ui/Nft-card/NftCard";

import { NFT__DATA } from "../assets/data/data";

import { Container, Row, Col } from "reactstrap";

import "../styles/market.css";

const Market = () => {
  const handleCategory = () => {};
  const handleItems = () => {};
  const handleSort = () => {};

  return (
    <>
      <CommonSection title='MarketPlace' />

      <section>
        <Container>
          <Row>
            <Col lg='12' className='mb-5'>
              <div className='market__product__filter d-flex align-items-center justify-content-between'>
                <div className='filter__left d-flex align-items-center gap-5'>
                  <div className='all__cetegory__filter'>
                    <select onChange={handleCategory}>
                      <option>All Categories</option>
                      <option value='art'>Art</option>
                      <option value='music'>Music</option>
                      <option value='domain-name'>Domain Name</option>
                      <option value='virtual_world'>Virtual World</option>
                      <option value='trending-card'>Trending Cards</option>
                    </select>
                  </div>

                  <div className='all__items__filter'>
                    <select onChange={handleItems}>
                      <option>All items</option>
                      <option value='single__item'>Single Item</option>
                      <option value='bundle'>Bundle</option>
                    </select>
                  </div>
                </div>

                <div className='filter__right'>
                  <select onChange={handleSort}>
                    <option>Sort By</option>
                    <option value='high'>High Rate</option>
                    <option value='mid'>Mid Rate</option>
                    <option value='low'>Low Rate</option>
                  </select>
                </div>
              </div>
            </Col>

            {NFT__DATA.map((item) => (
              <Col lg='3' md='4' sm='6' className='mb-4' key={item.id}>
                <NftCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Market;
