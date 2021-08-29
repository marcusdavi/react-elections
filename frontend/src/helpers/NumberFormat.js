
  export function formatNumber(number) {
    return number.toLocaleString("pt-BR");
  }

  export function formatPercent(number) {
    const percent = parseFloat(number.toFixed(2)).toLocaleString("pt-BR", {
      currency: "BRL",
      minimumFractionDigits: 2,
    });
    return `${percent}%`;
  }
