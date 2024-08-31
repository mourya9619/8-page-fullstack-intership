function saveSettings() {https://github.com/mourya9619/8-page-fullstack-intership.git
    const settings = {
        visibility: document.getElementById('visibility').value,
        accessPermissions: document.getElementById('access-permissions').value,
        startTime: document.getElementById('start-time').value,
        endTime: document.getElementById('end-time').value,
        attemptLimits: document.getElementById('attempt-limits').value,
        feedbackTiming: document.getElementById('feedback-timing').value,
        gradeDisplay: document.getElementById('grade-display').value,
        notifications: {
            start: document.getElementById('notify-start').checked,
            complete: document.getElementById('notify-complete').checked,
            graded: document.getElementById('notify-graded').checked
        }
    };

    console.log('Settings Saved:', settings);
    alert('Settings have been saved!');
}
