import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import styles from '../styles/contacto.module.css';

function Contacto() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_w3fxk3a',     
      'template_kbd8god',     
      form.current,
      'o10I2Odg-DZLqdidG'     
    ).then(
      (result) => {
        alert('Mensaje enviado correctamente');
        form.current.reset();
      },
      (error) => {
        console.error('Error:', error);
        alert('Ocurrió un error al enviar el mensaje');
      }
    );
  };

  return (
    <section className={styles.section} id="contacto">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>¿Listo para Construir el Futuro?</h2>
          <p className={styles.description}>
            Nos encantaría escuchar sobre tu proyecto. Completa el formulario o contáctanos directamente.
            Estamos aquí para transformar tus ideas en realidad digital.
          </p>
        </div>

        <div className={styles.content}>
          {/* Formulario */}
          <form ref={form} onSubmit={sendEmail} className={styles.form}>
            <div className={styles.formGrid}>
              <div>
                <label htmlFor="name" className={styles.label}>Nombre</label>
                <input type="text" id="name" name="name" className={styles.input} required />
              </div>
              <div>
                <label htmlFor="email" className={styles.label}>Email</label>
                <input type="email" id="email" name="email" className={styles.input} required />
              </div>
            </div>

            <div>
              <label htmlFor="message" className={styles.label}>¿En qué podemos ayudarte?</label>
              <textarea id="message" name="message" rows="5" className={styles.textarea} required></textarea>
            </div>

            <div className={styles.submitContainer}>
              <button type="submit" className={styles.button}>Enviar Mensaje</button>
            </div>
          </form>

          {/* Información de contacto */}
          <div className={styles.infoCard}>
            <h3 className={styles.infoTitle}>Información de Contacto</h3>
            <p className={styles.infoText}>Si prefieres otros medios, aquí nos encuentras:</p>
            <ul className={styles.infoList}>
              <li className={styles.infoItem}>
                <span className={styles.icon}>📧</span>
                evolvera2025@gmail.com
              </li>
              <li className={styles.infoItem}>
                <span className={styles.icon}>📞</span>
                +52 771 357 0508
              </li>
              <li className={styles.infoItem}>
                <span className={styles.icon}>📍</span>
                Pachuca, Hidalgo, México
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacto;
