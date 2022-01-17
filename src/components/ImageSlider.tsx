import { makeStyles } from "@material-ui/core";
import { Container } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const useStyles = makeStyles(() => ({
}));

const ImageSlider = () => {
    const classes = useStyles();

    return (
        <Carousel 
            autoPlay={true} 
            infiniteLoop={true} 
            centerMode={true} 
            centerSlidePercentage={25} 
            showThumbs={false} 
            showStatus={false}
            showIndicators={false}
            showArrows={false}
        >
            <div>
                <img src="/img/carousel/1.png" />
            </div>
            <div>
                <img src="/img/carousel/2.png" />
            </div>
            <div>
                <img src="/img/carousel/3.png" />
            </div>
            <div>
                <img src="/img/carousel/4.png" />
            </div>
            <div>
                <img src="/img/carousel/5.png" />
            </div>
            <div>
                <img src="/img/carousel/6.png" />
            </div>
            <div>
                <img src="/img/carousel/7.png" />
            </div>
            <div>
                <img src="/img/carousel/8.png" />
            </div>
            <div>
                <img src="/img/carousel/9.png" />
            </div>
            <div>
                <img src="/img/carousel/10.png" />
            </div>
            <div>
                <img src="/img/carousel/11.png" />
            </div>
            <div>
                <img src="/img/carousel/12.png" />
            </div>
        </Carousel>
    )
}

export default ImageSlider;