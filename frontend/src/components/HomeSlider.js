import React from 'react'
import photoOne from '../images/sliderphoto1.png';
import photoTwo from '../images/sliderphoto2.png';
import photoThree from '../images/sliderphoto3.png';

function HomeSlider() {
  return (
    <>
    <div id="image-slider" class="splide">
        <div class="splide__track">
		    <ul class="splide__list">
			    <li class="splide__slide">
				    <img src={photoOne} />
			    </li>
			    <li class="splide__slide">
				    <img src={photoTwo} />
			    </li>
			    <li class="splide__slide">
				    <img src={photoThree} />
			    </li>
		    </ul>
        </div>
    </div>
    </>
  )
}

export default HomeSlider