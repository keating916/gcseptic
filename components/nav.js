import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import styles from "../styles/nav.module.css";

export default function Nav() {
	const [dropdown, setdropdown] = useState(false);
	const [changed, setchanged] = useState(false);

	const handleDropdown = () => {
		setdropdown(!dropdown);
	};

	const toggleButton = () => {
		setchanged(!changed);
		setdropdown(false);
	};

	return (
		<nav className={styles.navContainer}>
			<div className={styles.hideButton}>
				<div
					className={styles.navbarToggler}
					type="button"
					data-toggle="collapse"
					data-target="#navbar"
					aria-controls="navbar"
					aria-expanded="false"
					aria-label="Toggle navigation"
					onClick={toggleButton}
				>
					<div
						className={`${styles.bar1} ${
							changed ? styles.change : ""
						}`}
					></div>
					<div
						className={`${styles.bar2} ${
							changed ? styles.change : ""
						}`}
					></div>
					<div
						className={`${styles.bar3} ${
							changed ? styles.change : ""
						}`}
					></div>
				</div>
			</div>
			<div
				className={`${styles.navBar} ${changed ? styles.change : ""}`}
				id="navbar"
			>
				<div>
					<Link href="/">
						<a className={styles.navLink} onClick={toggleButton}>
							Home
						</a>
					</Link>
					<Link href="/about">
						<a className={styles.navLink} onClick={toggleButton}>
							About
						</a>
					</Link>
					<a className={styles.navLink, styles.changeCursor} onClick={handleDropdown}>
						Services &#62;
					</a>
					<Link href="/contact">
						<a className={styles.navLink} onClick={toggleButton}>
							Contact
						</a>
					</Link>
				</div>
				<div
					className={`${styles.navDropdown} ${
						dropdown ? styles.show : ""
					}`}
					onMouseLeave={handleDropdown}
					onClick={toggleButton}
				>
					<Link href="/services/residential">
						<a className={styles.navLink} onClick={toggleButton}>
							Residential Pumping
						</a>
					</Link>
					<Link href="/services/commercial">
						<a className={styles.navLink} onClick={toggleButton}>
							Commercial Pumping
						</a>
					</Link>
					<Link href="/services/construction">
						<a className={styles.navLink} onClick={toggleButton}>
							Construction
						</a>
					</Link>
					<Link href="/services/inspection">
						<a className={styles.navLink} onClick={toggleButton}>
							Septic Inspections
						</a>
					</Link>
					<Link href="/services/faq">
						<a className={styles.navLink} onClick={toggleButton}>
							FAQ
						</a>
					</Link>
				</div>
			</div>
			<div>
				<a
					href="tel:9163661111"
					className={styles.navPhone}
					rel="referrer"
					id="navPhone"
				>
					Call us: 916-366-1111
				</a>
			</div>
		</nav>
	);
}
