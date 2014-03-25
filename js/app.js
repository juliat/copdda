/* constructor for pager object */
function Pager(numPages) {
  /* default page to 0 */
  this.currentPage = 0;
  this.numPages = numPages;

  /* defining next and previous methods for the Pager object */
  next: function() {
    /* go to next page */
    if (this.currentPage < numPages) {
      this.currentPage--;
    }
  }
  prev: function() {
    /* go to last page */
    if (this.currentPage > 0) {
      this.currentPage++;
    }
  }
}

/* self invoking anonymous function to avoid creating
   stuff that has global scope */
(function(){
  Mousetrap.bind('right', function(e){
    pager.nextPage();
  });
  Mousetrap.bind('left', function(e){
    pager.prevPage();
  });
})();