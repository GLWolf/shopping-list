function main() {
    function createShoppingList() {
      $('#js-shopping-list-form').on('submit', function(e) {
        e.preventDefault()
        const userItem = $('#shopping-list-entry').val()
        $('.shopping-list').append(`
          <li>
            <span class="shopping-item">${userItem}</span>
            <div class="shopping-item-controls">
              <button class="shopping-item-toggle">
                <span class="button-label">check</span>
              </button>
              <button class="shopping-item-delete">
                <span class="button-label">delete</span>
              </button>
            </div>
          </li>
          `)
      })
    }
   
    function checkItem() {
      $('.shopping-list').on('click','.shopping-item-toggle', function(e) {
        $(this).closest('li').children('.shopping-item').toggleClass('shopping-item__checked');
      })
    }

    function deleteItem(){
        $('.shopping-list').on('click','.shopping-item-delete', function(e){
            $(this).closest('li').remove()
        })
    }
   
   
    createShoppingList()
    checkItem()
    deleteItem()
   }
   
   $(main)