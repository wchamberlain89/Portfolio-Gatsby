import React from 'react';
import styles from './ContactForm.module.scss';

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    
    return (
      <div className={styles.container}>
        
        <form 
          onSubmit={this.submitForm}
          action="https://formspree.io/xoqewgba"
          method="POST"
          className={styles.contactForm}
        >
          <input className={styles.input} type="text" placeholder="Your Name" name="name"/>
          <input className={styles.input} type="email" placeholder="Your Email" name="_replyto"/>
          <textarea className={`${styles.input} ${styles.message}`} type="text" placeholder="Your Message Here." name="message"/>
          { 
            status === "SUCCESS" 
            ? <p className={styles.formText}>Thanks!</p> 
            : <button className={`${styles.button}`} type="submit">Send Message</button>
          }
          {
            status === "ERROR" && <p className={styles.formText}>Ooops! There was an error.</p>
          }
        </form>
        
      </div>
    )
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}