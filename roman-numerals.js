var toRoman = function(num) {
  switch (true) {
    case num < 1 : return "";
    case num >= 1000 : return "M" + toRoman(num - 1000);
    case num >= 900 : return "CM" + toRoman(num - 900);
    case num >= 500 : return "D" + toRoman(num - 500);
    case num >= 400 : return "CD" + toRoman(num - 400);
    case num >= 100 : return "C" + toRoman(num - 100);
    case num >= 90 : return "XC" + toRoman(num - 90);
    case num >= 50 : return "L" + toRoman(num - 50);
    case num >= 40 : return "XL" + toRoman(num - 40);
    case num >= 10 : return "X" + toRoman(num - 10);
    case num >= 9 : return "IX" + toRoman(num - 9);
    case num >= 5 : return "V" + toRoman(num - 5);
    case num >= 4 : return "IV" + toRoman(num - 4);
    case num >= 1 : return "I" + toRoman(num - 1);
  }
};

module.exports = toRoman;
