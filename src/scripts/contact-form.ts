import emailjs from 'emailjs-com';

function onEmailStart() {
  document
    .getElementById('email-form-submit-btn')
    .classList.add('btn-in-progress');

  document.getElementById('email-form-success-message').classList.add('hidden');
  document.getElementById('email-form-error-message').classList.add('hidden');
}

function onEmailSuccess() {
  document
    .getElementById('email-form-submit-btn')
    .classList.remove('btn-in-progress');

  document
    .getElementById('email-form-success-message')
    .classList.remove('hidden');

  (document.getElementById('contact-form') as HTMLFormElement)?.reset();
}

function onEmailFailure() {
  document
    .getElementById('email-form-submit-btn')
    .classList.remove('btn-in-progress');

  document
    .getElementById('email-form-error-message')
    .classList.remove('hidden');
}

export default function setupContactForm() {
  document.getElementById('contact-form')?.addEventListener('submit', (e) => {
    e.preventDefault();

    onEmailStart();

    let formData = new FormData(e.target as HTMLFormElement);

    let templateParams = {
      from_name: formData.get('name'),
      from_email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    };

    emailjs
      .send(
        process.env.EMAILJS_SERVICE_ID,
        process.env.EMAILJS_TEMPLATE_ID,
        templateParams
      )
      .then(() => {
        onEmailSuccess();
      })
      .catch((err) => {
        console.log(err);
        onEmailFailure();
      });
  });

  emailjs.init(process.env.EMAILJS_USER_ID);
}
