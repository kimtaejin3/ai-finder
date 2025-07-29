import { css } from "@emotion/react";
import { createFileRoute } from "@tanstack/react-router";
import { HiHeart, HiOutlineHeart } from "react-icons/hi";
import { useState } from "react";
import productCover from "../assets/covers/product-cover.webp";
import productCover2 from "../assets/covers/product-cover2.jpeg"
import productCover3 from "../assets/covers/product-cover3.jpeg"
import productCover4 from "../assets/covers/product-cover4.jpeg"

export const Route = createFileRoute("/")({
  component: Index,
});

// 상품 타입 정의
type Product = {
  id: number;
  brand: string;
  name: string;
  price: number;
  imageUrl: string;
  isRecommended?: boolean;
};

// 목 데이터 정의
const mockProducts: Product[] = [
  {
    id: 1,
    brand: "cranberry",
    name: "레이스 플라워 티셔츠",
    price: 19700,
    imageUrl: productCover4
  },
  {
    id: 2,
    brand: "cranberry",
    name: "러브미 글리터 반팔티",
    price: 17900,
    imageUrl: productCover3,
    isRecommended: true
  },
  {
    id: 3,
    brand: "cranberry",
    name: "유니크 레터링 반팔",
    price: 14800,
    imageUrl: productCover2
  }
];

// 상품 카드 컴포넌트
function ProductCard({ product }: { product: Product }) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div css={styles.productCard}>
      <div css={styles.imageContainer}>
        <img src={product.imageUrl} alt={product.name} css={styles.productImage} />
        <button 
          css={styles.favoriteButton}
          onClick={() => setIsFavorite(!isFavorite)}
        >
          {isFavorite ? <HiHeart size={24} color="#ff4d4f" /> : <HiOutlineHeart size={24} color="#000" />}
        </button>
        {product.isRecommended && (
          <div css={styles.badge}>
            🚀 제트배송
          </div>
        )}
      </div>
      <div css={styles.productInfo}>
        <div css={styles.brand}>{product.brand}</div>
        <div css={styles.name}>{product.name}</div>
        <div css={styles.price}>{product.price.toLocaleString()}원</div>
      </div>
    </div>
  );
}

function Index() {
  return (
    <div css={styles.container}>
      <div css={styles.banner}>
        ...
      </div>

      <div css={styles.recommendationSection}>
        <h2 css={styles.sectionTitle}>당신을 위한 추천</h2>
        <div css={styles.productGrid}>
          {mockProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      <footer css={styles.footer}>© 2025 taeya shopping mall</footer>
    </div>
  );
}

const styles = {
  container: css`
    padding: 0 1rem;
  `,
  banner: css`
    width: 100%;
    height: 400px;
    background: rgb(131, 160, 220);
    border-radius: 20px;
    margin-bottom: 2rem;
  `,
  recommendationSection: css`
    margin: 2rem 0;
  `,
  sectionTitle: css`
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
  `,
  productGrid: css`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1.5rem;
  `,
  productCard: css`
    overflow: hidden;
    transition: transform 0.2s;
    
    &:hover {
      transform: translateY(-4px);
    }
  `,
  imageContainer: css`
    position: relative;
    width: 100%;
    padding-bottom: 130%; /* 4:3 비율 */
    overflow: hidden;
    border-radius: 12px;

  `,
  productImage: css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  `,
  favoriteButton: css`
    position: absolute;
    top: 10px;
    right: 10px;
    background: rgba(255, 255, 255, 0.8);
    border: none;
    border-radius: 50%;
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    
    &:hover {
      background: rgba(255, 255, 255, 1);
    }
  `,
  badge: css`
    position: absolute;
    top: 10px;
    left: 10px;
    background: rgba(255, 255, 255, 0.9);
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 600;
  `,
  productInfo: css`
    padding: 1rem 0.5rem;
  `,
  brand: css`
    font-size: 0.9rem;
    color: #666;
    margin-bottom: 0.25rem;
  `,
  name: css`
    font-weight: 500;
    margin-bottom: 0.5rem;
  `,
  price: css`
    font-weight: 600;
    font-size: 1.1rem;
  `,
  footer: css`
    border-top: 1px solid #e5e7eb;
    padding-top: 1.5rem;
    text-align: center;
    font-size: 0.875rem;
    color: #6b7280;
  `
};
