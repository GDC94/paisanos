import { NFPAISANO } from "typings/responses";

/**
 *
 * @method adapterColorsToFilter
 * @param auctionsArr an arr of NFPAISANO[]
 * @returns
 *
 */

const adapterColorsToFilter = (auctionsArr: NFPAISANO[]) => {
  return auctionsArr?.reduce((allColors: string[], item) => {
    if (item?.attributes && item?.attributes?.color) {
      if (!allColors.includes(item?.attributes?.color)) {
        allColors?.push(item?.attributes?.color);
      }
    }
    return allColors;
  }, []);
};

export default adapterColorsToFilter;
