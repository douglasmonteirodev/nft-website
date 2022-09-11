import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../Modal/Modal";

import "./nft-card.css";

const NftCard = (props) => {
  const { title, id, currentBid, creatorImg, imgUrl, creator } =
    props.item;

  const [showModal, setShowModal] = useState(false);

  return (
    <div className='single__nft__card'>
      <div className='nft__img'>
        <img src={imgUrl} alt='img-01 ' className='w-100' />
      </div>

      <div className='nft__content'>
        <h5 className='nft__title'>
          <Link to={`/market/${id}`}>{title}</Link>
        </h5>

        <div className='creator__info-wrapper gap-3 d-flex gap-3'>
          <div className='creator__img'>
            <img src={creatorImg} alt='avatar01' className='w-100' />
          </div>

          <div
            className='creator__info d-flex w-100 align-items-center 
        justify-content-between'
          >
            <div>
              <h6>Created By</h6>
              <p>{creator}</p>
            </div>

            <div>
              <h6>Current Bid</h6>
              <p>{currentBid} ETH</p>
            </div>
          </div>
        </div>

        <div className='d-flex align-items-center justify-content-between  '>
          <button
            className='bid__btn d-flex align-items-center gap-1'
            onClick={() => {
              setShowModal(true);
            }}
          >
            <i className='ri-shopping-bag-line'></i> Place Bid
          </button>

          {showModal && <Modal setShowModal={setShowModal} />}
          <span className='history__link'>
            <Link to='#'>View History</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default NftCard;
