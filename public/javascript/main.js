const randomElm = $("#randomicons");
const catElm = $("#category");
const customizeElm = $("#customiseOrder");
const itemsElm = $("#items");
const carouselElm = $("#carousel");
let selecetedItem ="tacos";
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
selectedItemChanged();
function selectedItemChanged() {
  renderCategories();
  carouselElm.hide();
  renderFoodItems();
}

function renderFoodItems() {
  itemsElm.fadeOut();
  if (!selecetedItem) return;
  itemsElm.removeClass("hidden");
  itemsElm.fadeIn();

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
  customizeElm.fadeIn();
}
