const { useState, useEffect, useRef } = require("react")
import Image from 'next/image';
import styles from '../styles/carousel.module.css';


const Carousel = (props) => {
    let images = props.photos;
    const [ index, setIndex ] = useState(0);
    const [ lastChange, setLastChange ] = useState(0);

    const nextSlide = (i) => {
        let now = Date.now();
        if(now - lastChange < 5000 && i === "TIMER") {
            return null;
        }
        setLastChange(now);
        let dif;
        if(i === "TIMER") {
            dif = 1;
        }else {
            dif = i.target.name === "next" ? 1 : -1;
        }
        let nextIndex = index + dif;
        if(nextIndex < 0) {
            nextIndex = images.length-1;
        }else if(nextIndex > images.length-1) {
            nextIndex = 0;
        }        
        setIndex(nextIndex);;
    }

    useInterval(() => {
        nextSlide("TIMER");
    }, 5000)
    
    if(!Array.isArray(props.photos)) {
            console.log("No images for Carousel");
            return null;
        }
    let currentImage = images[index];

    return(
        <div className={styles.slideshowContainer}>
            <div className={`${styles.mySlides}, ${styles.fade}`}>
                <div className={styles.bannerImage}>
                    <Image src={currentImage.image}  alt={currentImage.alt} layout="fill" priority={index == 0 ? true : false} />
                    <div className={styles.text}>{currentImage.caption}</div>
                </div>
                
            </div>
            <a className={styles.prev} name="prev" onClick={e => nextSlide(e)}>&#10094;</a>
            <a className={styles.next} name="next" onClick={e => nextSlide(e)}>&#10095;</a>
        </div>
    )
}

function useInterval(callback, delay) {
    const savedCallback = useRef();
  
    // Remember the latest callback.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);
  
    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }

export default Carousel;