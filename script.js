function calculateCalories() {
    const age = parseFloat(document.getElementById('age').value);
    const gender = document.getElementById('gender').value;
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const activity = parseFloat(document.getElementById('activity').value);

    if (!age || !weight || !height || !gender || !activity) {
        alert('الرجاء تعبئة جميع الحقول بشكل صحيح');
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

    // الخطوة الجديدة: عرض النتيجة داخل الصفحة للمستخدم
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = سعرات الحفاظ على الوزن: <b>${tdee}</b> سعرة حرارية/اليوم<br> +
                          سعرات خسارة الوزن: <b>${weightLoss}</b> سعرة حرارية/اليوم;
}
