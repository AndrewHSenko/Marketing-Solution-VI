import Header from "./Header.js";
import Landing from "./Landing.js";
import Shoutout from "./Shoutout.js";
import Features from "./Features.js";
import Map from "./Map.js";
import PayPlan from "./PayPlan.js";
import Sample from "./Sample.js";
import Footer from "./Footer.js";

const LandingPage = () => {
  return (
    <>
        <Header />
        <Landing />
        <Shoutout header={"Expand your horizons to reach new clients with Marketing Solution VI's HOA list"} text={"With our CID List, you can reach new clients, stay connected with old clients, and watch your business flourish! Bring your marketing into new counties by reaching out directly to the HOAs you want."}/>
        <Features />
        <Shoutout header={"How does it work?"} text={"Choose which counties you want to market to. Pay by the amount of listings."}/>
        <Map />
        <PayPlan />
        <Sample />
        <Footer />
    </>
  )
}

export default LandingPage