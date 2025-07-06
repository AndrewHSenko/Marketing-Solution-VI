import features from "./Assets/features.jpeg";
import house from "./Assets/house.png";
import pin from "./Assets/pin.png";
import data from "./Assets/data.png";

const Features = () => {
  return (
    <div class="container-fluid px-5 ">
        <div class="row text-center">
            <div class="d-flex flex-column col-md-6 justify-content-center">
                <div class="align-self-start d-none d-md-block my-1 w-50">
                    <div class="card border-success-subtle border-2 rounded-4">
                        <img src={pin} class="card-img-top w-25 align-self-center pt-1" alt="pin"></img>
                        <div class="card-body p-1">
                            <h5 class="card-title display-4 d-none d-lg-block">60</h5>
                            <h5 class="card-title display-5 d-block d-lg-none">60</h5>
                            <p class="card-text fst-italic">Counties</p>
                        </div>
                    </div>
                </div>
                <div class="align-self-center my-1 d-block d-md-none w-50">
                    <div class="card border-success-subtle border-2 rounded-4">
                        <img src={pin} class="card-img-top w-25 align-self-center pt-1" alt="pin"></img>
                        <div class="card-body p-1">
                            <h5 class="card-title display-4 d-none d-lg-block">60</h5>
                            <h5 class="card-title display-5 d-block d-lg-none">60</h5>
                            <p class="card-text fst-italic">Counties</p>
                        </div>
                    </div>
                </div>
                <div class="align-self-center w-50 my-1">
                    <div class="card border-success-subtle border-2 rounded-4">
                        <img src={house} class="card-img-top w-50 align-self-center pt-1" alt="house"></img>
                        <div class="card-body p-1">
                            <h5 class="card-title display-4 d-none d-lg-block">23,000</h5>
                            <h5 class="card-title display-5 d-block d-lg-none">23,000</h5>
                            <p class="card-text fst-italic">Registered HOAs</p>
                        </div>
                    </div>
                </div>
                <div class="align-self-end d-none d-md-block w-50 my-1">
                        <div class="card border-success-subtle border-2 rounded-4">
                            <img src={data} class="card-img-top w-50 align-self-center pt-1" alt="data"></img>
                            <div class="card-body p-1">
                            <h5 class="card-title display-4 d-none d-lg-block">14</h5>
                                <h5 class="card-title display-5 d-block d-lg-none">14</h5>
                                <p class="card-text fst-italic">Possible Data Categories</p>
                            </div>
                        </div>
                </div>
                <div class="align-self-center d-block d-md-none w-50 my-1">
                        <div class="card border-success-subtle border-2 rounded-4">
                            <img src={data} class="card-img-top w-50 align-self-center pt-1" alt="data"></img>
                            <div class="card-body p-1">
                            <h5 class="card-title display-4 d-none d-lg-block">14</h5>
                                <h5 class="card-title display-5 d-block d-lg-none">14</h5>
                                <p class="card-text fst-italic">Possible Data Categories</p>
                            </div>
                        </div>
                </div>
            </div>
            <div class="d-flex flex-column col-md-6">
                <img class="row w-100 mx-auto mb-3 p-2 rounded-5" src={features} alt="" />
                <div class="row mx-1 text-center">
                    <h1 class="">Thousands of rows of information, all at your fingertips</h1>
                    <p class="lead py-3 text-start">Our list includes a wealth of information, including names, years, managing agents, contact details, and more! You will have the most up-to-date Board of Directors, complete with their information and a registered contact address, for the HOAs you want all in one place.</p>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Features