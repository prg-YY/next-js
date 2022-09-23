import { useRouter } from "next/router"

const ProductDetail = () => {
  const router = useRouter()
  const productId = router.query.productId // "123"
  return (
    <div>
      <h1>product id is : {productId}</h1>
    </div>
  )
}

export default ProductDetail
