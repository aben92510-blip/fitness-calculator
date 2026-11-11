function calculateCalories() {
    const age = parseFloat(document.getElementById('age').value);
    const gender = document.getElementById('gender').value;
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const activity = parseFloat(document.getElementById('activity').value);

    if (!age || !weight || !height) {
        alert('الرجاء تعبئة جميع الحقول بشكل صحيح!');
        return;
    }

    let bmr;
    if (gender === 'male') {
        bmr = (10 * weight) + (6.25 * height) - (5 * age) + 5;
    } else {
        bmr = (10 * weight) + (6.25 * height) - (5 * age) - 161;
    }

    const tdee = Math.round(bmr * activity);
    const weightLoss = tdee - 500; 
    const weightGain = tdee + 300; 

    const resultDiv = document.getElementById('result');
    const caloriesText = document.getElementById('caloriesText');
    const goalText = document.getElementById('goalText');

    caloriesText.innerHTML = سعرات الحفاظ على الوزن: <strong>${tdee} سعرة حرارية</strong>;
    goalText.innerHTML = `
        🔥 للتنشيف وحرق الدهون: <strong>${weightLoss} سعرة</strong><br>
        💪 للتضخيم وبناء العضلات: <strong>${weightGain} سعرة</strong>
    `;

    resultDiv.style.display = 'block';}
