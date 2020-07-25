import React from "react"
import Layout from "../components/Layout"

const contact = () => {
  return (
    <Layout>
      <section className="contact-page">
        <article className="contact-form">
          <h3>Contáctame</h3>
          <form action="https://formspree.io/xbjzqpjk" method="POST">
            <div className="form-group">
              <input
                type="text"
                placeholder="Nombre"
                className="form-control"
                name="name"
                required
              />
              <input
                type="email"
                placeholder="email"
                className="form-control"
                name="email"
                required
              />
              <textarea
                name="message"
                rows="5"
                placeholder="message"
                className="form-control"
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn btn">
              Enviar
            </button>
          </form>
        </article>
      </section>
    </Layout>
  )
}

export default contact
