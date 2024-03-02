import { PriceList } from '../types/accommodations';

export function calculatePriceRange(pricelist: PriceList[]) {
  return pricelist.reduce(
    (acc, curr) => {
      if (curr.pricePerNight < acc.minPrice) {
        acc.minPrice = curr.pricePerNight;
      }
      if (curr.pricePerNight > acc.maxPrice) {
        acc.maxPrice = curr.pricePerNight;
      }
      return acc;
    },
    {
      minPrice: pricelist[0].pricePerNight,
      maxPrice: pricelist[0].pricePerNight,
    },
  );
}

export function calculateTotalPrice(
  priceList: PriceList[],
  startDate: string,
  endDate: string,
) {
  const start = new Date(startDate);
  const end = new Date(endDate);
  let totalPrice = 0;

  for (let date = start; date < end; date.setDate(date.getDate() + 1)) {
    const priceInterval = priceList.find((interval) => {
      const intervalStart = new Date(interval.intervalStart);
      const intervalEnd = new Date(interval.intervalEnd);
      return date >= intervalStart && date < intervalEnd;
    });
    if (priceInterval) totalPrice += priceInterval.pricePerNight;
  }
  return totalPrice;
}
