import Link from 'next/link'
import Image from 'next/image';

import styles from '../styles/homecard.module.css'

const HomeCard = (props) => {
	const { target, image, title, aText, cText } = props;
	return (
		<Link href={target} passHref>
            <div className={styles.card}>
                <div className={styles.cardImgTop}>
                   <Image
                        src={`/${image}`}
                        alt={aText}
                        layout="fill"
                    /> 
                </div>
			    <div className="card-body">
					<h4 className="card-title">{title}</h4>
					<p className="card-text">
						{cText}
					</p>
					<p>Find out more</p>
                </div>
            </div>
        </Link>
	);
};

export default HomeCard;