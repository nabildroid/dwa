function createCategoryItem(params, onClick, isSelected = false) {
  const { icon, text } = params;

  const button = $(`
        <button class="group group-hover:bg-amber-200 block bg-white transition-all ease-out w-20 p-2 rounded-full">
            <div
                class="w-full aspect-square bg-amber-100 rounded-full overflow-hidden group-hover:p-1 p-5"
            >
                <img class="group-hover:rotate-12 transition-all ease-in-out" src="${icon}" />
            </div>
            <p
                class="pb-4 text-amber-700 mt-5 text-center text-sm font-bold"
            >
                ${text}
            </p>
        </button>
    `);

  const item = $('<li class="block"></li>');
  item.append(button);

  if (isSelected) {
    button.addClass("selectedCategory");
  } else {
    button.removeClass("selectedCategory");
  }

  // Events
  button.click(() => onClick());

  const hoverIn = () => {};

  const hoverOut = () => {};

  button.hover(hoverIn, hoverOut);
  return item;
}

function createFoodItem(params, onClick) {
  const { image, price } = params;
  const item = $(`
        <div class="bg-white rounded-md shadow-xl p-4 space-y-3">
            <img src="${image}" class="w-full bg-cover" />
            <button
            class="rounded-full w-1/2 px-4 bg-yellow-200 mx-auto block text-yellow-600 font-bold text-lg"
            >
            $${price}
            </button>
        </div>
    `);

  item.find("button").click(() => onClick());
  return item;
}
