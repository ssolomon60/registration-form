let participantCount = 1;

const addBtn = document.getElementById("addParticipant");
const participantsFieldset = document.getElementById("participantsFieldset");
const form = document.getElementById("registrationForm");
const summary = document.getElementById("summary");

function participantTemplate(count) {
    return `
    <section class="participant" id="participant${count}">
        <h3>Participant ${count}</h3>
        <label for="pName${count}">Name:</label>
        <input type="text" id="pName${count}" required>
        <label for="pAge${count}">Age:</label>
        <input type="number" id="pAge${count}" required>
        <label for="fee${count}">Fee:</label>
        <input type="number" id="fee${count}" required>
    </section>`;
}


addBtn.addEventListener("click", () => {
    participantCount++;
    participantsFieldset.insertAdjacentHTML("beforeend", participantTemplate(participantCount));
});

function totalFees() {
    let feeElements = document.querySelectorAll("[id^=fee]");
    feeElements = [...feeElements];
    let total = feeElements.reduce((sum, el) => sum + Number(el.value), 0);
    return total;
}
form.addEventListener("submit", function(event) {
    event.preventDefault();

    const adultName = document.getElementById("adultName").value;
    const totalParticipants = participantCount;
    const fees = totalFees();

    form.style.display = "none";
    summary.style.display = "block";
    summary.innerHTML = `
        <h2>Thank You!</h2>
        <p>Thank you ${adultName} for registering. You have registered ${totalParticipants} participant(s) and owe $${fees} in fees.</p>
    `;
});
