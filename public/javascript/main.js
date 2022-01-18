const randomElm = $("#randomicons");
const catElm = $("#category");
const customizeElm = $("#customiseOrder");

const itemsElm = $("#items");
const carouselElm = $("#carousel");

let selecetedItem;
let chosenFood;

function renderCategories() {
  catElm.empty();

  categories.forEach((cat) => {
    const isSelected = cat.text == selecetedItem;
    const onSelect = () => {
      selecetedItem = cat.text;
      selectedItemChanged();
    };

    const item = createCategoryItem(cat, onSelect, isSelected);
    catElm.append(item);
  });
}

renderCategories();
function selectedItemChanged() {
  renderCategories();
  carouselElm.hide();
  renderFoodItems();
}

function renderFoodItems() {
  itemsElm.hide();
  if (!selecetedItem) return;
  itemsElm.removeClass("hidden");
  itemsElm.slideDown();

  console.log(selecetedItem);
  const { items } = categories.find((c) => c.text == selecetedItem);

  itemsElm.empty();

  items.forEach((item) => {
    const elm = createFoodItem(item, () => {
      chosenFood = item;
      renderQuestionForm();
    });
    itemsElm.append(elm);
  });
}

function renderQuestionForm() {
  if (!chosenFood) return;
  customizeElm.hide();
  customizeElm.removeClass("hidden");
  customizeElm.slideDown();

  const shoppingPrice = customizeElm.find("");
  const shoppingTitle = customizeElm.find("");
  const shoppingImage = customizeElm.find("");
  const shoppingCommentaires = customizeElm.find("");
  const newCommentaire = customizeElm.find("");
}

function closeChosenFood() {
  chosenFood = undefined;
  customizeElm.slideUp();
}
