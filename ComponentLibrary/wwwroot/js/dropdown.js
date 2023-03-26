
function initDropdown(container) {
    const listboxButton = container.querySelector("#listbox-button");
    const selectedName = container.querySelector("#selected-name");
    const listboxOptions = container.querySelector("#listbox-options");

    listboxButton.addEventListener("click", () => {
        listboxOptions.classList.toggle("hidden");
        listboxOptions.classList.toggle("opacity-100");
        listboxOptions.classList.toggle("opacity-0");
    });

    listboxOptions.addEventListener("click", (event) => {
        let target = event.target;
        if (!target.closest("li")) return;

        let option = target.closest("li");
        let id = option.dataset.id;
        let name = option.dataset.name;

        selectedName.textContent = name;
        listboxOptions.classList.toggle("hidden");
        listboxOptions.classList.toggle("opacity-100");
        listboxOptions.classList.toggle("opacity-0");

        const dropdownChangedEvent = new CustomEvent("dropdownChanged", { detail: id });
        container.dispatchEvent(dropdownChangedEvent);
    });
}