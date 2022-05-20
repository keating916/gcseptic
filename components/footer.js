import Link from 'next/link'

import styles from '../styles/footer.module.css';

export default function Footer() {
	const now = new Date();
	const year = now.getFullYear();

	return (
		<footer className={styles.footer}>
			<div className={styles.footerSection}>
				<p className={styles.copyright}>
					Copyright &copy; {year} &middot; All Rights Reserved &middot;
					G&amp;C Septic Services
				</p>
			</div>
			<div className={styles.footerSection}>
				<div className={styles.socialLinks}>
					<div >
						<a
							href="https://goo.gl/maps/YCCeGN7uhPD3pcgm6"
							target="_blank"
							rel="noreferrer"
						>
							<img className={styles.socialImg} src="/images/gmaps.jpg" />
						</a>
					</div>
					<div>
						<a
							href="https://www.yelp.com/biz/g-and-c-septic-tank-service-wilton"
							target="_blank"
							rel="noreferrer"
						>
							<img className={styles.socialImg} src="/images/yelp.png" />
						</a>
					</div>
					<div>
						<a
							href="https://www.facebook.com/pages/category/Sewer-Service/G-C-Septic-353220071454498/"
							target="_blank"
							rel="noreferrer"
						>
							<img className={styles.socialImg} src="../images/facebook.png" />
						</a>
					</div>
				</div>
			</div>
			<div className={styles.footerSection}>
				<Link href="/"><a className={styles.footerLinks} >
					Home
				</a></Link>
				<Link href="/careers">
					<a className={styles.footerLinks}
				>
					Careers
				</a></Link> 
				<Link href="/sitemap.xml"><a className={styles.footerLinks}>
					Sitemap
				</a></Link>
			</div>
		</footer>
	);
}
