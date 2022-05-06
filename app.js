const accordionButtons = document.querySelectorAll(".accordion-btn");

accordionButtons.forEach((button) => {
	button.addEventListener("click", (e) => {
		const accordionCollapse = e.target.nextElementSibling;

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
			const accordionHeight = `${parseInt(
				accordionCollapse.scrollHeight
			)}px`;

			// lastElementChild = .span icon
			e.target.lastElementChild.style.setProperty("--rotate", "180deg");
			accordionCollapse.style.setProperty("--height", accordionHeight);
			return;
		} else {
			e.target.parentElement.classList.remove("show");
			accordionCollapse.style.setProperty("--height", 0);
			e.target.lastElementChild.style.setProperty("--rotate", 0);
		}
	});
});
