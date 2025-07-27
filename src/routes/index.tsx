import { css } from "@emotion/react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	component: Index,
});

function Index() {
	return (
		<div className="p-2">
			<div css={styles.container}>
				{/* Hero Section */}
				<section css={styles.hero}>
					<h1 css={styles.heroTitle}>
						지금 당신에게 꼭 맞는 AI 도구를 찾아드립니다
					</h1>
					<p css={styles.heroSubtitle}>
						과제, 업무, 콘텐츠 제작까지 — 더 똑똑하게, 더 빠르게.
					</p>
					<button css={styles.primaryButton}>✨ AI 도구 추천받기</button>
				</section>

				{/* Category Filter Section */}
				<section css={styles.section}>
					<h2 css={styles.sectionTitle}>목적별 AI 도구 찾기</h2>
					<div css={styles.grid}>
						{[
							"PPT 만들기",
							"블로그 글쓰기",
							"회의록 요약",
							"썸네일 디자인",
							"영상 편집",
							"음성 변조",
							"코드 보조",
							"마케팅 카피",
							"코딩",
						].map((label) => (
							<button key={label} css={styles.tagButton}>
								{label}
							</button>
						))}
					</div>
				</section>

				{/* Trending Picks Section */}
				<section css={styles.section}>
					<h2 css={styles.sectionTitle}>🔥 지금 뜨는 추천 조합</h2>
					<div css={styles.cardGrid}>
						<div css={styles.card}>
							<h3 css={styles.cardTitle}>대학생 발표용 PPT 툴 Top 3</h3>
							<p css={styles.cardDesc}>Gamma, Tome, 미리캔버스 비교</p>
							<button css={styles.linkButton}>보러가기 →</button>
						</div>
						<div css={styles.card}>
							<h3 css={styles.cardTitle}>직장인을 위한 AI 회의 요약 툴</h3>
							<p css={styles.cardDesc}>Noty, Fireflies, Otter.ai 비교</p>
							<button css={styles.linkButton}>보러가기 →</button>
						</div>
					</div>
				</section>

				{/* Chat-based Recommender CTA */}
				<section css={[styles.section, styles.chatSection]}>
					<h2 css={styles.sectionTitle}>나에게 딱 맞는 도구를 찾고 싶다면?</h2>
					<p css={styles.heroSubtitle}>GPT 기반 추천 챗봇과 대화해보세요</p>
					<button css={styles.chatButton}>🤖 AI 도구 추천 챗봇 시작하기</button>
				</section>

				{/* Footer */}
				<footer css={styles.footer}>
					© 2025 AI Tool Navigator. 모두의 AI 시대를 함께합니다.
				</footer>
			</div>
		</div>
	);
}

const styles = {
	container: css`
	  min-height: 100vh;
	  background-color: #ffffff;
	  color: #1f2937;
	  padding: 2rem 1rem;
	  max-width: 96rem;
	  margin: 0 auto;
	`,
	hero: css`
	  text-align: center;
	  margin-bottom: 4rem;
	  display: flex;
	  flex-direction: column;
	  gap: 1rem;
	`,
	heroTitle: css`
	  font-size: 2.5rem;
	  font-weight: bold;
	  color: #111827;
	`,
	heroSubtitle: css`
	  font-size: 1.125rem;
	  color: #6b7280;
	`,
	primaryButton: css`
	  background-color: #2563EB;
	  color: #ffffff;
	  padding: 0.75rem 1.5rem;
	  border-radius: 1rem;
	  &:hover {
		background-color: #1f1f1f;
	  }
	`,
	section: css`
	  margin-bottom: 4rem;
	`,
	sectionTitle: css`
	  font-size: 1.5rem;
	  font-weight: 600;
	  margin-bottom: 1rem;
	`,
	grid: css`
	  display: grid;
	  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
	  gap: 1rem;
	`,
	tagButton: css`
	  background-color: #f3f4f6;
	  padding: 1rem;
	  border-radius: 0.75rem;
	  text-align: center;
	  &:hover {
		background-color: #e5e7eb;
	  }
	`,
	cardGrid: css`
	  display: grid;
	  grid-template-columns: 1fr 1fr;
	  gap: 1.5rem;
	`,
	card: css`
	  background-color: #ffffff;
	  border: 1px solid #e5e7eb;
	  border-radius: 1rem;
	  padding: 1.5rem;
	  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
	`,
	cardTitle: css`
	  font-size: 1.25rem;
	  font-weight: 700;
	  margin-bottom: 0.5rem;
	`,
	cardDesc: css`
	  color: #6b7280;
	  margin-bottom: 1rem;
	`,
	linkButton: css`
	  color: #2563eb;
	  font-weight: 500;
	`,
	chatSection: css`
	  text-align: center;
	`,
	chatButton: css`
	  background-color: #2563eb;
	  color: #ffffff;
	  padding: 0.75rem 1.5rem;
	  border-radius: 0.75rem;
	  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
	  &:hover {
		background-color: #1d4ed8;
	  }
	`,
	footer: css`
	  border-top: 1px solid #e5e7eb;
	  padding-top: 1.5rem;
	  text-align: center;
	  font-size: 0.875rem;
	  color: #6b7280;
	`,
};
