// ==========================================================================
// 1. SYSTEM MATRIX NAVIGATION CONTROL
// ==========================================================================
function switchMatrix(event, panelId) {
    // Select and clear active states from all capability tabs
    const tabs = document.querySelectorAll('.matrix-tab');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });

    // Select and hide all information display panels
    const panels = document.querySelectorAll('.matrix-panel');
    panels.forEach(panel => {
        panel.classList.remove('active');
    });

    // Apply the active style accent to the newly clicked tab
    event.currentTarget.classList.add('active');
    
    // Mount and reveal the targeted environment viewport panel
    const targetPanel = document.getElementById(panelId);
    if (targetPanel) {
        targetPanel.classList.add('active');
    }
}
