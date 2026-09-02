const ONES = [
  '', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine',
  'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen',
  'Seventeen', 'Eighteen', 'Nineteen'
];

const TENS = [
  '', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'
];

function convertLessThanThousand(num: number): string {
  let str = '';
  if (num >= 100) {
    str += ONES[Math.floor(num / 100)] + ' Hundred ';
    num %= 100;
  }
  if (num >= 20) {
    str += TENS[Math.floor(num / 10)] + ' ';
    num %= 10;
  }
  if (num > 0) {
    str += ONES[num] + ' ';
  }
  return str.trim();
}

/**
 * Converts a number into Indian Rupee format in words.
 * E.g., 25000 -> "Twenty Five Thousand Rupees Only"
 * 150500 -> "One Lakh Fifty Thousand Five Hundred Rupees Only"
 */
export function numberToIndianWords(amount: number | string): string {
  const numericAmount = typeof amount === 'string' ? parseFloat(amount.replace(/,/g, '')) : amount;

  if (isNaN(numericAmount) || numericAmount <= 0) {
    return 'Zero Rupees Only';
  }

  const integerPart = Math.floor(numericAmount);
  const decimalPart = Math.round((numericAmount - integerPart) * 100);

  if (integerPart === 0 && decimalPart > 0) {
    return `${convertLessThanThousand(decimalPart)} Paise Only`;
  }

  let crore = Math.floor(integerPart / 10000000);
  let remainder = integerPart % 10000000;

  let lakh = Math.floor(remainder / 100000);
  remainder = remainder % 100000;

  let thousand = Math.floor(remainder / 1000);
  let hundreds = remainder % 1000;

  let result = '';

  if (crore > 0) {
    result += `${convertLessThanThousand(crore)} Crore `;
  }
  if (lakh > 0) {
    result += `${convertLessThanThousand(lakh)} Lakh `;
  }
  if (thousand > 0) {
    result += `${convertLessThanThousand(thousand)} Thousand `;
  }
  if (hundreds > 0) {
    result += `${convertLessThanThousand(hundreds)} `;
  }

  result = result.trim();

  if (decimalPart > 0) {
    result += ` Rupees and ${convertLessThanThousand(decimalPart)} Paise`;
  } else {
    result += ` Rupees`;
  }

  return `${result} Only`;
}

export function formatIndianCurrency(amount: number | string): string {
  const numericAmount = typeof amount === 'string' ? parseFloat(amount.replace(/,/g, '')) : amount;
  if (isNaN(numericAmount)) return '0';
  return new Intl.NumberFormat('en-IN', {
    maximumFractionDigits: 0,
  }).format(numericAmount);
}
