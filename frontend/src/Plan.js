const Plan = ({listing, price}) => {
  return (
    <div class="card h-100 w-75 bg-secondary bg-gradient rounded-3 border border-3 border-info">
        <div class="card-body text-center ">
            <h2 class="card-title text-dark m-0">{listing}</h2>
            <p class="fst-italic mb-2">listings</p>
            <h5 class="card-text fst-italic">{price}</h5>
        </div>
    </div>
  )
}

export default Plan