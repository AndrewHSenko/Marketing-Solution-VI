import Plan from "./Plan.js";

const PayPlan = () => {
  return (
    <div class="container-fluid bg-info-subtle pb-3 my-2">
      <h1 class="display-5 text-center text-dark py-2">Pricing Options</h1>
      <div class="row row-cols-1 row-cols-lg-3 row-cols-md-2 g-3 mx-2 mb-2 justify-content-center">
        <div class="col d-flex justify-content-center">
          <Plan listing="1-100" price="$250.00" />
        </div>
        <div class="col d-flex justify-content-center">
          <Plan listing="101-350" price="$450.00" />
        </div>
        <div class="col d-flex justify-content-center">
          <Plan listing="350-999" price="$598.00" />
        </div>
        <div class="col d-flex justify-content-center">
          <Plan listing="1000-1999" price="$675.00" />
        </div>
        <div class="col d-flex justify-content-center">
          <Plan listing="2000-3499" price="$790.00" />
        </div>
        <div class="col d-flex justify-content-center">
          <Plan listing="3500-4999" price="$875.00" />
        </div>
        <div class="col d-flex justify-content-center">
          <Plan listing="5000+" price="$950.00" />
        </div>
      </div>
    </div>
  )
}

export default PayPlan