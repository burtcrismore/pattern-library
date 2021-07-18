import { createEventListener } from '../utilities/createEventListener.js';

export function accordion() {
	const accordions = document.querySelectorAll('.accordion');
	createEventListener(
		'click',
		'.accordion__button',
		(event) => {
			const items = event.currentTarget.querySelectorAll('.accordion__item');
			const accordionAllOpen = event.currentTarget.classList.contains('accordion--all-open');
			const accordionBody = event.target.closest('.accordion__header').nextElementSibling.classList;

			if (accordionAllOpen) {
				accordionBody.toggle('block');
				return;
			}
			if (!accordionAllOpen) {
				for (const item of items) {
					if (!accordionBody.contains('block')) {
						item.children[1].classList.remove('block');
					}
				}
				accordionBody.toggle('block');
				return;
			}
		},
		accordions
	);
}
