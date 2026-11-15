const form = document.querySelector('#booking-form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  const message = ['Здравствуйте! Хочу записаться в I-car76.', `Имя: ${data.get('name')}`, `Автомобиль: ${data.get('car')}`, `Услуга: ${data.get('service')}`, data.get('details') ? `Комментарий: ${data.get('details')}` : ''].filter(Boolean).join('\n');
  window.open(`https://wa.me/79066395728?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
});
