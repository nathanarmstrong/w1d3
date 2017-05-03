var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function calculateSalesTax(companyData, taxRates) {
var results = {};

for(let company of companyData){
  let totalSales = sum(company.sales);
  let totalTaxes = totalSales * (taxRates[company.province]);

  if(!results[company.name]){
    results[company.name] = {totalSales, totalTaxes}
    } else {
    results[company.name].totalSales += totalSales;
    results[company.name].totalTaxes += totalTaxes;
    console.log(results[company.name].totalSales);
    }
  }
  return results;
}

function sum(array) {
  let total = 0;
  for(let i =0; i < array.length; i++){
    total += array[i];
  }
  return total;
}

console.log(calculateSalesTax(companySalesData, salesTaxRates));

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/