# App requirements
## the app must comply to the next requirements

the app will have support for two user roles.

as starting point the application will have a sign in screen

### administrator:
this type of user can, create, edit and delete items.
will have a screen to see all the created items, the screen will have a search bar and item status filter.
the items will be displayed on a grid of cards each card will have two buttons, one for edit, this button
will redirect to another screen using url, and it will load the item data into a formulary for updating its data.
The second button will allow the user to permantly delete the item from the inventary, a confirm message will pop to confirm the performance of the clicked action.
the administrator will have a second screen, on this screen the user will get a table with all the buyed items,
and he will be able to search a given item by its name or order id, and can filter the requested items by 
send status.
the administrator will have a third screen where all the sold and delivered request will be allocated.
he may filter by date and see the acomplished revenue from the sold items.

### buyer:
this type of user, can create a request for a given item, buy it, see it's status and see the shopping history.
the user will have a first screen where he can see a grid will item cards, he can click to buy a specific card, item, then a card formulary will popup asking for payment details when filled correctly, 
a confirm popup to buy the given item, the popup will contain a cancel and confirm buttons, when confirmed a popup message will be created showing that the items was buyed succesfully, and the user will be redirected to his 
shopping list.
the second user screen will be a table that shows all the shoped items and the status from those items.
