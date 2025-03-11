export default function ContactForm() {
    return(
        <form action="" className="contact-form">
            <div className="input-wrap">
                <label htmlFor="">Full Name</label>
                <input type="text" name="" id="" />
            </div>
            <div className="input-wrap">
                <label htmlFor="">Email</label>
                <input type="email" name="" id="" />
            </div>
            <div className="input-wrap">
                <label htmlFor="">Message</label>
                <textarea name="" id=""></textarea>
            </div>
            <input type="submit" value="Submit" />
        </form>
    )
}