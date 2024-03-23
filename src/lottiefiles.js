import Lottie from 'react-lottie';
import * as animationData from './assets/images/computer.json';
import React from 'react';
class LottieFiles extends React.Component {

    constructor(props) {
        super(props);
        this.state = { isStopped: false, isPaused: false };
    }

    render() {
        const buttonStyle = {
            display: 'block',
            margin: '10px auto'
        };

        const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: animationData,
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice'
            }
        };
        return <div>
            <Lottie options={ defaultOptions }
        width = { 400}
        height = { 400}
            />
            </div>



    }
}
export default LottieFiles;