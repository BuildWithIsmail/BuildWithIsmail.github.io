// ==========================================================================
// 1. DYNAMIC TYPEWRITER ENGINE
// ==========================================================================
const words = ["Developer.", "UI/UX Designer.", "Graphic Designer.", "Motion Designer."];
let i = 0;
let timer;

function typingEffect() {
    let word = words[i].split("");
    var loopTyping = function() {
        if (word.length > 0) {
            document.getElementById('typewriter').innerHTML += word.shift();
        } else {
            setTimeout(deletingEffect, 2000); // How long it stays typed out
            return false;
        }
        timer = setTimeout(loopTyping, 100); // Typing speed (ms)
    };
    loopTyping();
}

function deletingEffect() {
    let word = words[i].split("");
    var loopDeleting = function() {
        if (word.length > 0) {
            word.pop();
            document.getElementById('typewriter').innerHTML = word.join("");
        } else {
            if (words.length > (i + 1)) {
                i++;
            } else {
                i = 0;
            }
            setTimeout(typingEffect, 500); // Delay before starting next word
            return false;
        }
        timer = setTimeout(loopDeleting, 60); // Deleting speed (ms)
    };
    loopDeleting();
}

// Initialize typewriter on load
document.addEventListener("DOMContentLoaded", () => {
    if(document.getElementById('typewriter')) {
        typingEffect();
    }
});

// ==========================================================================
// 2. MATRIX ENVIRONMENT CAPABILITIES NAVIGATION
// ==========================================================================
function switchMatrix(event, envId) {
    // 1. Remove active state from all interactive tab buttons
    const tabs = document.querySelectorAll('.matrix-tab');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });

    // 2. Hide all capability text panels
    const panels = document.querySelectorAll('.matrix-panel');
    panels.forEach(panel => {
        panel.classList.remove('active');
    });

    // 3. Activate the specific target element environment
    event.currentTarget.classList.add('active');
    const targetPanel = document.getElementById(envId);
    if(targetPanel) {
        targetPanel.classList.add('active');
    }
}
