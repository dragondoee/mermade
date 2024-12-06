const accordions = document.querySelectorAll('.accordion');

const accordionsTrigger = document.querySelectorAll('.accordion button');
accordionsTrigger.forEach((trigger, index) => {
  const accordionContent = trigger.nextElementSibling;

  trigger.setAttribute('aria-expanded', 'false');
  trigger.setAttribute('id', `accordion-trigger-${index}`);
  accordionContent.setAttribute('id', `accordion-content-${index}`);
  trigger.setAttribute('aria-controls', `accordion-content-${index}`);
  accordionContent.setAttribute(
    'aria-labelledby',
    `accordion-trigger-${index}`,
  );

  trigger.addEventListener('click', () => {
    resetAccordions(trigger.parentElement);

    const isOpen = trigger.getAttribute('aria-expanded') === 'true';

    console.log(isOpen);

    trigger.setAttribute('aria-expanded', !isOpen);
    trigger.parentElement.classList.toggle('accordion--opened');

    trigger.parentElement.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
  });
});

const resetAccordions = (accordionToOmit) => {
  accordions.forEach((accordion) => {
    if (accordion !== accordionToOmit) {
      accordion.classList.remove('accordion--opened');
    }
  });

  accordionsTrigger.forEach((trigger) => {
    if (trigger.parentElement !== accordionToOmit) {
      trigger.setAttribute('aria-expanded', 'false');
    }
  });
};
