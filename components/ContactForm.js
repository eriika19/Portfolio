const contactForm = () => (
  <section id='contact-form'>
    <div className='field'>
      <label className='label'>Nombre</label>
      <div className='control'>
        <input className='input' type='text' placeholder='Text input' />
      </div>
    </div>

    <div className='field'>
      <label className='label'>Nombre de usuario</label>
      <div className='control has-icons-left has-icons-right'>
        <input
          className='input is-success'
          type='text'
          placeholder='Text input'
          value='bulma'
        />
        <span className='icon is-small is-left'>
          <i className='fas fa-user'></i>
        </span>
        <span className='icon is-small is-right'>
          <i className='fas fa-check'></i>
        </span>
      </div>
      <p className='help is-success'>This username is available</p>
    </div>

    <div className='field'>
      <label className='label'>Email</label>
      <div className='control has-icons-left has-icons-right'>
        <input
          className='input is-danger'
          type='email'
          placeholder='Email input'
          value='hello@'
        />
        <span className='icon is-small is-left'>
          <i className='fas fa-envelope'></i>
        </span>
        <span className='icon is-small is-right'>
          <i className='fas fa-exclamation-triangle'></i>
        </span>
      </div>
      <p className='help is-danger'>This email is invalid</p>
    </div>

    <div className='field'>
      <label className='label'>asunto</label>
      <div className='control'>
        <div className='select'>
          <select>
            <option>Seleccionar</option>
            <option>Reclutamiento</option>
            <option>Proyecto</option>
          </select>
        </div>
      </div>
    </div>

    <div className='field'>
      <label className='label'>Mensaje</label>
      <div className='control'>
        <textarea className='textarea' placeholder='Textarea'></textarea>
      </div>
    </div>

    <div className='field'>
      <div className='control'>
        <label className='checkbox'>
          <input type='checkbox' />I agree to the{' '}
          <a href='#'>terms and conditions</a>
        </label>
      </div>
    </div>

    <div className='field'>
      <div className='control'>
        <label className='radio'>
          <input type='radio' name='question' />
          Si
        </label>
        <label className='radio'>
          <input type='radio' name='question' />
          No
        </label>
      </div>
    </div>

    <div className='field is-grouped'>
      <div className='control'>
        <button className='button is-link'>Enviar</button>
      </div>
      <div className='control'>
        <button className='button is-link is-light'>Cancelar</button>
      </div>
    </div>
  </section>
);

export default contactForm;
