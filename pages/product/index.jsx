import Link from "next/link"

const ProductList = ({ productId = 100 }) => {
  return (
    <>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/product/1">
        <a>Product-1</a>
      </Link>
      <Link href="/product/2">
        <a>Product-2</a>
      </Link>
      <Link href="/product/3" replace>
        <a>Product-3</a>
      </Link>
      <Link href={`/product/${productId}`}>
        <a>Product-{productId}</a>
      </Link>
    </>
  )
}

export default ProductList
