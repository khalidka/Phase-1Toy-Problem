function calculateSalary() {
  const basicSalary = parseFloat(document.getElementById("basicSalary").value);
  const benefits = parseFloat(document.getElementById("benefits").value);

  // Tax (PAYE) calculation
  let taxRate = 0;
  if (basicSalary <= 24000) {
    taxRate = 0.1;
  } else if (basicSalary <= 32333) {
    taxRate = 0.25;
  } else {
    taxRate = 0.3;
  }

  const payee = basicSalary * taxRate;
  let pension = 2400;
  let nhifDeductionsValue = nhifDeductions();
  let nssfDeductionsValue = nssfDeductions();
  let totalDeducations =
    payee + pension + nhifDeductionsValue + nssfDeductionsValue;

  // NHIF Deductions calculation
  function nhifDeductions() {
    let nhifDeductionsValue = 0;
    // NHIF deduction logic goes here
    if (basicSalary <= 5999) {
      return 150;
    } else if (basicSalary >= 6000 && basicSalary < 8000) {
      return 300;
    } else if (basicSalary >= 8000 && basicSalary < 12000) {
      return 400;
    } else if (basicSalary >= 12000 && basicSalary < 15000) {
      return 500;
    } else if (basicSalary >= 15000 && basicSalary < 20000) {
      return 600;
    } else if (basicSalary >= 20000 && basicSalary < 25000) {
      return 750;
    } else if (basicSalary >= 25000 && basicSalary < 30000) {
      return 850;
    } else if (basicSalary >= 30000 && basicSalary < 35000) {
      return 900;
    } else if (basicSalary >= 35000 && basicSalary < 40000) {
      return 950;
    } else if (basicSalary >= 40000 && basicSalary < 45000) {
      return 1000;
    } else if (basicSalary >= 45000 && basicSalary < 50000) {
      return 1100;
    } else if (basicSalary >= 50000 && basicSalary < 60000) {
      return 1200;
    } else if (basicSalary >= 60000 && basicSalary < 70000) {
      return 1300;
    } else if (basicSalary >= 70000 && basicSalary < 80000) {
      return 1400;
    } else if (basicSalary >= 80000 && basicSalary < 90000) {
      return 1500;
    } else if (basicSalary >= 90000 && basicSalary < 100000) {
      return 1600;
    } else if (basicSalary >= 100000) {
      return 1700;
    }

    return nhifDeductionsValue;
  }

  // NSSF Deductions calculation
  function nssfDeductions() {
    let nssfDeductionsValue = parseInt(basicSalary * (6 / 100));

    // NSSF deduction logic goes here
    if (basicSalary <= 100000) {
      return nssfDeductionsValue;
    } else if (basicSalary > 100000 && nssfDeductionsValue < 18000) {
      return nssfDeductionsValue;
    } else if (basicSalary > 100000 && nssfDeductionsValue >= 18000) {
      return 18000;
    }

    return nssfDeductionsValue;
  }

  // Gross Salary calculation
  const grossSalary = basicSalary + benefits;

  // Net Salary calculation
  const netSalary = grossSalary - totalDeducations;

  // Display results
  document.getElementById("grossSalaryRow").lastElementChild.textContent =
    grossSalary.toFixed(2);
  document.getElementById("payeRow").lastElementChild.textContent =
    payee.toFixed(2);
  document.getElementById("nhifRow").lastElementChild.textContent =
    nhifDeductionsValue.toFixed(2);
  document.getElementById("nssfRow").lastElementChild.textContent =
    nssfDeductionsValue.toFixed(2);
  document.getElementById("netSalaryRow").lastElementChild.textContent =
    netSalary.toFixed(2);
}
