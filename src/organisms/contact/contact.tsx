import "./contact.scss";
import Text from "../../atoms/text/text";
import Input from "../../atoms/input/input";
import Button from "../../atoms/button/button";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
const Contact = () => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    const handleSubmit = (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if (e)
            e.preventDefault()
        setName("");
        setEmail("");
        setMessage("");

    }
    return (
        <div className="o-contact" id="o-contact__id">
            <Text children="Contact" className="o-experience__heading" />
            <div className="o-contact__container">
                <div className="o-contact__form">
                    <form>
                        <div>
                            <Text children="Your Name" className="o-contact__formText" />
                            <div>
                                <Input type="text" value={name}
                                    onChange={setName} isRequired />
                            </div>
                        </div>
                        <div>
                            <Text children="Your Email" className="o-contact__formText" />
                            <div>
                                <Input type="email" value={email}
                                    onChange={setEmail} isRequired />
                            </div>
                        </div>
                        <div>
                            <Text children="Your Message" className="o-contact__formText" />
                            <div>
                                <Input type="text" value={message}
                                    onChange={setMessage} isRequired />
                            </div>
                        </div>
                        <Button type="submit" className="o-contact__button" onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleSubmit(e)} children="Submit" />
                    </form>
                </div>
                <div className="o-contact__info">
                    <div className="o-contact__content">
                        <FontAwesomeIcon icon={faEnvelope} />
                        <Text children="rabitaamin015@gmail.com" />
                    </div>
                    <div className="o-contact__content">
                        <FontAwesomeIcon icon={faLocationDot} />
                        <Text children="Dhaka, Bangladesh" />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact