const accordion = document.querySelector(".accordion");

accordion.addEventListener("click", (e) => {
	const accordionBtnEl = e.target.closest(".accordion-btn");
	if (!accordionBtnEl) return;

	const accordionCollapse = accordionBtnEl.nextElementSibling;

	// get height value of accordion;
	const heightValue = Number(
		window
			.getComputedStyle(accordionCollapse)
			.getPropertyValue("--height")
			.split("px")[0]
	);

	if (heightValue === 0) {
		// parentElement = .accordion-item
		e.target.parentElement.classList.add("show");
		const accordionHeight = `${parseInt(accordionCollapse.scrollHeight)}px`;

		accordionBtnEl
			.querySelector(".material-icons")
			.style.setProperty("--rotate", "180deg");
		accordionCollapse.style.setProperty("--height", accordionHeight);
		return;
	}

	e.target.parentElement.classList.remove("show");
	accordionCollapse.style.setProperty("--height", 0);
	accordionBtnEl
		.querySelector(".material-icons")
		.style.setProperty("--rotate", 0);
});
