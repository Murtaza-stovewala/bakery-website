export default function HomeProductCard({ pic, tag, name, price }) {
  return (
    <article>
      <div className='image-container'>
        <img src={pic} alt={tag} />
      </div>
      <div className='product-info'>
        <h2>{name}</h2>
        <p>{tag}</p>
        <h3>{price}</h3>
      </div>
    </article>
  )
}