const form = document.querySelector('form')

form.addEventListener('submit', function(e){
e.preventDefault()
const heightinput = document.querySelector('#Height').value.trim()
const weightinput = document.querySelector('#Weight').value.trim()
const height = parseFloat(heightinput)
const weight = parseFloat(weightinput)
const result = document.querySelector('#result')
const guide = document.querySelector('#warning');
if (height == '' || height < 0 || isNaN(height)){
    result.innerHTML = 'Please enter a valid value'
    guide.innerHTML = ''
    return;

}
else if (weight == '' || weight < 0 || isNaN(weight)){
    result.innerHTML = 'Please enter a valid value'
    guide.innerHTML = ''
    return;
}

    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML = `<span>${bmi}</span>`;

if (bmi < 18.5) {
    guide.innerHTML = "⚠️ You are underweight.";
} else if (bmi < 24.9) {
    guide.innerHTML = "✅ You are normal weight.";
} else if (bmi < 29.9) {
    guide.innerHTML = "⚠️ You are overweight.";
} else {
    guide.innerHTML = "🚨 You are obese.";
}

       
    });

