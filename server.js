const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended:true }));
app.use(express.static(path.join(__dirname, 'public')));

function bmiCategory(bmi) {
    if (bmi < 18.5)  return { label: 'Underweight', css: 'underweight' };
    if (bmi >= 18.5 && bmi < 24.9) return { label: 'Normal weight', css: 'normal' };
    if (bmi >= 25 && bmi < 29.9) return { label: 'Overweight', css: 'overweight' };
    return { label: 'Obese', css: 'obese' };
}       

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
 });

 app.post("/calculate-bmi", (req, res) => {
    const weight = Number(req.body.weight);
    const heightCm = Number(req.body.height) 

      if (!Number.isFinite(weight) || !Number.isFinite(heightCm) || weight <= 0 || heightCm <= 0) {
    return res.redirect("/result?error=1");
  }
    const heightM = heightCm / 100;
    const bmi = weight / (heightM * heightM);
    const bmiRounded = bmi.toFixed(1);
    const cat = bmiCategory(bmiRounded);

    res.redirect(
    `/result?bmi=${bmiRounded}&label=${encodeURIComponent(cat.label)}&css=${cat.css}`
  );
});

app.get('/result', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'result.html'));
});

app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
});