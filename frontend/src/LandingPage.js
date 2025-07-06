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
        <Shoutout 
          header={
          <h1 class="display-5">
            Broaden your horizons and reach new clients with <br class="d-xl-block d-none" />Marketing Solution VI
          </h1>}
          text={"With our CID List, you can find new clients, stay connected with old clients, and help scale your business! Reach out directly to the HOAs you want, market to new counties, and see their information on a map through Mapline"}
        />
        <Features />
        <Shoutout
          header={
          <h1 class="display-5">
            How does it work?
          </h1>}
          text={"Choose which counties you want to market to. Pay by the amount of listings."}/>
        <Map />
        <PayPlan />
        <Sample />
        <Footer />
    </>
  )
}

export default LandingPage