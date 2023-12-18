function calculateSalary() {
  const basicSalary =
    parseFloat(document.getElementById("basicSalary").value) || 0;
  const benefits = parseFloat(document.getElementById("benefits").value) || 0;

  // PAYE rates
  const payeRates = [
    { min: 0, max: 24000, rate: 10 },
    { min: 24001, max: 32333, rate: 25 },
    { min: 32334, max: 500000, rate: 30 },
    { min: 500001, max: 800000, rate: 32.5 },
    { min: 800001, max: Infinity, rate: 35 },
  ];

  // NHIF rates
  const nhifRates = [
    { min: 0, max: 5999, deduction: 150 },
    // ... (Add all NHIF rate bands here)
  ];

  // NSSF rates
  const nssfRates = [
    { tier: "I", min: 0, max: 6000, contribution: 6 },
    // ... (Add all NSSF rate bands here)
  ];

  // Calculate PAYE
  let taxableIncome = basicSalary + benefits;
  let paye = calculateTax(payeRates, taxableIncome);

  // Calculate NHIF
  let nhif = calculateDeduction(nhifRates, taxableIncome);

  // Calculate NSSF
  let nssf = calculateContribution(nssfRates, basicSalary);

  // Calculate net salary
  let netSalary = taxableIncome - paye - nhif - nssf;

  // Display results
  // Display results
  document.getElementById("grossSalaryRow").lastElementChild.textContent =
    taxableIncome.toFixed(2);
  document.getElementById("payeRow").lastElementChild.textContent =
    paye.toFixed(2);
  document.getElementById("nhifRow").lastElementChild.textContent =
    nhif.toFixed(2);
  document.getElementById("nssfRow").lastElementChild.textContent =
    nssf.toFixed(2);
  document.getElementById("netSalaryRow").lastElementChild.textContent =
    netSalary.toFixed(2);
}

function calculateTax(rates, income) {
  for (const rate of rates) {
    if (income >= rate.min && income <= rate.max) {
      return income * (rate.rate / 100);
    }
  }
  return 0;
}

function calculateDeduction(rates, income) {
  for (const rate of rates) {
    if (income >= rate.min && income <= rate.max) {
      return rate.deduction;
    }
  }
  return 0;
}

function calculateContribution(rates, income) {
  for (const rate of rates) {
    if (income >= rate.min && income <= rate.max) {
      return income * (rate.contribution / 100);
    }
  }
  return 0;
}
