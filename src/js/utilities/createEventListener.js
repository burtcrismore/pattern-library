export function createEventListener(type, selector, callback, elements = document) {
	for (const element of elements) {
		element.addEventListener(type, (event) => {
			if (event.target.matches(selector)) {
				callback(event);
			}
		});
	}
}
