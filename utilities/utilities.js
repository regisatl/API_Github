function dateDiffInDays(date) {

      const oldDate = Date.parse(date.slice(0, 10));
      const currentDate = Date.now();

      const reelDate = Math.floor(( currentDate - oldDate ) / 1000 / 60 / 60 / 24);

      return reelDate;
	
}

function deleteCardIf(card) {
	
}

export { dateDiffInDays, deleteCardIf };
