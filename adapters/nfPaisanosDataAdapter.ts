import { AdaptedNFPaisanosData } from "typings/adaptersTypings";
import { NFPAISANO } from "typings/responses";
import getDateFormatted from "utils/getDateFormatted";

/**
 * userTokensAdapter
 *
 * @method nfPaisanosDataAdapter
 * @param
 * @returns
 *
 */

const nfPaisanosDataAdapter = (
  auctionsArr: NFPAISANO[],
): AdaptedNFPaisanosData[] => {
  return auctionsArr?.map((auctionItem) => {
    return {
      id: auctionItem?.id,
      instantPrice: auctionItem?.instantPrice,
      highestBid: auctionItem?.highestBid,
      author: auctionItem?.author,
      authorAvatar: auctionItem?.authorAvatar,
      type: auctionItem?.type,
      stock: auctionItem?.stock,
      likes: auctionItem?.likes,
      auctionCreatedAt: {
        day: getDateFormatted(auctionItem?.createdAt).day,
        time: getDateFormatted(auctionItem?.createdAt).time,
      },
      auctionEndsAt: {
        day: getDateFormatted(auctionItem?.endsAt).day,
        time: getDateFormatted(auctionItem?.endsAt).time,
      },
      media: {
        id: auctionItem?.media?.id,
        image: auctionItem?.media?.image,
        image2x: auctionItem?.media?.image2x,
      },
      attributes: {
        id: auctionItem?.attributes?.id,
        color: auctionItem?.attributes?.color,
        type: auctionItem?.attributes?.type,
      },
      bidUsers: auctionItem?.bidUsers,
    };
  });
};

export default nfPaisanosDataAdapter;
