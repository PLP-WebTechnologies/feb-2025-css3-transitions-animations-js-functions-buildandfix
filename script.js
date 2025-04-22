
function loadPreferences() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.className = savedTheme === 'dark' ? 'theme-dark' : '';
    document.getElementById('themeSelect').value = savedTheme;
}

// Save theme to localStorage
function savePreferences(theme) {
    localStorage.setItem('theme', theme);
}

// Change theme and save preference
function changeTheme() {
    const theme = document.getElementById('themeSelect').value;
    document.body.className = theme === 'dark' ? 'theme-dark' : '';
    savePreferences(theme);

    // Trigger fade-in animation on theme change
    const container = document.querySelector('.container');
    container.classList.remove('fade-in');
    void container.offsetWidth; // Force reflow
    container.classList.add('fade-in');
}

// Toggle pulse animation on button
function togglePulse() {
    const button = document.querySelector('.animated-button');
    button.classList.toggle('pulse');
}

// Initialize preferences on page load
window.onload = loadPreferences;