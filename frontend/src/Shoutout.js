const Shoutout = ({header, text}) => {
    return (
      <div class="text-center m-lg-4 px-lg-5 m-1 p-3 px-1 border-top border-bottom border-primary">
          {header}
          <h1 class="lead mt-4 w-75 mx-auto d-none d-md-block">
            {text}
          </h1>
          <h1 class="lead mt-4 px-1 px-md-0 mx-auto d-block d-md-none">
            {text}
          </h1>
      </div>
    )
  }
  
  export default Shoutout