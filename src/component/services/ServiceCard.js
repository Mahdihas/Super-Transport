

const ServiceCard = ({ product }) => {
    const { name,des,img,price} = product;

  
  return (
      <div>
          
          <div className="card bg-base-100 shadow-xl">
  <figure><img src={img} className="h-[300px] w-[100%]" alt="Shoes" /></figure>
  <div className="card-body">
                  <h2 className="card-title capitalize">{ name}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default ServiceCard