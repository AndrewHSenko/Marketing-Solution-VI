import logo from "./Assets/nb_logo.png";

const Footer = () => {
  return (
    <div class="container-fluid mx-0 pt-2 mt-2 bg-black text-white">
      <div class="row text-center">
        <div class="d-md-none justify-content-center">
          <img src={logo} alt="logo"/>
          <h2 class="text-white">MARKETING SOLUTION VI</h2>
        </div>
        <p class="col-md-4 p-2 mb-0 align-self-center">Email: viger@marketingsolutionvi.com</p>
        <div class="col-md-4 d-none d-md-flex flex-column justify-content-center">
          <img class="w-25 align-self-center" src={logo} alt="logo"/>
          <h2 class="text-white">MARKETING SOLUTION VI</h2>
        </div>
        <p class="col-md-4 p-2 mb-1 align-self-center">Phone Number: (949) 235-1064</p>
      </div>
      <div class="row border-top">
        <p class="p-2 mb-1 text-center text-white">Marketing Solution VI | Copyright 2025 | All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer