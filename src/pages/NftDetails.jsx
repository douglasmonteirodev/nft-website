import React from "react";

import CommonSection from "../components/ui/Common-section/CommonSection";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import { NFT__DATA } from "../assets/data/data";

import LiveAuction from "../components/ui/Live-auction/LiveAuction";

import "../styles/nft-details.css";

const NftDetails = () => {
  const { id } = useParams();

  const singleNft = NFT__DATA.find((item) => item.id === id);

  return (
    <>
      <CommonSection title={singleNft.title} />

      <section>
        <Container>
          <Row>
            <Col lg='6' md='6' sm='6'>
              <img
                src={singleNft.imgUrl}
                alt=''
                className='w-100 single__nft-img'
              />
            </Col>

            <Col lg='6' md='6' sm='6'>
              <div className='single__nft--content'>
                <h2>{singleNft.title}</h2>

                <div className='d-flex align-items-center justify-content-between'>
                  <div className='d-flex align-items-center gap-4 single__nft-seen'>
                    <span>
                      <i className='ri-eye-line'></i> 451
                    </span>
                    <span>
                      <i className='ri-heart-line'></i>123
                    </span>
                  </div>

                  <div className='d-flex align-items-center gap-2 single__nft-more'>
                    <span>
                      <i className='ri-send-plane-line'></i>
                    </span>
                    <span>
                      <i className='ri-more-2-line'></i>
                    </span>
                  </div>
                </div>
                <div className='nft__creator'>...</div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default NftDetails;
