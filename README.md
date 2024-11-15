# Welcome to my little world !!

## Education
<table>
    <thead>
        <tr>
            <th>Degree, Institution</th>
            <th>Date Attended</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Ph.D., University of illinois at Urbana-Champaign</td>
            <td>Spring 2024 - Current</td>
        </tr>
        <tr>
            <td>M.Sc., Sharif University of Technology, Mechanical Engineering</td>
            <td>Fall 2020 - Spring 2023</td>
        </tr>
        <tr>
            <td>B.Sc., Sharif University of Technology, Mechanical Engineering</td>
            <td>Fall 2016 - Summer 2020</td>
        </tr>
    </tbody>
</table>

## Publications
[[1] Amin M. Nasrabadi, Ahmad R. Eslaminia, <b>Parsa R. Bakhshayesh</b>, Mehdi Ejtehadi, L.Alibiglou, S.Behzadipour*. “A new scheme for the development of IMU-based activity recognition systems for telerehabilitation,” Medical Engineering & Physics, vol. 108, 2022, p. 103876](https://doi.org/10.1016/j.medengphy.2022.103876)

[[2] <b>Parsa Riazi Bakhshayesh</b>, Mehdi Ejtehadi, Alireza Taheri, Saeed Behzadipour*. “The Effects of Data Augmentation Methods on the Performance of Human Activity Recognition,” The 8th Iranian Conference on Signal Processing and Intelligent Systems (ICSPIS 2022), Dec 2022](https://doi.org/10.1109/ICSPIS56952.2022.10043959)

[[3] <b>Parsa Riazi Bakhshayesh</b>, Mehdi Ejtehadi, Saeed Behzadipour*. “Data Augmentation in Mobility Rehab Exercises of PD Patients,” The 9th RSI International Conference on Robotics and Mechatronics (ICRoM), Nov 2021](https://doi.org/10.1109/ICRoM54204.2021.9663507)

[[4] E. Tahvilian, E. Partovi, M. Ejtehadi, Parsa Riazi Bakhshayesh, Saeed Behzadipour*. “Accuracy improvement in simple and complex Human Activity Recognition using a CNN-BiLSTM multi-task deep neural network,” The 8th Iranian Conference on Signal Processing andIntelligent Systems (ICSPIS 2022), Dec 2022](https://doi.org/10.1109/ICSPIS56952.2022.10043933)

[[5] Navid H.Z. Abedini, Amir Nourani*, Mehdi Mohseni, Nesa Hosseini, Sepideh Norouzi, Parsa Riazi Bakhshayesh. “Effects of Geomet- rical and Processing Parameters on Mechanical Properties of Auxetic Polyurethane Foams,” SN Applied Sciences, vol. 4, 2022, p. 162. ](https://link.springer.com/article/10.1007/s42452-022-05042-8#citeas)

## Programming Skills
### Python
<img src="https://www.python.org/static/community_logos/python-logo.png" alt="Python Logo" width="200" height="200">
Skill Level: Advanced
<canvas id="skillChart" width="400" height="300"></canvas>
<script>
    // Get the canvas element
    const canvas = document.getElementById('skillChart');
    const ctx = canvas.getContext('2d');

    // Define the skill levels
    const skills = [
        { name: 'Python', level: 90 },
        { name: 'JavaScript', level: 80 },
        { name: 'HTML', level: 70 },
        { name: 'CSS', level: 60 },
        // Add more skills as needed
    ];

    // Set the bar height and spacing
    const barHeight = 20;
    const barSpacing = 5;

    // Set the starting position for the first bar
    let y = 50;

    // Loop through the skills and draw the bars
    skills.forEach((skill) => {
        const barWidth = skill.level * 2; // Adjust the scale as needed

        // Draw the bar
        ctx.fillStyle = 'blue'; // Set the bar color
        ctx.fillRect(0, y, barWidth, barHeight);

        // Draw the skill name
        ctx.fillStyle = 'black'; // Set the text color
        ctx.font = '10px Arial'; // Set the font
        ctx.fillText(skill.name, barWidth + 10, y + barHeight - 5);

        // Update the y position for the next bar
        y += barHeight + barSpacing;
    });
</script>