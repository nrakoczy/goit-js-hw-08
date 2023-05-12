import throttle from "lodash.throttle";

const formEl = document.querySelector(".feedback-form");

const updateFormData = () => {
	const formData = JSON.parse(localStorage.getItem("feedback-form-state"));
	if (formData) {
		formEl.email.value = formData.email || "";
		formEl.message.value = formData.message || "";
	} else {
		formEl.reset();
	}
};

const saveFormData = throttle((event) => {
	const formData = {
		email: formEl.email.value,
		message: formEl.message.value,
	};
	localStorage.setItem("feedback-form-state", JSON.stringify(formData));
}, 500);

const clearFormData = (event) => {
	event.preventDefault();
	localStorage.removeItem("feedback-form-state");
	updateFormData();
};

updateFormData();

formEl.addEventListener("input", saveFormData);
formEl.addEventListener("submit", clearFormData);