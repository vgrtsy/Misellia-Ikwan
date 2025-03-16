document.addEventListener("DOMContentLoaded", function () {
    let ctx = document.getElementById("skillChart").getContext("2d");

    new Chart(ctx, {
        type: "doughnut",
        data: {
            labels: ["Public Speaking", "Content Creation", "Dance & Performance", "Social Media Engagement"],
            datasets: [{
                data: [90, 85, 95, 80],
                backgroundColor: ["#f08d29", "#ff6f00", "#ffa600", "#ff8c00"],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
});
