import features from "./Assets/features.jpeg";
import house from "./Assets/house.png";
import pin from "./Assets/pin.png";
import data from "./Assets/data.png";


const Features = () => {
  return (
    <div class="container-fluid">
        <div class="row text-center">
            <div class="d-flex flex-column col-md-3 justify-content-center">
                <div class="align-self-center m-1 w-75">
                    <div class="card border-success-subtle border-2 rounded-4">
                        <img src={house} class="card-img-top w-50 align-self-center pt-1" alt="house"></img>
                        <div class="card-body p-1">
                            <h5 class="card-title display-4 d-none d-lg-block">23,000</h5>
                            <h5 class="card-title display-5 d-block d-lg-none">23,000</h5>
                            <p class="card-text fst-italic">Registered HOAs</p>
                        </div>
                    </div>
                </div>
                <div class="align-self-center w-75 m-1">
                    <div class="card border-success-subtle border-2 rounded-4">
                        <img src={pin} class="card-img-top w-25 align-self-center pt-1" alt="pin"></img>
                        <div class="card-body p-1">
                            <h5 class="card-title display-4 d-none d-lg-block">60</h5>
                            <h5 class="card-title display-5 d-block d-lg-none">60</h5>
                            <p class="card-text fst-italic">Counties</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="d-flex flex-column col-md-3 justify-content-center">
                <div class="align-self-center w-75 m-1">
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
            <div class="d-flex col-md-6">
                <img class="w-100 mx-auto mb-3 p-2 rounded-5 align-self-center" src={features} alt="" />
            </div>
        </div>
        <div class="row mx-5 text-center">
                <h2 class="">Thousands of rows of information, all at your fingertips</h2>
                <p class="px-4 lead">Our list includes a wealth of information, including names, years, managing agents, contact details, and more! You will have the most up-to-date Board of Directors, complete with their information and a registered contact address, for the HOAs you want all in one place.</p>
        </div>
    </div>
  )
}

export default Features