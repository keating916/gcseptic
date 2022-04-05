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

	let symbol = 8743

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
				<div className={styles.navBarDiv}>
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
					<div className={`${styles.changeCursor} ${styles.row} ${styles.navLink} `} onClick={handleDropdown}>
						<p className={`${styles.p1}`} >Services </p><p className={`${styles.navLink} ${styles.p2} ${dropdown ? styles.rotated : ""}`}> &#9660;</p>
					</div>
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
					onMouseLeave={toggleButton}
					onClick={toggleButton}
				>
					<Link href="/residential">
						<a className={styles.navLink} onClick={toggleButton}>
							Residential Pumping
						</a>
					</Link>
					<Link href="/commercial">
						<a className={styles.navLink} onClick={toggleButton}>
							Commercial Pumping
						</a>
					</Link>
					<Link href="/construction">
						<a className={styles.navLink} onClick={toggleButton}>
							Construction
						</a>
					</Link>
					<Link href="/inspection">
						<a className={styles.navLink} onClick={toggleButton}>
							Septic Inspections
						</a>
					</Link>
					<Link href="/faq">
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
