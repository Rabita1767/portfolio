import React from 'react'
import Image from '../../atoms/image/image';
import monitor from "../../assets/images/Monitor-cuate.svg"
import Text from '../../atoms/text/text';
import "./bannerImage.scss"
const BannerImage = () => {
    return (
        <div className='o-intro'>
            <div className='o-intro__image' >
                <Image src={monitor} />
            </div>
            <div className='o-intro__color'>
                <div className='o-intro__text'>
                    <div>
                        <Text
                            children="Nice to meet you."
                            className='o-intro__heading'
                        />
                    </div>
                    <div>
                        <Text
                            children=" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem omnis natus vero expedita excepturi. Laudantium, consequuntur maxime! Dicta amet nisi vitae quidem iure esse, modi autem corrupti ipsam velit?"
                            className='o-intro__paragraph'
                        />
                    </div>
                </div>
                <div className='o-intro__intro-content'>
                    <div className='o-intro__intro-conten--left'>
                        <Text
                            children="Rabita Amin"
                            className='o-intro__intro-conten--left--heading'
                        />
                        <Text
                            children="Hello, I am Rabita Amin, a Full-Stack Engineer."
                            className='o-intro__intro-content--right--paragraph'
                        />
                        <Text
                            children="I completed my Bachelor's degree in Information Technology (IT) from Jahangirnagar University (JU). I am a quick learner, love new challenges. I have good knowledge of data structures and algorithms. I am currently pursuing my career as a software engineer at BJIT and boosting my skills on Full-Stack web development technologies. Besides programming, I love to watch anime. Enjoy good music, movies and series."
                            className='o-intro__intro-content--right--paragraph'
                        />
                    </div>
                    <div className='o-intro__intro-content--right'>

                        <Image src={monitor} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BannerImage;