import React from 'react'

function FooterSection(props) {
    return (
        <>
            <div className="footer">
                <div className="social-icons">
                    <span>
                        <i class='bx bxl-google'></i>
                    </span>
                    <span>
                        <i class='bx bxl-facebook'></i>
                    </span>
                    <span>
                        <i class='bx bxl-instagram' ></i>
                    </span>
                    <span>
                    <i class='bx bxl-whatsapp' ></i>
                    </span>
                    <span>
                        <i class='bx bxl-twitter' ></i>
                    </span>
                </div>
                <h1>{props.footerhead}</h1>
                <p>{props.footertext}</p>
                <p>{props.footertext1}</p>
            </div>
        </>
    )
}
export default FooterSection;