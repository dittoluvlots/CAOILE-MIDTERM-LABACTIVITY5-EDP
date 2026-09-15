const profileCard = document.getElementById('profileCard');
const profileName = document.getElementById('profileName');
const profileProgram = document.getElementById('profileProgram');
const profileYear = document.getElementById('profileYear');
const profileStatus = document.getElementById('profileStatus');
const detailsPanel = document.getElementById('detailsPanel');
const studentIdDisplay = document.getElementById('studentIdDisplay');

const nameInput = document.getElementById('nameInput');
const programInput = document.getElementById('programInput');
const yearInput = document.getElementById('yearInput');
const statusInput = document.getElementById('statusInput');

const updateBtn = document.getElementById('updateBtn');
const toggleDetailsBtn = document.getElementById('toggleDetailsBtn');
const themeBtn = document.getElementById('themeBtn');
const resetBtn = document.getElementById('resetBtn');
const formMessage = document.getElementById('formMessage');

const containerEl = document.querySelector('.container');

function isValidStudentName(name) {
    if (typeof name !== 'string') return false;
    return name.trim().length >= 2;
}

function formatStudentStatus(status) {
    return status === 'active' ? 'Active' : 'Inactive';
}

function setStatus(status) {
    if (!profileCard || !profileStatus) return;

    const formattedStatus = formatStudentStatus(status);
    profileCard.dataset.status = status;
    profileStatus.textContent = formattedStatus;

    if (status === 'active') {
        profileCard.classList.add('active');
        profileCard.classList.remove('inactive');
    } else {
        profileCard.classList.add('inactive');
        profileCard.classList.remove('active');
    }
}

function updateProfile() {
    if (!nameInput || !programInput || !yearInput || !statusInput || !formMessage || !profileCard) return;

    const enteredName = nameInput.value;

    if (!isValidStudentName(enteredName)) {
        formMessage.textContent = "Student name is required";
        formMessage.className = "form-message error";
        return;
    }

    formMessage.textContent = "Profile successfully updated!";
    formMessage.className = "form-message success";

    if (profileName) profileName.textContent = enteredName.trim();
    if (profileProgram) profileProgram.textContent = programInput.value;
    if (profileYear) profileYear.textContent = yearInput.value;

    
    setStatus(statusInput.value);
}

function toggleDetails() {
    if (!detailsPanel) return;
    detailsPanel.classList.toggle('hidden');
}

function toggleTheme() {
    document.body.classList.toggle('dark-theme');
}

function resetProfile() {
    if (nameInput) nameInput.value = "Maria Santos";
    if (programInput) programInput.value = "BS Information Technology";
    if (yearInput) yearInput.value = "3rd Year";
    if (statusInput) statusInput.value = "active";

    if (profileName) profileName.textContent = "Maria Santos";
    if (profileProgram) profileProgram.textContent = "BS Information Technology";
    if (profileYear) profileYear.textContent = "3rd Year";
    if (studentIdDisplay) studentIdDisplay.textContent = "Student ID: 2026-001";

    if (profileCard) {
        profileCard.dataset.studentId = "2026-001";
        profileCard.dataset.status = "active";
        profileCard.classList.add('active');
        profileCard.classList.remove('inactive');
    }

    if (profileStatus) profileStatus.textContent = "Active";

    if (formMessage) {
        formMessage.textContent = "";
        formMessage.className = "form-message";
    }

    if (detailsPanel) {
        detailsPanel.classList.remove('hidden');
    }

    document.body.classList.remove('dark-theme');
}

document.addEventListener('DOMContentLoaded', () => {
    if (updateBtn) updateBtn.addEventListener('click', updateProfile);
    if (toggleDetailsBtn) toggleDetailsBtn.addEventListener('click', toggleDetails);
    if (themeBtn) themeBtn.addEventListener('click', toggleTheme);
    if (resetBtn) resetBtn.addEventListener('click', resetProfile);
});