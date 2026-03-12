const Footer = () => {
    return (
        <div className="py-10" >
            <h2
                className="flex justify-center items-center gap-5 text-center text-[20px] sm:text-[24px] font-regular mb-10"
                style={{ fontFamily: "Inknut Antiqua" }}
            >
                <img src="/mail-icon.svg" />    info@dyshadesigns.com
            </h2>
            <p className="flex justify-center items-center gap-5 text-center text-[18px] sm:text-[20px] font-regular "
                style={{ fontFamily: "Inknut Antiqua" }}>© All Rights Reserved By Dysha Design and Contractor Pte. Ltd. 2024</p>
        </div>
    )
}

export default Footer