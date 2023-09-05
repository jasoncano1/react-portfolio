import "./contact.css";

const Contact = () => {

    const showAlert = e => {
        
        let target = e.target;
        let alert = document.getElementById('alert');
        
        if (!target.value) {
            alert.innerHTML = 'This field is required!';
            alert.style.display = 'block';
        };
        
        if (target.id === 'email' && !target.value.match(/.+@.+\..+/)) {
            alert.innerHTML = 'Please enter a valid email address!';
            alert.style.display = 'block';
        } 

        setTimeout(() => {
            alert.style.display = 'none';
        }, 2000);
    }

    return (
        <main>
            <div className="contact">
                <h2>Contact</h2>
                <label for="name">Name</label>
                <input onBlur={e => showAlert(e)} type="text" id="name" name="name" placeholder="Your name.." />
                <label for="email">Email</label>
                <input onBlur={e => showAlert(e)} type="text" id="email" name="email" placeholder="Your email.." />
                <label for="message">Message</label>
                <textarea onBlur={e => showAlert(e)} id="message" name="message" placeholder="Write something.."></textarea>
                <h4 id='alert'></h4>
                <button onClick={() =>window.location.reload()}> Submit</button>
            </div>
        </main>
    )
}

export default Contact;