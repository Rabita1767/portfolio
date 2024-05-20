import Image from '../../atoms/image/image';
import monitor from "../../assets/images/Monitor-cuate.svg"
import Text from '../../atoms/text/text';
import laptop from "../../assets/lotties/laptop1.json";
import "./bannerImage.scss";
import Lottie from 'lottie-react';
const BannerImage = () => {

    return (
        <>
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
                                children="I am a professional and enthusiastic programmer in my daily life. I am a quick learner and love to learn and explore new technologies. I love almost all the stacks of web application development and love to make the web more open to the world. My core skill is based on JavaScript and I love to do most of the things using JavaScript."
                                className='o-intro__paragraph'
                            />
                        </div>
                    </div>

                    <div className='o-intro__intro-content' id="o-intro__id">
                        <div className='o-intro__intro-content--left'>
                            <Text
                                children="Rabita Amin"
                                className='o-intro__intro-content--left--heading'
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
                            <Lottie animationData={laptop} />

                        </div>
                    </div>

                </div>




            </div>

        </>
    )
}

export default BannerImage;