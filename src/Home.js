import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2020/img/Books/XCM_Manual_1300171_1530574_US_us_books_bhp_jan_us_en_3616145_1500x300_en_US.jpg"
          alt=""
        ></img>
        <div className="home_row">
          <Product
            id={123457}
            title="Glasses"
            price={10.99}
            image="https://s.marketwatch.com/public/resources/images/MW-HS244_amazon_ZG_20190927142210.jpg"
            rating={4}
          />
          <Product
            id={123458}
            title="Speakers"
            price={19.99}
            image="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2020/img/Warehouse_Deals/XCM_Manual_ORIGIN_1266467_1364969_US_AW_us_warehouse_deals_05_3362887_440x440_en_US.jpg"
            rating={4}
          />
          <Product
            id={123459}
            title="Wallets"
            price={4.99}
            image="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1550089492-wallet-best-selling-amazon-products-1550089398.jpg?crop=1xw:1xh;center,top&resize=480:*"
            rating={4}
          />
          <Product
            id={123460}
            title="Working hands"
            price={8.99}
            image="https://cdn.cnn.com/cnnnext/dam/assets/201221105750-amazonbest2020lead.jpg"
            rating={3}
          />
        </div>
        <div className="home_row">
          <Product
            id={123462}
            title="TV acceceriec"
            price={12.99}
            image="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.com%2FBest-Sellers%2Fzgbs&psig=AOvVaw1dFgf00zeHtLos_hXpA2O8&ust=1612388681566000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNC9moeWzO4CFQAAAAAdAAAAABAK"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
