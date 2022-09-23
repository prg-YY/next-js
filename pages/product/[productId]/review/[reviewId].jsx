import { useRouter } from "next/router"

const ReviewId = () => {
  const router = useRouter()
  const { productId, reviewId } = router.query // "123"
  return (
    <div>
      <h1>
        Review {reviewId} for product {productId} Page
      </h1>
    </div>
  )
}

export default ReviewId
