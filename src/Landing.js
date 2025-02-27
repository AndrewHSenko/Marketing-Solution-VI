import landingimg from "./Assets/landingimg.jpeg"

const Landing = () => {
  return (
    <>
        <button class="card text-dark p-0" >
          <img src={landingimg} class="card-img img-fluid" alt="Marketing VI Logo" />
          <div class="card-img-overlay align-self-start text-white">
              <h1 class="d-none d-lg-block display-1 card-title fw-bold pt-xl-3 pt-lg-2">Marketing Solution VI</h1>
              <h1 class="d-none d-lg-block display-5"><i>The</i> Marketing Solution</h1>
              <h1 class="d-none d-md-block d-lg-none display-2 card-title fw-bold">Marketing Solution VI</h1>
              <h1 class="d-none d-md-block d-lg-none"><i>The</i> Marketing Solution</h1>
              <h1 class="d-md-none display-3 py-0 my-0 card-title fw-bold">Marketing Solution VI</h1>
              <h5 class="d-md-none"><i>The</i> Marketing Solution</h5>
          </div>
        </button>
    </>
  )
}

export default Landing