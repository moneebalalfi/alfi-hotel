import React, { Component } from 'react';
import Icon from './Icon';

class Body extends Component {

  state = {
    starsNumber: 5
  }

  render() {
    return (
      <div className="body">
        <div className="photos">
          <figure className="photos-photo">
            <img src={require('../images/hotel/hotel1.jpg')} alt="Photo1" className="photos-photo-img"/>
          </figure>
          
          <figure className="photos-photo">
            <img src={require('../images/hotel/hotel2.jpg')} alt="Photo2" className="photos-photo-img"/>
          </figure>

          <figure className="photos-photo">
            <img src={require('../images/hotel/hotel3.jpg')} alt="Photo3" className="photos-photo-img"/>
          </figure>
        </div>

        <div className="header">
          <div className="header-title">
            <h2 className="header-title-h2">
              Alfi Hotel
            </h2>
            <div className="header-title-stars">
              <Icon icon="star-full" className="header-title-stars-icon" />
              <Icon icon="star-full" className="header-title-stars-icon" />
              <Icon icon="star-full" className="header-title-stars-icon" />
              <Icon icon="star-full" className="header-title-stars-icon" />
              <Icon icon="star-full" className="header-title-stars-icon" />
            </div>
          </div>

          <div className="header-left">
            <div className="location">
              <Icon icon="location2" className="location-icon"/>
              <button className="location-btn">Amman - Jordan</button>
            </div>

            <div className="votes">
              <span className="votes-span">9.1</span>
              <p className="votes-p">739 votes</p>
            </div>
          </div>
        </div>

        {/* // Description */}
        <div className="desc">
          <div className="left">
            <p className="p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque in nam ipsam dicta. Aut quisquam harum voluptatem iure nesciunt molestiae reprehenderit quod alias sequi, nisi, corrupti, enim quos perferendis dicta!
            </p>
            <p className="p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque in nam ipsam dicta. Aut quisquam harum voluptatem!
            </p>
            <ul className="list">
              <li className="list-item">
                <Icon icon="arrow-right" className="list-icon" />
                Close to the beach
              </li>
              <li className="list-item">
                <Icon icon="arrow-right" className="list-icon" />
                Free airport shuttle
              </li>
              <li className="list-item">
                <Icon icon="arrow-right" className="list-icon" />
                Pets allowed
              </li>
              <li className="list-item">
                <Icon icon="arrow-right" className="list-icon" />
                Perfect for families
              </li>
              <li className="list-item">
                <Icon icon="arrow-right" className="list-icon" />
                We speak all languages
              </li>
              <li className="list-item">
                <Icon icon="arrow-right" className="list-icon" />
                Free wifi in all rooms
              </li>
              <li className="list-item">
                <Icon icon="arrow-right" className="list-icon" />
                Breakfast included
              </li>
              <li className="list-item">
                <Icon icon="arrow-right" className="list-icon" />
                Air conditioning and heating
              </li>
            </ul>

            <div className="recommends">
              <div className="recommends-p">
                Nanci and 3 other friends recommend this hotel.
              </div>
              <div className="recommends-imgs">
                <img src={require('../images/recommends/rec1.jpg')} alt="Photo1" className="recommends-imgs-img"/>
                <img src={require('../images/recommends/rec2.jpg')} alt="Photo2" className="recommends-imgs-img"/>
                <img src={require('../images/recommends/rec3.jpg')} alt="Photo3" className="recommends-imgs-img"/>
                <img src={require('../images/recommends/rec4.jpg')} alt="Photo4" className="recommends-imgs-img"/>
              </div>
            </div>
          </div>

          <div className="right">
            <div className="review-box">
              <blockquote className="review-box-quote">
                Lorem ipsum est odit similique cupiditate beatae quisquam fuga earum explicabo molestias, odio aut id dolorum!
              </blockquote>
              <figure className="review-box-user">
                <div className="review-box-user-info">
                  <img src={require('../images/reviews/rev1.jpg')} alt="User 1" className="review-box-user-info-img"/>
                  <div className="review-box-user-info-text">
                    <h4 className="review-box-user-info-text-name">cassandra ramos</h4>
                    <span className="review-box-user-info-text-date">Jan 13rd, 2020</span>
                  </div>
                </div>

                <div className="review-box-user-rate">
                  <span>8.6</span>
                </div>
              </figure>
            </div>

            <div className="review-box">
              <blockquote className="review-box-quote">
                Lorem ipsum est odit similique cupiditate beatae quisquam fuga earum explicabo molestias, odio aut id dolorumb eatae quisquam fuga earum explicabo!
              </blockquote>
              <figure className="review-box-user">
                <div className="review-box-user-info">
                  <img src={require('../images/reviews/rev2.jpg')} alt="User 1" className="review-box-user-info-img"/>
                  <div className="review-box-user-info-text">
                    <h4 className="review-box-user-info-text-name">nicholas sanders</h4>
                    <span className="review-box-user-info-text-date">March 23rd, 2020</span>
                  </div>
                </div>

                <div className="review-box-user-rate">
                  <span>8.1</span>
                </div>
              </figure>
            </div>
            <div className="more">
                <button className="more-btn">
                  Show More
                  <Icon className="more-btn-icon" icon="arrow-right"/>
                </button>
            </div>
          </div>
        </div>

        <div className="footer">
          <h2 className="footer-h2">Good News! We have only 3 free rooms for your selected dates!</h2>
          <button className="footer-btn">
            <span className="footer-btn-span">Book Now!</span>
          </button>
        </div>
      </div>
    );
  }
}

export default Body;
