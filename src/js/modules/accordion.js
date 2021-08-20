import { createEventListener } from '../utilities/createEventListener.js';

export function accordion() {
	const accordions = document.querySelectorAll('.accordion');
	createEventListener(
		'click',
		'.accordion__button',
		(event) => {
			const items = event.currentTarget.querySelectorAll('.accordion__item');
			const accordionAllOpen = event.currentTarget.classList.contains('accordion--all-open');
			const accordionButton = event.target;
			const accordionItem = event.target.closest('.accordion__item');
			const accordionBody = accordionItem.querySelector('.accordion__body');

			const accordionContainsCollapse = accordionBody.classList.contains('collapse');
			const accordionContainsShow = accordionBody.classList.contains('show');
			const accordionContent = accordionItem.querySelector('.accordion__content');
			// const accordionCollapsed = accordionBody.getAttribute('data-accordion') === 'collapsed';
			// const accordionCollapseState = accordionBody.getAttribute('data-accordion');
			// const accordionHasAttribute = accordionBody.hasAttribute('data-accordion');
			// const accordionPanelState = event.currentTarget.getAttribute('data-accordion');

			function expand() {
				accordionBody.classList.remove('collapse');
				accordionBody.classList.add('transition');
				const sectionHeight = accordionBody.scrollHeight;
				accordionBody.style.setProperty('--height', sectionHeight + 'px');
				console.log(sectionHeight);
				// accordionBody.classList.remove('collapse');
				// accordionBody.classList.add('expanding');
				// const sectionHeight = accordionBody.scrollHeight;
				// accordionBody.style.height = sectionHeight + 'px';

				const adjustHeight = () => {
					accordionBody.classList.remove('transition');
					// accordionBody.classList.add('collapse');
					accordionBody.classList.add('show');
					// accordionBody.removeAttribute('style');
					accordionBody.removeEventListener('transitionend', adjustHeight);
					console.log('remove expand transition');
				};
				accordionBody.addEventListener('transitionend', adjustHeight);
			}

			function collapse() {
				accordionBody.classList.remove('show');
				// accordionBody.classList.remove('collapse');
				const sectionHeight = accordionBody.scrollHeight;
				accordionBody.style.setProperty('--height', sectionHeight + 'px');
				accordionBody.classList.add('transition');

				// accordionBody.style.height = sectionHeight + 'px';

				// accordionBody.classList.add('collapsing');

				const adjustHeight = () => {
					accordionBody.classList.remove('transition');
					accordionBody.classList.add('collapse');
					accordionBody.removeAttribute('style');
					accordionBody.removeEventListener('transitionend', adjustHeight);
				};
				accordionBody.addEventListener('transitionend', adjustHeight);
			}

			if (accordionContainsCollapse) {
				expand();
			} else {
				collapse();
			}
		},
		accordions
	);
}
