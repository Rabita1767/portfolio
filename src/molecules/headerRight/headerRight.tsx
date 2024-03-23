import { FC } from "react";
import Text from "../../atoms/text/text";
import "./headerRight.scss";
interface IProps {
    nav1: string
    nav2: string
    nav3: string
    nav4: string
    nav5: string
    nav6: string

}
const HeaderRight: FC<IProps> = (props) => {
    return (
        <>
            <div className="o-header-navFlex">
                <div>
                    <Text className="o-header-navFlex__nav">
                        {props.props.nav1}
                    </Text>
                </div>
                <div>
                    <Text className="o-header-navFlex__nav">
                        {props.props.nav2}
                    </Text>
                </div>
                <div>
                    <Text className="o-header-navFlex__nav">
                        {props.props.nav3}
                    </Text>
                </div>
                <div>
                    <Text className="o-header-navFlex__nav">
                        {props.props.nav4}
                    </Text>
                </div>
                <div>
                    <Text className="o-header-navFlex__nav">
                        {props.props.nav5}
                    </Text>
                </div>
                <div>
                    <Text className="o-header-navFlex__nav">
                        {props.props.nav6}
                    </Text>
                </div>
            </div>
        </>
    )
}

export default HeaderRight