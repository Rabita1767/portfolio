import "./education.scss";
import Text from "../../atoms/text/text"
export const Education = () => (
    <div className="o-education" id="o-education__id">
        <Text children="Education" className="o-experience__heading" />
        <div className="o-education__container">
            {/* <div className="o-education__containerLeft">Left</div> */}
            <div className="o-education__containerRight">
                <div className="o-education__contentRight">
                    <Text children="Jahangirnagar University" className="o-project__text" />
                    <Text children="B.SC in Information Technology" className="o-project__subHeader" />
                    <Text children="Feb,18-May,24" />
                </div>
                <div className="o-education__contentRight">
                    <Text children="Birshrestha Noor Mohammad Public College" className="o-project__text" />
                    <Text children="Higher Secondary School Certificate" className="o-project__subHeader" />
                    <Text children="June,15-June,16" />
                </div>

            </div>
        </div>
    </div>
)