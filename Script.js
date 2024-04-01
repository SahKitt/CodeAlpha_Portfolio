document.addEventListener("DOMContentLoaded", function() {
    // Define knowledge levels for each language (out of 100)
    const knowledgeLevels = {
        "HTML and CSS": 95,
        "Javascript": 90,
        "Three.js": 70,
        "Solidity": 85,
        "Smart Contracts development": 85,
        "PHP": 30,
        "React.js": 30
    };

    // Get the canvas element
    const canvas = document.getElementById("graph");
    const ctx = canvas.getContext("2d");

    // Set maximum knowledge level
    const maxKnowledgeLevel = 100;

    // Set canvas dimensions
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;

    // Calculate bar width
    const barWidth = 40;

    // Calculate space between bars
    const spaceBetweenBars = 20;

    // Calculate total width of all bars and spaces
    const totalBarWidth = (barWidth + spaceBetweenBars) * Object.keys(knowledgeLevels).length;

    // Calculate starting point for first bar
    let startX = (canvasWidth - totalBarWidth) / 2;

    // Store information about the currently hovered bar
    let hoveredBar = null;

    // Draw the bars and labels
    for (const [language, level] of Object.entries(knowledgeLevels)) {
        // Calculate bar height
        const barHeight = (level / maxKnowledgeLevel) * canvasHeight;

        // Set bar color
        ctx.fillStyle = "#BE5A38";

        // Draw the bar
        ctx.fillRect(startX, canvasHeight - barHeight, barWidth, barHeight);

        // Store language and level as attributes of the bar
        const bar = {
            language: language,
            level: level,
            x: startX,
            y: canvasHeight - barHeight,
            width: barWidth,
            height: barHeight
        };

        // Add event listener for hover effect
        canvas.addEventListener("mousemove", function(event) {
            // Clear the canvas
            ctx.clearRect(0, 0, canvasWidth, canvasHeight);

            // Redraw the bars and labels
            for (const [lang, lvl] of Object.entries(knowledgeLevels)) {
                const barHeight = (lvl / maxKnowledgeLevel) * canvasHeight;
                ctx.fillStyle = "#BE5A38";
                ctx.fillRect(
                    startX,
                    canvasHeight - barHeight,
                    barWidth,
                    barHeight
                );
                ctx.textAlign = "center";
                ctx.fillText(
                    lang,
                    startX + barWidth / 2,
                    canvasHeight + 20
                );
                ctx.textAlign = "end";
                ctx.fillText(
                    lvl + "%",
                    startX + barWidth / 2,
                    canvasHeight - barHeight - 5
                );
                startX += barWidth + spaceBetweenBars;
            }
            startX = (canvasWidth - totalBarWidth) / 2;

            // Get mouse position relative to canvas
            const rect = canvas.getBoundingClientRect();
            const mouseX = event.clientX - rect.left;
            const mouseY = event.clientY - rect.top;

            // Check if mouse is inside any bar
            for (const [lang, lvl] of Object.entries(knowledgeLevels)) {
                const barHeight = (lvl / maxKnowledgeLevel) * canvasHeight;
                const barX = startX;
                const barY = canvasHeight - barHeight;

                if (
                    mouseX >= barX &&
                    mouseX <= barX + barWidth &&
                    mouseY >= barY &&
                    mouseY <= barY + barHeight
                ) {
                    // Store information about the hovered bar
                    hoveredBar = {
                        language: lang,
                        level: lvl,
                        x: barX,
                        y: barY,
                        width: barWidth,
                        height: barHeight
                    };

                    // Display language name over the bar
                    ctx.fillStyle = "black";
                    ctx.textAlign = "center";
                    ctx.font="bold 15px"
                    ctx.fillText(
                        lang,
                        barX + barWidth / 2,
                        barY - 10
                    );
                }
                startX += barWidth + spaceBetweenBars;
            }

            // Reset startX
            startX = (canvasWidth - totalBarWidth) / 2;
        });

        // Move to the next bar position
        startX += barWidth + spaceBetweenBars;
    }

    // Draw y-axis label (Percentage)
    ctx.save();
    ctx.translate(20, canvasHeight / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.textAlign = "center";
    ctx.fillText("Percentage", 0, 50);
    ctx.restore();

    // Function to add labels
    function addLabels() {
        // Get the ul element
        const ul = document.getElementById("skills-list");

        // Loop through li elements
        const lis = ul.getElementsByTagName("li");
        for (let i = 0; i < lis.length; i++) {
            // Get the language name and corresponding knowledge level
            const language = lis[i].dataset.language;
            const level = knowledgeLevels[language];

            // Create a span element for each label
            const label = document.createElement("span");
            label.innerText = level + "%";
            lis[i].appendChild(label);
        }
    }

    // Call the addLabels function
    addLabels();
});



