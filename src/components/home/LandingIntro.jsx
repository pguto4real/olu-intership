import React from "react";
import { LandingIntroBadge } from "../UI/LandingIntroBadge";

const LandingIntro = () => {
  return (
    <section id="section-intro" className="no-top no-bottom">
      <div className="container">
        <div className="row">
          <LandingIntroBadge
            icon="icon_wallet"
            text="Set up your wallet "
            desc="Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem."
          />
          <LandingIntroBadge
            icon="icon_cloud-upload_alt"
            text="Add your NFT's "
            desc="Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem."
          />
          <LandingIntroBadge
            icon="icon_tags_alt"
            text="Sell your NFT's"
            desc="Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem."
          />

          
         
        </div>
      </div>
    </section>
  );
};

export default LandingIntro;
